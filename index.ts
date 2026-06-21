import dotenv from "dotenv";
import promptSync from "prompt-sync";
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";

dotenv.config();

const model = new ChatOpenAI({
  model: "openrouter/free",

  configuration: {
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
  },

  temperature: 0.7,
});

const prompt = ChatPromptTemplate.fromTemplate(`
You are a helpful Study Assistant.

Topic: {topic}

Question: {question}

Provide:
1. Explanation
2. Example
3. Summary
`);

async function main() {
  const chain = prompt.pipe(model);

  const promptUser = promptSync();

  const topic = promptUser("Enter topic: ");
  const question = promptUser("Enter question: ");

  const response = await chain.invoke({
    topic,
    question,
  });

  console.log("\n===== AI RESPONSE =====\n");
  console.log(response.content);
}

main().catch(console.error);