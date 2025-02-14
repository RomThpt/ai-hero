import { generateText } from "ai";
import { mistral_model } from "../models/mistral_model";
import { readFileSync } from "fs";

const systemPrompt =
  `You will receive an image. ` +
  `Please create an alt text for the image. ` +
  `Be concise. ` +
  `Use adjectives only when necessary. ` +
  `Do not pass 160 characters. ` +
  `Use simple language. `;

export const describeImage = async (
  imagePath: string
) => {
  const imageAsUint8Array = readFileSync(imagePath);

  const { text } = await generateText({
    model: mistral_model,
    system: systemPrompt,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "image",
            image: imageAsUint8Array,
          },
        ],
      },
    ],
  });

  return text;
};
