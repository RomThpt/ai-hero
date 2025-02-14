import { evalite } from "evalite";
import {logToConsole} from "../src/tool";


evalite("Log To Console", {
  data: async () => [
    {
      input: "Hello World!",
    },
  ],
  task: async (input) => {
    return logToConsole(input);
  },
  scorers: [],
});
