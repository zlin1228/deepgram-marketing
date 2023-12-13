import dynamic from 'next/dynamic';
import Slider from 'react-slick';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';

import ComponentButton from 'components/ComponentButton/ComponentButton';
import ComponentHeading from 'components/Heading/Heading';

import type { IComponentQuoteSliderRecord } from 'lib/types';
import type { FlexProps } from 'quarks/interpolations/flex';
import type { FC } from 'react';

interface QuoteSliderType extends FlexProps, IComponentQuoteSliderRecord {
  backgroundIsDark?: boolean;
}

const QuoteCard = dynamic(() => import('components/Cards/QuoteCard/QuoteCard'));

const QuoteSlider: FC<QuoteSliderType> = ({ optionalHeading, quotes, callToAction, backgroundIsDark }) => {
  const sliderSettings = {
    dots: false,
    arrows: false,
    speed: 3000,
    slidesToShow: 3,
    rows: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    // cssEase: 'linear',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Flex flexDirection="column" gap="24px" sm={{ gap: '40px' }}>
      {optionalHeading && <ComponentHeading {...optionalHeading} backgroundIsDark={backgroundIsDark} />}
      <Container
        width="100%"
        maxWidth="500px"
        marginX="auto"
        lg={{
          maxWidth: '100%',
        }}
        css={{
          '.slick-slider': {
            paddingTop: '16px',
            paddingBottom: '16px',
            '.slick-list': {
              padding: '0!important',
            },
            '.slick-track .slick-slide': {
              opacity: 0.5,
              transition: 'opacity 300ms linear',
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              '&.slick-active': {
                opacity: 1,
              },
              '&>div': {
                flex: '1 0 0',
                height: 'auto',
              },
            },
          },
          '.slick-track': {
            display: 'flex',
            gap: '32px',
            '.slick-slide': {
              height: 'unset',
              float: 'unset',
              '&>div': {
                '&>div': {
                  height: '100%',
                  a: {
                    height: '100%',
                  },
                },
              },
            },
          },
        }}
      >
        <Slider {...sliderSettings}>
          {quotes?.map(quote => (
            <Container key={quote.id}>
              <QuoteCard {...quote} backgroundIsDark={backgroundIsDark} />
            </Container>
          ))}
        </Slider>
      </Container>
      {callToAction && (
        <Flex justifyContent="center" alignItems="center">
          <ComponentButton {...callToAction} marginX="auto" />
        </Flex>
      )}
    </Flex>
  );
};

export default QuoteSlider;
