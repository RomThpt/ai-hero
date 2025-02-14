import { createMistral } from "@ai-sdk/mistral";
import {
  embedMany,
  embed,
  cosineSimilarity,
} from "ai";
import dotenv from "dotenv";
dotenv.config();

const mistral = createMistral({
  apiKey: process.env.MISTRAL_API_KEY,
});

const model = mistral.embedding("mistral-embed");

const values = ["Dog", "Cat", "Car", "Bike", "House", "Tree", "Flower"];

const { embeddings } = await embedMany({
  model,
  values,
});

const vectorDatabase = embeddings.map(
  (embedding, index) => ({
    value: values[index],
    embedding,
  })
);

const searchTerm = await embed({
  model,
  value: "leaf",
});

const entries = vectorDatabase.map((entry) => {
  return {
    value: entry.value,
    similarity: cosineSimilarity(
        entry.embedding,
        searchTerm.embedding
    ),
  };
});

export const sortedEntries = entries.sort(
  (a, b) => b.similarity - a.similarity
);
