import dynamic from 'next/dynamic';
import Marquee from 'react-fast-marquee';

import Flex from 'quarks/Flex';

import ComponentHeading from 'components/Heading/Heading';

import type { IComponentQuoteSliderRecord } from 'lib/types';
import type { FlexProps } from 'quarks/interpolations/flex';
import type { FC } from 'react';

interface QuoteSliderType extends FlexProps, IComponentQuoteSliderRecord {
  backgroundIsDark?: boolean;
}

const QuoteCard = dynamic(() => import('components/Cards/QuoteCard/QuoteCard'));

const QuoteWall: FC<QuoteSliderType> = ({ optionalHeading, quotes, backgroundIsDark, singleRow }) => (
  <Flex flexDirection="column" gap="24px" sm={{ gap: '40px' }} width="100%">
    {optionalHeading && <ComponentHeading {...optionalHeading} backgroundIsDark={backgroundIsDark} />}
    <Flex
      flexDirection="column"
      gap="30px"
      css={`
        .marquee-container {
          overflow-x: unset !important;
        }
      `}
    >
      {quotes?.length > 4 ? (
        <>
          <Marquee gradient={false} speed={40} play={true} delay={-8}>
            {Array(2)
              .fill(null)
              .map((_, idx) => (
                <Flex key={`company-${idx + 1}`} gap="30px" marginRight={32}>
                  {quotes &&
                    quotes
                      .slice(0, singleRow ? quotes.length : Math.round(quotes.length / 2))
                      .map((testimonial, index) => (
                        <QuoteCard
                          {...testimonial}
                          key={testimonial?.id}
                          isActive={
                            singleRow
                              ? index % 3 === 0
                              : index % Math.ceil(quotes.length / 4) === 0 && index !== Math.ceil(quotes.length / 4)
                          }
                          backgroundIsDark={backgroundIsDark}
                        />
                      ))}
                </Flex>
              ))}
          </Marquee>
          {!singleRow && (
            <Marquee gradient={false} speed={40} play={true} delay={-23}>
              {Array(2)
                .fill(null)
                .map((_, idx) => (
                  <Flex key={`company-${idx + 1}`} gap="30px" marginRight={32}>
                    {quotes &&
                      quotes
                        .slice(Math.round(quotes.length / Math.ceil(quotes.length / 4)))
                        .map((testimonial, index) => (
                          <QuoteCard
                            {...testimonial}
                            key={testimonial?.id}
                            isActive={index % 3 === 0}
                            backgroundIsDark={backgroundIsDark}
                          />
                        ))}
                  </Flex>
                ))}
            </Marquee>
          )}
        </>
      ) : (
        <Marquee gradient={false} speed={40} play={true} delay={-8}>
          {Array(2)
            .fill(null)
            .map((_, idx) => (
              <Flex key={`company-${idx + 1}`} gap="30px" marginRight={32}>
                {quotes &&
                  quotes.map((testimonial, index) => (
                    <QuoteCard
                      {...testimonial}
                      key={testimonial?.id}
                      isActive={index % 2 === 0}
                      backgroundIsDark={backgroundIsDark}
                    />
                  ))}
              </Flex>
            ))}
        </Marquee>
      )}
    </Flex>
  </Flex>
);

export default QuoteWall;
