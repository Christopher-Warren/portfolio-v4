export const dateToString = (createdAt: Date) =>
  new Date(createdAt).toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
