import { evalite } from "evalite";
import { extractInvoiceData } from "../src/pdf_analyser";

evalite("Pdf Analyser", {
  data: async () => [
    {
      input: "./invoice.pdf",
    },
  ],
  task: async (input) => {
    return extractInvoiceData(input);
  },
  scorers: [],
});
