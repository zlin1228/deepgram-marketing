import { breakpoints } from 'atoms/breakpoints/breakpoints';

import Flex from 'quarks/Flex';

import glossaryRichTextParser from 'utils/glossaryRichTextParser';

import type { FC } from 'react';
import type { RichText } from 'utils/richTextParser';

interface GlossaryContentProps {
  body: RichText;
}

const GlossaryContent: FC<GlossaryContentProps> = ({ body }) => (
  <Flex
    flexDirection="column"
    gap="24px"
    flexGrow={1}
    paddingX={32}
    paddingBottom={40}
    css={`
      & h2 {
        font-size: 2.25rem;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.72px;
        color: #fff;
      }
      & h3 {
        font-size: 1.875rem;
        font-weight: 500;
        line-height: 120%;
        color: #fff;
      }
      & h4 {
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        color: #fff;
      }
      ,
      & h5 {
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        color: #fff;
      }
      & p {
        color: #a9a9ad;
        font-size: 1rem;
        line-height: 160%;
      }
      & a {
        color: #687ef7;
      }
      & img {
        border-radius: 8px;
      }
      & .table-block-wrapper {
        width: calc(100vw - 64px);
        @media screen and (min-width: ${breakpoints.md}px) {
          width: 100%;
        }
      }
    `}
    xl={{ paddingY: 40 }}
  >
    {glossaryRichTextParser(body, false, true)}
  </Flex>
);

export default GlossaryContent;
