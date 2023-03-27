import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt) {
  const randomIdex = Math.floor(Math.random() * surpriseMePrompts.length);

  const randomPrompt = surpriseMePrompts[randomIdex];

  // make sure you don't get the same prompt twice
  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}
