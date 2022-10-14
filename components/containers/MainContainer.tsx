interface Props {
  children: React.ReactNode;
}

export const MainContainer = ({ children }: Props) => {
  return (
    <div className="dark:bg-neutral-900 bg-neutral-50 max-w-7xl border-x shadow-inner border-neutral-100 dark:border-neutral-800 mx-auto relative">
      <div className="mx-20">{children}</div>
    </div>
  );
};
