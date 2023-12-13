import NextLink from 'next/link';
import styled from 'styled-components';

import { basic } from 'quarks/interpolations/basic';

import parseUrl from 'utils/parseUrl';

import type { BasicProps } from 'quarks/interpolations/basic';
import type { AnchorHTMLAttributes, FC, ReactNode } from 'react';

const StyledLink = styled.a`
  cursor: pointer;
  ${basic}
`;

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, BasicProps {
  /**
   *Takes a full url string. Internal links will be parsed as a `<Link>` and external links will be an `<a>` that safely opens in a new tab.
   */
  href: string;
  /**
   * The string or element within the link.
   */
  children: ReactNode;
}

const Link: FC<LinkProps> = ({ children, href, ...props }) => {
  const { isInternal, href: url, rel, target, as } = parseUrl(href);

  return (
    <StyledLink as={isInternal ? NextLink : as || 'a'} href={url} rel={rel} target={target} {...props}>
      {children}
    </StyledLink>
  );
};
export default Link;
