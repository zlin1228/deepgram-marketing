import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';

import ComponentHeading from 'components/Heading/Heading';

import type {
  IComponentCardDeckRecord,
  ITemplateBlogRecord,
  ITemplateCaseStudyRecord,
  ITemplatePodcastRecord,
} from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface CardDeckProps extends BasicProps, IComponentCardDeckRecord {
  backgroundIsDark?: boolean;
  relatedCaseStudies?: ITemplateCaseStudyRecord[];
}

const BlogCardDeck = dynamic(() => import('components/CardDeck/BlogCardDeck'));
const CarouselCardDeck = dynamic(() => import('components/CardDeck/CarouselCardDeck'));
const IconCardDeck = dynamic(() => import('components/CardDeck/IconCardDeck'));
const PodcastCardDeck = dynamic(() => import('components/CardDeck/PodcastCardDeck'));
const AddOn = dynamic(() => import('components/CardDeck/components/AddOn'));
const BasicCard = dynamic(() => import('components/Cards/BasicCard/BasicCard'));
const BlogCard = dynamic(() => import('components/Cards/BlogCard/BlogCard'));
const IconCard = dynamic(() => import('components/Cards/IconCard/IconCard'));

const CardDeck: FC<CardDeckProps> = props => {
  const { asPath } = useRouter();
  const isSpeechPage = asPath === '/product/speech-understanding';

  const { addOns, card, optionalHeading, variant } = props;
  if (variant === 'blog') {
    return <BlogCardDeck {...props} />;
  }
  if (variant === 'related_case_study') {
    return <BlogCardDeck {...props} />;
  }
  if (variant === 'podcast') {
    return <PodcastCardDeck cards={card as ITemplatePodcastRecord[]} hasHeading />;
  }
  if (variant === 'carousel') {
    return <CarouselCardDeck {...props} />;
  }

  const getFlexLg = (index: number) => {
    switch (variant) {
      case 'grid':
        return ((index === 1 || index === 2) && '0 0 58%') || '1 0 0';
      case 'grid-3':
        return '0 0 calc(33.3% - 21.3px)';
      default:
        return '1 0 0';
    }
  };

  return (
    <Flex
      width="100%"
      flexDirection="column"
      paddingY={variant === 'default' ? 48 : 0}
      sm={{ paddingY: variant === 'default' ? 64 : 0 }}
      lg={{ paddingY: variant === 'default' ? 96 : 0 }}
      gap={card?.length > 0 ? '56px' : '0px'}
    >
      {optionalHeading && <ComponentHeading {...optionalHeading} />}
      <Flex
        flexDirection="column"
        gap="32px"
        sm={{ flexDirection: 'row', flexWrap: 'wrap' }}
        lg={{
          flexWrap: variant === 'default' ? 'nowrap' : 'wrap',
        }}
        css={`
          a {
            flex: 1;
            height: unset;
          }
        `}
      >
        {card?.map((item, index) => {
          switch (item.__typename) {
            case 'ComponentCardRecord':
              return variant === 'icon-card-list' ? (
                <IconCard
                  key={item?.id}
                  {...item}
                  sm={{
                    flex: '0 0 calc(50% - 16px)',
                  }}
                  lg={{
                    flex: getFlexLg(index),
                  }}
                />
              ) : (
                <BasicCard
                  key={item?.id}
                  {...item}
                  variant={isSpeechPage ? 'default' : variant || 'default'}
                  sm={{
                    flex: '1 0 calc(50% - 16px)',
                  }}
                  lg={{
                    flex: getFlexLg(index),
                    maxWidth:
                      variant === 'default'
                        ? `calc(${100 / card.length}% - ${Math.ceil((32 * (card.length - 1)) / card.length)}px)`
                        : '100%',
                  }}
                  isSmall={card.length > 3 && variant !== 'grid'}
                  isFullImage={card.length === 2 && variant === 'default'}
                />
              );
            case 'ComponentCardDeckRecord':
              return (
                <Container
                  key={item?.id}
                  sm={{
                    flex: '0 0 100%',
                  }}
                  lg={{
                    flex: '1 0 0',
                  }}
                >
                  <IconCardDeck {...item} />
                </Container>
              );
            case 'TemplateBlogRecord':
              return <BlogCard {...(item as ITemplateBlogRecord)} isBlogList />;
            case 'TemplateCaseStudyRecord':
              return <BlogCard {...(item as unknown as ITemplateBlogRecord)} />;
            default:
              return <></>;
          }
        })}
      </Flex>
      {addOns?.length > 0 && <AddOn addOns={addOns} />}
    </Flex>
  );
};

export default CardDeck;
