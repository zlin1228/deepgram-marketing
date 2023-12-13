import React, { type FC } from 'react';

import Icon from 'atoms/Icons/Icon';
import { breakpoints, media } from 'atoms/breakpoints/breakpoints';
import color from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Grid from 'quarks/Grid';
import Heading from 'quarks/Heading';
import Link from 'quarks/Link';
import Text from 'quarks/Text';

import EventBadge, { type IconNameProps } from 'molecules/Badge/EventBadge';
import Section from 'molecules/Section/Section';

import ComponentForm from 'components/Form/Form';

import { defaultSectionProps } from 'utils/defaultProps';
import richTextParser from 'utils/richTextParser';

import type { ITemplateEventsDetailRecord } from 'lib/types';
import type { FlexProps } from 'quarks/interpolations/flex';

interface EventDetailHeroProps extends FlexProps {
  eventType: ITemplateEventsDetailRecord['eventDateTime'];
  eventDateTime: ITemplateEventsDetailRecord['eventDateTime'];
  eventFormId: ITemplateEventsDetailRecord['eventFormId'];
  title: ITemplateEventsDetailRecord['title'];
  excerpt: ITemplateEventsDetailRecord['excerpt'];
  description: ITemplateEventsDetailRecord['description'];
}

const heroPadding = {
  paddingTopMobile: 80,
  paddingTopTablet: 96,
  paddingTopDesktop: 128,
  paddingBottomMobile: 32,
  paddingBottomTablet: 32,
  paddingBottomDesktop: 32,
};

const EventsDetailHero: FC<EventDetailHeroProps> = ({
  title,
  excerpt,
  description,
  eventDateTime,
  eventType,
  eventFormId,
  ...props
}) => {
  const parseDate = (dateString: string) => {
    const date = new Date(dateString);
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = {
      hour: 'numeric',
      minute: '2-digit',
      timeZoneName: 'short',
      hour12: true,
    };

    const parsedDate = date.toLocaleString('en-US', dateOptions as Intl.DateTimeFormatOptions);
    const parsedTime = date.toLocaleTimeString('en-US', timeOptions as Intl.DateTimeFormatOptions);

    return {
      date: parsedDate,
      time: parsedTime,
    };
  };

  const timeUntilEvent = (date: string) => {
    const eventDate = new Date(date).getTime();
    const currentTime = new Date().getTime();
    const timeUntilEventMS = eventDate - currentTime;

    const days = Math.round(timeUntilEventMS / (24 * 60 * 60 * 1000));

    return days;
  };

  const daysUntilEvent = timeUntilEvent(eventDateTime);
  const signupAvailable = daysUntilEvent >= 0;

  return (
    <Section backgroundColor="Black" {...heroPadding} {...(defaultSectionProps as any)} {...props}>
      <Grid
        position="unset"
        gridTemplateRows="repeat(3, auto)"
        gridTemplateColumns="1fr"
        md={{
          gridTemplateRows: 'auto 1fr',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 480px)',
          columnGap: '80px',
          rowGap: '32px',
        }}
      >
        <Container
          position="relative"
          paddingBottom={40}
          gridColumn="1 / 2"
          gridRow="1 / 2"
          md={{
            gridColumn: '1 / 3',
          }}
          lg={{
            gridColumn: '1 / 2',
          }}
          after={{
            content: '',
            position: 'absolute',
            top: 0,
            left: '50%',
            width: '100vw',
            height: '100%',
            transform: 'translateX(-50%)',
            backgroundShorthand: `linear-gradient(to bottom, ${color.common.black}, #13EFA02a)`,
            zIndex: -1,
          }}
          css={`
            ${media.lg} {
              &:after {
                left: unset;
                right: 0;
                transform: translateX(calc(50vw - 40px));
              }
            }
          `}
        >
          <Container marginBottom={32} width="fit-content" md={{ marginBottom: 40 }}>
            <Link
              href="https://deepgram.com/learn?content_type=events"
              textColor="common-white"
              css={`
                svg {
                  transition: transform 0.1s ease-in-out;
                }
                &:hover,
                &:focus-visible {
                  svg {
                    transform: translateX(-6px);
                  }
                }
              `}
            >
              <Flex alignItems="center" gap="8px">
                <Icon iconName="arrow-left" size={32} /> <Text fontSize="textMd">Browse Events</Text>
              </Flex>
            </Link>
          </Container>

          <Flex flexDirection="column" textAlign="left" gap="16px" marginBottom={8}>
            <Flex alignItems="center" gap="1rem">
              {eventType && <EventBadge variant={eventType as IconNameProps} showIcon />}
              {eventType !== 'on-demand' && eventDateTime && (
                <Text fontSize="textXs" textColor="gray-400" md={{ fontSize: 'textSm' }}>
                  {parseDate(eventDateTime).date} | {parseDate(eventDateTime).time}
                </Text>
              )}
            </Flex>
            {title && (
              <Heading
                as="h1"
                textStyle="sm"
                sm={{ textStyle: 'md' }}
                lg={{ textStyle: 'lg' }}
                textColor="common-white"
                fontWeight="semiBold"
                textTransform="capitalize"
                data-sb-field-path="title"
              >
                {title}
              </Heading>
            )}
            {excerpt && (
              <Text
                as="p"
                textColor="gray-400"
                fontSize="textMd"
                lg={{ fontSize: 'textXl' }}
                data-sb-field-path="excerpt"
              >
                {excerpt}
              </Text>
            )}
          </Flex>
        </Container>
        <Container gridColumn="1 / 2" gridRow="2 / 3" paddingY={32}>
          {description && (
            <Container
              position="sticky"
              top="48px"
              textColor="gray-400"
              fontFamily="bodyFont"
              fontSize="textMd"
              lineHeight="textMd"
              css={`
                > p:not(:last-child) {
                  margin-bottom: 1rem;
                }
                [font-weight='bold'] {
                  color: ${color.common.white};
                }
              `}
            >
              {richTextParser(description)}
            </Container>
          )}
        </Container>
        <Container
          gridColumn="1 / 2"
          gridRow="3 / 4"
          paddingY={32}
          md={{ gridColumn: '2 / 3', gridRow: '2 / 3' }}
          lg={{
            marginTop: 56,
            gridRow: '1 / 3',
          }}
        >
          <Flex
            flexDirection="column"
            justifyContent={daysUntilEvent <= 0 ? 'center' : 'flex-start'}
            borderRadius="8px"
            border="1px solid"
            borderColor="gray-800"
            backgroundColor="common-black"
            paddingAll={32}
            css={`
              #hsform-${eventFormId} {
                max-width: 100%;

                & fieldset,
                & .hs-form-field {
                  max-width: 100% !important;
                }

                @media (max-width: ${breakpoints.lg}px) {
                  fieldset.form-columns-2 {
                    flex-direction: column;

                    .hs-form-field {
                      width: 100% !important;
                    }
                  }
                }
              }
            `}
          >
            {signupAvailable && (
              <>
                <EventBadge
                  label="Sign up now!"
                  countdown={daysUntilEvent > 30 ? undefined : daysUntilEvent}
                  backgroundColor={daysUntilEvent > 30 ? 'success-500' : undefined}
                  marginBottom={16}
                />
                <ComponentForm formId={eventFormId} />
              </>
            )}
            {!signupAvailable && (
              <Flex flexDirection="column" alignItems="center" justifyContent="center" gap="16px" textAlign="center">
                <EventBadge label="closed" showIcon={false} marginBottom={16} />
                <Text fontSize="displaySm" fontWeight="bold">
                  Registration is now closed
                </Text>
                <Text fontSize="textMd" textColor="gray-400">
                  Want to hear about new events? Get notified
                </Text>
              </Flex>
            )}
          </Flex>
        </Container>
      </Grid>
    </Section>
  );
};

export default EventsDetailHero;
