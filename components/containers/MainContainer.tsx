interface Props {
  children: React.ReactNode;
  className?: string;
}

export const MainContainer = ({ children, className }: Props) => {
  return (
    <div className="dark:bg-neutral-900 bg-neutral-50 max-w-7xl border-x shadow-inner border-neutral-100 dark:border-neutral-800 mx-auto relative">
      <div className={`mx-20 ${className ? className : "pt-32"}`}>
        {children}
      </div>
    </div>
  );
};
