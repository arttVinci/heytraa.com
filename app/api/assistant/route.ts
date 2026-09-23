import { GoogleGenAI } from "@google/genai";
import { getQdrant, COLLECTION_NAME } from "@/shared/lib/qdrant";
import { redis, SESSION_TTL } from "@/shared/lib/redis";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

interface SessionMessage {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `Kamu adalah "Assistant heytraa", asisten AI resmi di website portofolio pribadi Putra Rizky Nugraha.

TUGAS & GAYA KOMUNIKASI:
1. Bicara sebagai representatif Putra yang cerdas, ramah, artikulatif, dan profesional.
2. Gunakan perspektif orang ketiga ("Putra" atau "dia").
3. Bicaralah secara natural dan mengalir layaknya rekan kerja yang merekomendasikan Putra — BUKAN seperti robot atau teks ensiklopedia.
4. JANGAN gunakan kalimat pembuka klise seperti "Berikut adalah ringkasan singkat...", "Tentu saja!", atau "Berdasarkan informasi yang tersedia...". Langsung jawab intinya secara padat dan menarik.
5. Prioritaskan jawaban yang ringkas (1-2 paragraf padat). Hanya gunakan poin-poin/bullet list jika pertanyaan meminta daftar (misal: daftar proyek atau deretan tech stack).
6. Bold (**teks**) hanya untuk kata kunci paling penting agar nyaman dibaca (jangan membubuhi bold di hampir setiap kata).

INTEGRITAS DATA:
- Jawab HANYA berdasarkan konteks yang disediakan. Jangan pernah mengarang fakta, pengalaman, atau link yang tidak ada.
- Jika ada hal yang tidak tercantum di konteks, sampaikan dengan jujur dan santun, lalu sarankan user menghubungi Putra langsung via email (traarzkyy97@gmail.com) atau LinkedIn.
- Sesuaikan bahasa dengan pertanyaan user (Indonesia santai-profesional atau Inggris).`;

export async function POST(request: Request) {
  const qdrant = getQdrant();

  try {
    const body = await request.json();
    const { message, sessionId } = body as {
      message: string;
      sessionId: string;
    };

    if (!message || !sessionId) {
      return Response.json(
        { error: "message dan sessionId wajib diisi" },
        { status: 400 },
      );
    }

    const embedResult = await ai.models.embedContent({
      model: "gemini-embedding-2",
      contents: message,
    });

    const queryVector = embedResult.embeddings?.[0]?.values;

    if (!queryVector) {
      return Response.json(
        { error: "Gagal membuat embedding untuk pertanyaan" },
        { status: 500 },
      );
    }

    const searchResult = await qdrant.query(COLLECTION_NAME, {
      query: queryVector,
      limit: 3,
      score_threshold: 0.3,
      with_payload: true,
    });

    const contextChunks = (searchResult.points || [])
      .map((point) => (point.payload as { content: string })?.content)
      .filter(Boolean)
      .join("\n\n---\n\n");

    const redisKey = `session:${sessionId}`;
    const rawHistory = await redis.get<SessionMessage[]>(redisKey);
    const history: SessionMessage[] = rawHistory ?? [];

    const contents: Array<{
      role: "user" | "model";
      parts: Array<{ text: string }>;
    }> = [];

    for (const msg of history) {
      contents.push({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }],
      });
    }

    contents.push({
      role: "user",
      parts: [
        {
          text: contextChunks
            ? `Konteks dari knowledge base:\n\n${contextChunks}\n\n---\n\nPertanyaan user: ${message}`
            : `Pertanyaan user: ${message}`,
        },
      ],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
        maxOutputTokens: 2048,
      },
      contents,
    });

    console.log(JSON.stringify(response, null, 2));

    const reply =
      response.text?.trim() ||
      "Maaf, saya tidak bisa menjawab saat ini. Silakan coba lagi.";

    const updatedHistory: SessionMessage[] = [
      ...history,
      { role: "user", content: message },
      { role: "assistant", content: reply },
    ];

    await redis.set(redisKey, updatedHistory, { ex: SESSION_TTL });

    return Response.json({ reply });
  } catch (error) {
    console.error("[Assistant API Error]", error);
    return Response.json(
      { error: "Terjadi kesalahan internal pada assistant" },
      { status: 500 },
    );
  }
}
