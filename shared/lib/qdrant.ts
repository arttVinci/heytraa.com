import { QdrantClient } from "@qdrant/js-client-rest";

let _qdrant: QdrantClient | null = null;

export function getQdrant() {
  if (!_qdrant) {
    _qdrant = new QdrantClient({
      url: process.env.QDRANT_URL,
      apiKey: process.env.QDRANT_API_KEY,
    });
  }
  return _qdrant;
}

export const COLLECTION_NAME = "heytraa_knowledge";
