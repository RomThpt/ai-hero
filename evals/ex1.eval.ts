import { evalite } from "evalite";
import { answerMyQuestion } from "../main.ts";

evalite("Answer A Question", {
  data: async () => [
    {
      input: "What is the meaning of life?",
    },
  ],
  task: async (input) => {
    return answerMyQuestion(input);
  },
  scorers: [],
});
