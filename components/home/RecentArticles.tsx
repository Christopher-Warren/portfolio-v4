export const RecentArticles = () => {
  const articles = [
    {
      date: "October 10, 2022",
      title: "Building an app with Socket.io And React",
      heading:
        "Stay ahead of the competition by using React with a bidirectional and low-latency communication solution Socket.io, enabling you to power up your mobile notifications to the max.",
      read: "read",
    },
    {
      date: "October 15, 2022",
      title: "Lazy Loading in images with React JS",
      heading:
        "Choose a lazy solution to render images. Because a lazy solution will provide an easy way to do it.",
      read: "read",
    },
    {
      date: "October 22, 2022",
      title: "CSS habits you should avoid",
      heading:
        "CSS flex box is awesome. But you are surely going to run into problems when you set flex item's width to a percentage based value. This is where min-width and max-width properties have their time to shine.",
      read: "read",
    },
  ];
  return (
    <div className="w-full">
      {/* Articles section */}
      {articles.map(({ date, title, heading, read }, index) => {
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
              {heading}
            </p>
            <div
              aria-hidden
              className="relative text-sm text-green-500 dark:text-green-400"
            >
              Read article
            </div>
          </article>
        );
      })}
    </div>
  );
};
