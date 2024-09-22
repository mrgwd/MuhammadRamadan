export function getReadTime(content: string): string {
  const wordsPerMinute = 200;
  const textLength = content.split(" ").length;
  const readTime = Math.ceil(textLength / wordsPerMinute);
  return `${readTime} min`;
}
