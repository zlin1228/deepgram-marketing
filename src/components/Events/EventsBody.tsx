import React, { type FC } from 'react';

import color from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Image from 'quarks/Image';

import Section from 'molecules/Section/Section';

import ComponentSwitchback from 'components/Switchback/Switchback';

import { defaultSectionProps } from 'utils/defaultProps';

import type { ITemplateEventsDetailRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';

interface EventDetailBodyProps extends BasicProps {
  eventGallery?: ITemplateEventsDetailRecord['eventGallery'];
  eventLocation?: ITemplateEventsDetailRecord['eventLocation'];
}

const sectionPadding = {
  paddingTopMobile: 32,
  paddingTopTablet: 40,
  paddingTopDesktop: 64,
  paddingBottomMobile: 32,
  paddingBottomTablet: 40,
  paddingBottomDesktop: 64,
};

const EventsDetailBody: FC<EventDetailBodyProps> = ({ eventGallery, eventLocation }) => {
  const singleImage = eventGallery && eventGallery?.length > 0 && eventGallery[0]?.imageDesktop;

  return (
    <>
      {singleImage && (
        <Section position="relative" backgroundColor="Black" {...sectionPadding} {...(defaultSectionProps as any)}>
          <Container borderRadius="8px" overflowX="hidden" overflowY="hidden">
            <Image
              src={singleImage.url}
              alt={singleImage.alt || ''}
              width={singleImage.width}
              height={singleImage.height}
              isFullHeight
              isFullWidth
              css={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </Container>
        </Section>
      )}
      {eventLocation && (
        <Section
          position="relative"
          backgroundColor="Black"
          {...sectionPadding}
          {...(defaultSectionProps as any)}
          css={`
            [class*='Paragraph'] {
              [font-weight='bold'] {
                color: ${color.gray[400]};
              }
            }
          `}
        >
          <ComponentSwitchback backgroundIsDark {...eventLocation} />
        </Section>
      )}
    </>
  );
};

export default EventsDetailBody;
