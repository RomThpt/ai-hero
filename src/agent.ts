import { mistral_model } from "../models/mistral_model";
import { generateText, tool } from "ai";
import { get } from "http";
import { text } from "stream/consumers";
import { z } from "zod";

const getWeatherTool = tool({
  description: "Get the weather for a location.",
  parameters: z.object({
    city: z
      .string()
      .describe("The city to get the weather for."),
  }),
  execute: async ({ city }) => {
    return `The weather in ${city} is sunny.`;
  },
});

export const askQuestions = async (prompt: string) => {
  const { text, steps } = await generateText({
    model: mistral_model,
    prompt,
    tools: { getWeather: getWeatherTool },
    maxSteps: 5,
  });
  return text;
};
