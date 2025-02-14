import { evalite } from "evalite";
import { createFakeUsers } from "../src/generate_arrays";

evalite("Fake Users", {
  data: async () => [
    {
      input:
        "Generate 5 fake users.",
    },
  ],
  task: async (input) => {
    return createFakeUsers(input);
  },
  scorers: [],
});
