import { streamText } from "ai";
import { mistral_model } from "./models/mistral_model";

export const answerMyQuestion = async (
  question: string
): Promise<string> => {
  const { textStream } = await streamText({
    model: mistral_model,
    prompt: question,
  });

  let fullResponse = "";
  for await (const text of textStream) {
    fullResponse += text;
    process.stdout.write(text);
  }

  return fullResponse;
};
