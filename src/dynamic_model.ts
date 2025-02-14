import { createMistral } from "@ai-sdk/mistral";
import { generateText, type LanguageModel } from "ai";
import dotenv from "dotenv";
dotenv.config();

const mistral = createMistral({
  apiKey: process.env.MISTRAL_API_KEY,
});

export const ask = async (
  prompt: string,
  model: LanguageModel
) => {
  const { text } = await generateText({
    model,
    prompt,
  });
  return text;
};

const prompt = "What is the capital of France?";

const mistralResult = await ask(
  prompt,
  mistral("open-mistral-7b")
);
