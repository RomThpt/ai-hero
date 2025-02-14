import { createMistral } from "@ai-sdk/mistral";
import { generateText } from "ai";
import dotenv from "dotenv";
dotenv.config();

const mistral = createMistral({
  apiKey: process.env.MISTRAL_API_KEY,
});
const model = mistral("open-mistral-7b");

export const summarizeText = async (
  question: string
) => {
  const { text } = await generateText({
    model,
    prompt: question,
    system:
      `You are a summarizer. ` +
      `Summarize the text you receive. ` +
      `Be concise and to the point.` +
      `Return only the summary. ` +
      `Do not include any additional information. ` +
      `Do not include any personal opinions. `,
  });

  return text;
};
