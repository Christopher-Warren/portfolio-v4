export const Info = () => {
  return (
    <div className="w-full pl-32">
      <div className="w-full rounded-lg p-5 border dark:border-neutral-700 border-neutral-200 mb-10">
        <div>Stay up to date</div>
        <p className="mb-6">get notified</p>
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Email address"
            className="flex-1 px-2 py-2 dark:bg-neutral-800 text-sm shadow border dark:border-neutral-700 focus:border-green-500 rounded outline-none focus:ring ring-green-500/10 ring-offset-1 ring-offset-neutral-900"
          ></input>
          <button className="px-4 py-2 ml-4 bg-neutral-700 rounded text-sm text-white">
            Join
          </button>
        </div>
      </div>

      <div className="w-full rounded-lg p-5 border dark:border-neutral-700 border-neutral-200">
        <div>Projects</div>
        <div className="flex justify-between items-center text-sm">
          <div className="w-10 h-10 rounded-full bg-neutral-700"></div>
          <div className="flex-1">
            <p className="text-base">Easydash</p>
            <span className="text-neutral-400">Fullstack</span>
          </div>
          <p className="self-end text-neutral-500">react, node</p>
        </div>
      </div>
    </div>
  );
};
