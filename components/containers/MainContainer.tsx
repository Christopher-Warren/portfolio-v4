interface Props {
  children: React.ReactNode;
}

export const MainContainer = ({ children }: Props) => {
  return (
    <div className="bg-neutral-900 max-w-7xl border-x shadow-inner  border-neutral-800 mx-auto relative">
      <div className="mx-20">{children}</div>
    </div>
  );
};
