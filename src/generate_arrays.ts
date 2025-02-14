import { z } from "zod";
import { generateObject } from "ai";
import { mistral_model } from "../models/mistral_model";

const schema = z.object({
  name: z.string().describe("The name of the person"),
  age: z
    .number()
    .int()
    .positive()
    .describe("The age of the person"),
  mail: z
    .string()
    .email()
    .describe("The email of the person"),
});

export const createFakeUsers = async (
  prompt: string
) => {
  const { object } = await generateObject({
    model: mistral_model,
    prompt,
    system:
      `You are a generator. ` +
      `Generate a fake user. ` +
      `Include the name, age, and email. ` +
      `Do not include any additional information. ` +
      `Do not include any personal opinions. `,
    output: "array",
    schema,
  });
  return object;
};
