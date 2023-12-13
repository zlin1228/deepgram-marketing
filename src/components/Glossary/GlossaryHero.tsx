import { render } from 'datocms-structured-text-to-plain-text';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import richTextParser from 'utils/richTextParser';

import type { FC } from 'react';
import type { RichText } from 'utils/richTextParser';

interface GlossaryHeroProps {
  title: string;
  body: RichText;
  excerpt: RichText;
  updatedAt: string;
}

const GlossaryHero: FC<GlossaryHeroProps> = ({ title, body, excerpt, updatedAt }) => {
  const formatDate = (inputString: string): string => {
    const date = new Date(inputString);

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    return formattedDate;
  };

  const calculateReadTime = (text: string, wordsPerMinute = 200): string => {
    const words = text.split(/\s+/g).length;
    const minutes = Math.ceil(words / wordsPerMinute);

    return `${minutes} min read`;
  };

  return (
    <Flex flexDirection="column" paddingX={32}>
      <Flex justifyContent="space-between" paddingTop={40} paddingBottom={32}>
        <Text fontSize="textMd" textColor="gray-500">
          {`Last updated on ${formatDate(updatedAt)}`}
        </Text>
        {body && (
          <Text fontSize="textMd" textColor="gray-500">
            {render(body?.value) && calculateReadTime(render(body?.value) as string)}
          </Text>
        )}
      </Flex>
      <Flex
        flexDirection="column"
        gap="24px"
        css={`
          & p {
            color: #a9a9ad;
            font-size: 16px;
            line-height: 24px;
          }
          & a {
            color: #687ef7;
          }
        `}
      >
        <Text
          fontSize="displaySm"
          letterSpacing="neg2"
          lineHeight="displayMd"
          textColor="common-white"
          fontWeight="semiBold"
          md={{ fontSize: 'displayMd' }}
        >
          {title}
        </Text>
        {excerpt && <Flex>{richTextParser(excerpt?.value, false, true)}</Flex>}
      </Flex>
    </Flex>
  );
};

export default GlossaryHero;
