import { evalite } from "evalite";
import { answerMyQuestion } from "../main.ts";

evalite("Answer A Question (Streaming)", {
  data: async () => [
    {
      input:
        "Who are you?",
    }
  ],
  task: async (input): Promise<string> => {
    return answerMyQuestion(input);
  },
  scorers: [],
});
