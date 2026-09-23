import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

import { getQdrant, COLLECTION_NAME } from "../shared/lib/qdrant";

async function main() {
  const qdrant = getQdrant();
  console.log("Mengecek collection di Qdrant...");

  const response = await qdrant.getCollections();
  const exists = response.collections.some(
    (col) => col.name === COLLECTION_NAME,
  );

  if (!exists) {
    await qdrant.createCollection(COLLECTION_NAME, {
      vectors: {
        size: 3072,
        distance: "Cosine",
      },
    });
    console.log(`Collection '${COLLECTION_NAME}' berhasil dibuat!`);
  } else {
    console.log(`Collection '${COLLECTION_NAME}' sudah ada.`);
  }
}

main().catch((err) => {
  console.error("Gagal inisialisasi collection:", err);
});
