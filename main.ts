import { mistral } from "@ai-sdk/mistral";
import { generateText } from "ai";

const model = mistral("open-mistral-7b");

export const answerMyQuestion = async (question: string) => {
    const { text } = await generateText({ model, prompt: question });

    return text;
};

const answer = await answerMyQuestion("What is the meaning of life?");

console.log(answer);
