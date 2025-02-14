import { evalite } from "evalite";
import { createSentiment } from "../src/happiness";

evalite("Recipe", {
  data: async () => [
    {
      input: "So bad",
      expected: "negative",
    },
  ],
  task: async (input): Promise<string> => {
    return createSentiment(input);
  },
  scorers: [],
});
