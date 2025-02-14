import { evalite } from "evalite";
import { describeImage } from "../src/describe_image";

evalite("Describe Image", {
  data: async () => [
    {
      input: "./fireworks.jpg",
    },
  ],
  task: async (input) => {
    return describeImage(input);
  },
  scorers: [],
});
