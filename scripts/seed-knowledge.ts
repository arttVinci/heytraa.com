import fs from "fs";
import path from "path";
import * as dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { getQdrant, COLLECTION_NAME } from "../shared/lib/qdrant";

dotenv.config({ path: ".env" });

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function runIndexing() {
  const qdrant = getQdrant();

  const filePath = path.join(
    process.cwd(),
    "features/assistant/data/knowledge.md",
  );

  if (!fs.existsSync(filePath)) {
    throw new Error(`File tidak ditemukan di: ${filePath}`);
  }

  // 1. Baca dokumen dan potong berdasarkan heading '## '
  const rawText = fs.readFileSync(filePath, "utf-8");
  const chunks = rawText
    .split(/\n(?=## \d+\.)/)
    .map((chunk) => chunk.trim())
    .filter((chunk) => chunk.length > 50);

  console.log(`Memproses ${chunks.length} chunk dokumen...`);

  const points = [];

  // 2. Buat vector embedding untuk tiap chunk
  for (let index = 0; index < chunks.length; index++) {
    const content = chunks[index];
    console.log(`Meng-embed chunk ${index + 1}/${chunks.length}...`);

    const embedResult = await ai.models.embedContent({
      model: "gemini-embedding-2",
      contents: content,
    });

    const vector = embedResult.embeddings?.[0]?.values;

    if (!vector) {
      console.warn(`Gagal membuat embedding untuk chunk #${index + 1}`);
      continue;
    }

    points.push({
      id: index + 1,
      vector: vector,
      payload: {
        content: content,
        source: "knowledge.md",
        chunk_index: index + 1,
      },
    });
  }

  console.log("Menyimpan vektor ke Qdrant...");
  await qdrant.upsert(COLLECTION_NAME, {
    wait: true,
    points: points,
  });

  console.log(
    `Berhasil mengindeks ${points.length} chunk ke dalam collection '${COLLECTION_NAME}'!`,
  );
}

runIndexing().catch((err) => {
  console.error("Proses indexing gagal:", err);
});
