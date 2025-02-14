import { evalite } from "evalite";
import { sortedEntries } from "../src/embedings";

evalite("Embeddings", {
  data: async () => [
    {
      input: "",
    },
  ],
  task: async (input) => {
    return sortedEntries;
  },
  scorers: [],
});
