import { evalite } from "evalite";
import { askQuestions } from "../src/agent";

evalite("Weather", {
  data: async () => [
    {
      input: "What the wheather like in Paris?",
    },
  ],
  task: async (input) => {
    return askQuestions(input);
  },
  scorers: [],
});
