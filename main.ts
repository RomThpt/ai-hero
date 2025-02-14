import { createMistral } from "@ai-sdk/mistral";
import { streamText } from "ai";
import { generateText } from "ai";
import dotenv from "dotenv";
dotenv.config();

const mistral = createMistral({
  apiKey: process.env.MISTRAL_API_KEY,
});
const model = mistral("open-mistral-7b");

export const answerMyQuestion = async (
  question: string
): Promise<string> => {
  const { textStream } = await streamText({
    model,
    prompt: question,
  });

  let fullResponse = "";
  for await (const text of textStream) {
    fullResponse += text;
    process.stdout.write(text);
  }

  return fullResponse;
};
