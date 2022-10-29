import Link, { LinkProps } from "next/link";

interface InlineLinkProps extends LinkProps {
  className?: string;
  children: string;
}

const InlineLink = ({ href, className, children }: InlineLinkProps) => {
  return (
    <Link href={href}>
      <a
        className={`${className} font-bold text-green-500 dark:text-green-400`}
      >
        {children}
      </a>
    </Link>
  );
};
export default InlineLink;
