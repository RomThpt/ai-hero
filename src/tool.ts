import { mistral_model } from "../models/mistral_model";
import { tool } from "ai";
import { z } from "zod";
import { generateText } from "ai";

const logToConsoleTool = tool({
  description: "Log a message to the console.",
  parameters: z.object({
    msg: z
      .string()
      .describe("The message to log to the console."),
  }),
  execute: async ({ msg }) => {
    console.log(msg);
  },
});

export const logToConsole = async (prompt: string) => {
  const { steps } = await generateText({
    model: mistral_model,
    prompt,
    system:
      "Your only role in life is to log" +
      "messages to the console. " +
      "Use the tool provided to log the prompt to the console. ",
    tools: { logToConsole: logToConsoleTool },
  });
  return steps[0]?.toolCalls;
};
