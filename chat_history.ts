import { type CoreMessage } from "ai";
import { startServer } from "./server/server";

const messageToSend: CoreMessage[] = [
  {
    role: "user",
    content: "What is the capital of France?",
  },
];

await startServer();

const response = await fetch(
  "http://localhost:4317/api/get-completions",
  {
    method: "POST",
    body: JSON.stringify(messageToSend),
    headers: {
      "Content-Type": "application/json",
    },
  }
);

const newMessages =
  (await response.json()) as CoreMessage[];

const allMessages = [...messageToSend, ...newMessages];

console.dir(allMessages, { depth: null });
