import { evalite } from "evalite";
import { summarizeText } from "../src/sys_prompt";

evalite("Summarize Text", {
  data: async () => [
    {
      input: "What is the capital of France?",
    },
  ],
  task: async (input): Promise<string> => {
    return summarizeText(input);
  },
  scorers: [],
});
