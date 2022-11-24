export const readingTime = (content: string) => {
  const wpm = 150;
  const words = content.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
};
