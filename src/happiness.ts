import { z } from "zod";
import { mistral_model } from "../models/mistral_model";
import { generateObject } from "ai";

const model = mistral_model;

export const createSentiment = async (
  prompt: string
) => {
  const { object } = await generateObject({
    model,
    output: "enum",
    enum: ["positive", "negative", "neutral"],
    prompt,
    system:
      "Classify the sentiment of the text. " +
      `Either positive, negative, or neutral.`,
  });
  return object;
};
