import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import Icon from 'atoms/Icons/Icon';
import color from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';

import LeadershipCard from 'components/Cards/LeadershipCard/LeadershipCard';

import type { IEntityPersonRecord } from 'lib/types';
import type { FlexProps } from 'quarks/interpolations/flex';
import type { FC } from 'react';

interface LeaderShipCardDeckType extends FlexProps {
  card: IEntityPersonRecord[];
  backgroundIsDark?: boolean;
}

const navArrowProps = {
  justifyContent: 'center',
  alignItems: 'center',
  width: '48px',
  height: '48px',
  borderRadius: '12px',
  backgroundShorthand: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'xs',
  textColor: 'common-white',
  cursor: 'pointer',
} as const;

const LeaderShipCardDeck: FC<LeaderShipCardDeckType> = ({ card }) => {
  const sliderSettings = {
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    infinite: false,
    nextArrow: (
      <Flex {...navArrowProps}>
        <Icon iconName="chevron-right" size={32} />
      </Flex>
    ),
    prevArrow: (
      <Flex {...navArrowProps}>
        <Icon iconName="chevron-left" size={32} />
      </Flex>
    ),
  };

  return (
    <Flex flexDirection="column" gap="32px" lg={{ gap: '40px' }} width="100%">
      <Container
        css={{
          marginLeft: '-15px',
          marginRight: '-15px',
          '.slick-slider': {
            paddingTop: '32px',
            paddingBottom: '32px',
          },
          '.slick-list': {
            overflow: 'visible',
          },
          '.slick-arrow': {
            position: 'absolute',
            display: 'flex!important',
            padding: '0',
            top: '40%',
            alignItems: 'center',
            zIndex: 100,
            '&.slick-prev': {
              transform: 'translateX(-4px)',
              left: '0',
            },
            '&.slick-next': {
              transform: 'translateX(12px)',
              right: '0',
            },
            '&.slick-disabled': {
              opacity: 0.5,
            },
          },
          '.slick-track': {
            display: 'flex',
            '.slick-slide': {
              height: 'unset',
              float: 'unset',
              '&>div': {
                height: '100%',
                '&>div': {
                  height: '100%',
                  a: {
                    height: '100%',
                  },
                },
              },
            },
          },
          '.slick-dots': {
            display: 'flex!important',
            padding: '0',
            gap: '16px',
            justifyContent: 'flex-end',
            marginTop: '24px',
            marginRight: '20px',
            li: {
              height: '8px',
              width: '8px',
              borderRadius: '4px',
              overflow: 'hidden',
              background: color.gray[700],
              transition: 'width 300ms',
              '&.slick-active': {
                width: '16px',
              },
              button: {
                opacity: '0',
              },
            },
          },
        }}
      >
        <Slider {...sliderSettings}>
          {card.map(person => (
            <Container key={person.id} paddingX={16}>
              <LeadershipCard {...person} />
            </Container>
          ))}
        </Slider>
      </Container>
    </Flex>
  );
};

export default LeaderShipCardDeck;
