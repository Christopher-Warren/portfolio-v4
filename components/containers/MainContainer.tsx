interface Props {
  children: React.ReactNode;
  className?: string;
}
//  className="dark:bg-neutral-900 bg-neutral-50 max-w-7xl  border-x shadow-inner border-neutral-100 dark:border-neutral-800 mx-auto relative"
export const MainContainer = ({ children, className }: Props) => {
  return (
    <div
      className="relative max-w-7xl border-x shadow-inner 
    bg-neutral-50 dark:border-neutral-800 border-neutral-100 dark:bg-neutral-900
      mx-0 sm:mx-6 md:mx-6 lg:mx-auto"
    >
      <div className={`lg:mx-20 mx-4 ${className ? className : "pt-32"}`}>
        {children}
      </div>
    </div>
  );
};
