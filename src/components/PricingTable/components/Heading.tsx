import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import type { FC } from 'react';

interface HeadingProps {
  title: string;
  subheading: string;
}

const Heading: FC<HeadingProps> = ({ title, subheading }) => (
  <Flex flexDirection="column" justifyContent="center" alignItems="center" gap="24px" maxWidth="834px" marginX="auto">
    <Text
      fontSize="displaySm"
      lineHeight="displaySm"
      fontWeight="bold"
      textColor="common-white"
      textAlign="center"
      md={{ fontSize: 'displayLg', lineHeight: 'displayLg' }}
    >
      {title}
    </Text>
    <Text fontSize="textLg" lineHeight="textLg" fontWeight="regular" textColor="gray-300" textAlign="center">
      <Flex
        flexDirection="column"
        dangerouslySetInnerHTML={{ __html: subheading }}
        css={`
          strong {
            color: #fff;
          }
        `}
      />
    </Text>
  </Flex>
);

export default Heading;
