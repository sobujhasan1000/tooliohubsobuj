import { generateKeywords } from "./keywordEngine";

export function getRandomKeyword() {
  const keywords = generateKeywords();
  return keywords[Math.floor(Math.random() * keywords.length)];
}
