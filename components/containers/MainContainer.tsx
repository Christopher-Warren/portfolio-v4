interface Props {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export const MainContainer = ({
  children,
  className,
  containerClassName,
}: Props) => {
  //
  return (
    <div
      className={`relative max-w-7xl border-x border-neutral-200 
    bg-neutral-50 shadow-inner dark:border-neutral-800 dark:bg-neutral-900
     sm:mx-6 lg:mx-16 xl:mx-auto ${containerClassName}`}
    >
      <div
        className={`px-4 lg:px-10 xl:px-20 ${className ? className : "pt-32"}`}
      >
        {children}
      </div>
    </div>
  );
};
