import { ReactNode } from "react";
import Link from "next/link";
import { UrlObject } from "url";

export interface NextLinkProps {
  href: string | UrlObject;
  children?: string | ReactNode;
  passHref?: boolean;
  title?: string;
}

const NextLink: React.FC<NextLinkProps> = (props: NextLinkProps) => {
  const { href, children, passHref, title } = props;

  return (
    <Link href={href} passHref={passHref}>
      <a title={title}>{children}</a>
    </Link>
  );
};

NextLink.defaultProps = {
  passHref: true,
};

export default NextLink;
