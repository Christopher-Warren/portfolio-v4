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
          <article key={index} className="group relative mb-16 cursor-pointer">
            <div className="absolute  -inset-x-4 -inset-y-6 scale-95 bg-neutral-100 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 dark:bg-neutral-800  lg:-inset-x-6 lg:rounded-lg" />

            <div className="absolute bg-red-500"></div>
            <div className="relative  mb-3 border-l-4 border-green-400 px-4 leading-4 text-neutral-600 dark:text-neutral-500">
              {date}
            </div>

            <h2 className="relative mb-3 text-lg font-semibold dark:text-white">
              {title}
            </h2>
            <p className="relative mb-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              {body}
            </p>
            <div className="relative text-sm text-green-500 dark:text-green-400">
              Read article
            </div>
          </article>
        );
      })}
    </div>
  );

  return (
    <div className="w-full">
      {/* Articles section */}
      {articles.map(({ date, title, body, read }, index) => {
        return (
          <article
            key={index}
            className="group relative cursor-pointer p-4 even:my-16"
          >
            <div className="absolute h-full w-full scale-y-125 bg-neutral-100 opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-neutral-800 lg:scale-x-105 lg:rounded-lg" />
            <div className="relative  mb-3 border-l-4 border-green-400 px-4 leading-4 text-neutral-600 dark:text-neutral-500">
              {date}
            </div>

            <h2 className="relative mb-3 text-lg font-semibold dark:text-white">
              {title}
            </h2>
            <p className="relative mb-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              {body}
            </p>
            <div className="relative text-sm text-green-500 dark:text-green-400">
              Read article
            </div>
          </article>
        );
      })}
    </div>
  );
};
