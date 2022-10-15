export const RecentArticles = () => {
  const articles = [
    {
      date: "September 5, 2022",
      title: "Crafting a design system for a multiplanetary future",
      body: "Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.",
      read: "read",
    },
    {
      date: "September 5, 2022",
      title: "Crafting a design system for a multiplanetary future",
      body: "Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.",
      read: "read",
    },
    {
      date: "September 5, 2022",
      title: "Crafting a design system for a multiplanetary future",
      body: "Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.",
      read: "read",
    },
  ];
  return (
    <div className="w-full">
      {/* Articles section */}
      {articles.map(({ date, title, body, read }, index) => {
        return (
          <article
            key={index}
            className="relative even:my-16 group cursor-pointer"
          >
            <div className="absolute w-full h-full dark:bg-neutral-800 bg-neutral-100 opacity-0 group-hover:opacity-100 scale-x-105 scale-y-125 transition-opacity rounded-lg duration-200"></div>
            <div className="relative  text-neutral-600 dark:text-neutral-500 mb-3 border-l-4 border-green-400 px-4 leading-4">
              {date}
            </div>

            <h2 className="relative dark:text-white text-lg font-semibold mb-3">
              {title}
            </h2>
            <p className="relative text-neutral-600 dark:text-neutral-400 mb-3 text-sm leading-6">
              {body}
            </p>
            <div className="relative text-green-500 dark:text-green-400 text-sm">
              Read article
            </div>
          </article>
        );
      })}
    </div>
  );
};
