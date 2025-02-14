import { createMistral } from "@ai-sdk/mistral";
import { generateText } from "ai";
import dotenv from "dotenv";
dotenv.config();

const mistral = createMistral({
  apiKey: process.env.MISTRAL_API_KEY,
});
const model = mistral("open-mistral-7b");

export const answerMyQuestion = async (
  question: string
) => {
  const { text } = await generateText({
    model,
    prompt: question,
  });

  return text;
};

