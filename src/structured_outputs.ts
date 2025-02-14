import { z } from "zod";
import { mistral_model } from "../models/mistral_model";
import { streamObject } from "ai";

const model = mistral_model;

const schema = z.object({
  recipe: z.object({
    name: z.string(),
    ingredients: z.array(
      z.object({
        name: z.string(),
        amount: z.string(),
      })
    ),
    steps: z.array(z.string()),
  }),
});
export const createRecipe = async (prompt: string) => {
  const result = await streamObject({
    model,
    schema,
    prompt,
    schemaName: "Recipe",
    system: "You're helping a user create a recipe. ",
  });

  for await (const obj of result.partialObjectStream) {
    console.clear();
    console.dir(obj, { depth: null });
  }

  const finalObject = await result.object;

  return finalObject.recipe;
};
