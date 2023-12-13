import React, { useEffect, useState } from 'react';
import { remark } from 'remark';
import html from 'remark-html';

import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Text from 'quarks/Text';

import { FormatDate } from 'utils/functions';

import type { FC } from 'react';

interface ContentProps {
  pageData: any;
}

const Content: FC<ContentProps> = ({ pageData }) => {
  const [htmlBody, setHtmlBody] = useState<string | null>(null);

  const transformMarkDown = async (md: string) => {
    const processedContent = await remark().use(html).process(md);
    const contentHtml = processedContent.toString();

    return contentHtml;
  };

  useEffect(() => {
    (async () => {
      const result = await transformMarkDown(pageData['Markdown to Full Article']);
      setHtmlBody(result);
    })();
  }, [pageData]);

  return (
    <Flex flexDirection="column" gap="32px" minHeight="100vh">
      <Text fontSize="displayLg" fontWeight="bold" lineHeight="displayLg">
        {pageData['App Name']}
      </Text>
      <Text fontSize="textMd" lineHeight="textMd" textColor="gray-500">
        {pageData['Tagline (formula)']}
      </Text>
      <Flex>
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <Image
          // eslint-disable-next-line no-inline-styles/no-inline-styles
          height={323}
          width={694}
          isFullWidth
          src={pageData['Cover Image (1200x628)'][0].url}
          alt={pageData['App Name']}
        />
      </Flex>
      <Flex
        flexDirection="column"
        gap="16px"
        fontSize="textMd"
        lineHeight="textMd"
        css={`
          p,
          ul,
          ol {
            color: #88888c;
          }
          img {
            max-width: 100%;
            height: auto;
          }
        `}
        dangerouslySetInnerHTML={{ __html: htmlBody as string }}
      />
      <Flex paddingTop={20} borderTop="1px solid rgba(255, 255, 255, 0.15);">
        <Text fontSize="textSm" lineHeight="textSm" textColor="gray-500">
          Last Updated: {FormatDate(pageData['Last Modified (Refresh)'])}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Content;
