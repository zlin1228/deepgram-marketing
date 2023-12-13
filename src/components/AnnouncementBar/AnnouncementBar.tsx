import { media } from 'atoms/breakpoints/breakpoints';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Image from 'quarks/Image';

import ComponentButton from 'components/ComponentButton/ComponentButton';

import richTextParser from 'utils/richTextParser';

import type { IComponentAnnouncementBarRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';
import type { RichText } from 'utils/richTextParser';

interface AnnouncementProps
  extends BasicProps,
    Omit<
      IComponentAnnouncementBarRecord,
      '_createdAt' | '_isValid' | '_modelApiKey' | '_seoMetaTags' | '_status' | '_updatedAt'
    > {
  backgroundIsDark?: boolean;
  aligment?: 'left' | 'center';
}

const AnnouncementBar: FC<AnnouncementProps> = ({ heading, callToAction, icon }) => (
  <Flex
    paddingY={4}
    paddingX={16}
    gap="8px"
    backgroundShorthand="rgba(255, 255, 255, 0.05)"
    border="1px solid"
    borderColor="gray-800"
    borderRadius="30px"
    backdropFilter="sm"
    width="fit-content"
    marginX="auto"
    maxWidth="100%"
    sm={{
      alignItems: 'center',
      borderRadius: '100px',
    }}
  >
    {icon && (
      <Image
        src={icon.url}
        alt=""
        width={icon.width}
        height={icon.height}
        css={{
          height: '28px',
          width: '28px',
        }}
      />
    )}
    <Flex width="100%" lineHeight="textSm" sm={{ flexDirection: 'row', alignItems: 'center' }}>
      {heading && (
        <Container fontSize="textSm" textColor="common-white" overflowX="hidden" lineHeight="textSm" textAlign="left">
          {richTextParser(heading as RichText)}
        </Container>
      )}
      {callToAction && (
        <ComponentButton
          {...callToAction}
          fontSize="textSm"
          css={{
            '.button-label': {
              display: 'none',
              [media.sm]: {
                display: 'inline',
              },
            },
            '&&': {
              padding: callToAction?.label ? undefined : 8,
              paddingLeft: callToAction?.label ? undefined : 0,
            },
          }}
        />
      )}
    </Flex>
  </Flex>
);

export default AnnouncementBar;
