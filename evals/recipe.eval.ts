import { evalite } from "evalite";
import { createRecipe } from "../src/structured_outputs";

evalite("Recipe", {
  data: async () => [
    {
      input: "Create a recipe for a chocolate cake.",
      expected: "Chocolate Cake",
    },
  ],
  task: async (input): Promise<string> => {
    return createRecipe(input);
  },
  scorers: [],
});
