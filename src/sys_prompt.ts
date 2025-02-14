import { generateText } from "ai";
import { mistral_model } from "../models/mistral_model";

export const summarizeText = async (
  question: string
) => {
  const { text } = await generateText({
    model: mistral_model,
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
