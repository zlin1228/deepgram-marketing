import { useEffect, useRef, useState } from 'react';

import { media } from 'atoms/breakpoints/breakpoints';
import color from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';

import AnnouncementBar from 'components/AnnouncementBar/AnnouncementBar';
import BlogCard from 'components/Cards/BlogCard/BlogCard';
import TestimonialStatCard from 'components/Cards/TestimonialCard/TestimonialStatCard';
import ComponentButton from 'components/ComponentButton/ComponentButton';
import ComponentVideo from 'components/ComponentVideo/ComponentVideo';
import ComponentForm from 'components/Form/Form';
import UserReview from 'components/Hero/UserReview';
import LottieImage from 'components/LottieImage/LottieImage';

import { getColor } from 'utils/functions';
import richTextParser from 'utils/richTextParser';

import type { GetColorDefinition } from 'atoms/colors/colors';
import type { IComponentHeroRecord, IComponentTestimonialCardRecord, ITemplateBlogRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { TextStyles } from 'quarks/styleProps/heading';
import type { FC } from 'react';

interface HeroProps
  extends BasicProps,
    Omit<IComponentHeroRecord, '_createdAt' | '_isValid' | '_modelApiKey' | '_seoMetaTags' | '_status' | '_updatedAt'> {
  backgroundIsDark?: boolean;
  heroBody?: IComponentHeroRecord['body'];
}

const ComponentHero: FC<HeroProps> = ({
  id,
  heading,
  headingColor,
  desktopHeadingSize,
  mobileHeadingSize,
  tabletHeadingSize,
  heroBody,
  gradientBackgroundColor,
  bodyColor,
  callToActions,
  animate,
  layout,
  headingIcons,
  announcementBar,
  userReview,
  references,
  form,
  isWideMedia,
}) => {
  const [trigger, setTrigger] = useState(false);
  const [triggered, setTriggered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isStacked = layout === 'stack';
  const isSplit = layout === 'split';
  const centeredHero = Boolean((!form && !isSplit) || isStacked);
  const headingColorIsGradient = headingColor === 'Gray Gradient';

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const rect = (scrollRef.current as HTMLDivElement).getBoundingClientRect();
        setTrigger(rect.top < window.innerHeight / 2);
        rect.top < window.innerHeight * 0.7 && setTriggered(true);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Flex
      data-sb-object-id={id}
      ref={scrollRef}
      flexDirection="column"
      textAlign={centeredHero ? 'center' : 'left'}
      alignItems={centeredHero ? 'center' : 'left'}
      marginX={centeredHero ? 'auto' : undefined}
      gap="32px"
      width="100%"
      md={{
        gap: '24px',
      }}
      textColor="common-white"
      paddingTop={40}
      css={[
        ['green_gradient', 'purple_gradient'].includes(gradientBackgroundColor as string)
          ? `
        &::before {
          content: '';
          width: 100%;
          height: 300px;
          margin-bottom: -300px;
          will-change: transform, opacity;
          pointer-events: none;
          user-select: none;
          mask-image: radial-gradient(ellipse 50% 55% at center,black,transparent);
          mask-image: radial-gradient(ellipse 50% 55% at center,black,transparent);
          --first: conic-gradient(from 90deg at 80% 55%,#000000,${
            gradientBackgroundColor === 'green_gradient' ? '#0f7466' : '#4d21a5'
          });
          --second: conic-gradient(from 270deg at 20% 55%,${
            gradientBackgroundColor === 'green_gradient' ? '#0f7466' : '#4d21a5'
          },#000000);
          background: var(--first),var(--second);
          background-position-x: 1%,99%;
          background-position-y: 0%,0%;
          background-size: 50% 100%,50% 100%;
          background-repeat: no-repeat;
          transform: translateY(-280px) rotate(180deg) scale(${trigger ? 2 : 1}) translateZ(0);
          transform-origin: center center;
          transition: transform 960ms ease 0s, opacity 960ms ease;
        }`
          : '',
        `
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: none;
          }
        }
      `,
      ]}
    >
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems={form?.__typename === 'ComponentVideoRecord' ? undefined : 'center'}
        gap="32px"
        width={!centeredHero ? '100%' : 'fit-content'}
        md={{ flexDirection: !centeredHero ? 'row' : 'column' }}
      >
        <Flex
          flexDirection="column"
          alignItems={!centeredHero ? 'left' : 'center'}
          gap="32px"
          md={{ gap: '24px', maxWidth: form && (form as any)?.formId !== 'search_form' ? '570px' : undefined }}
        >
          <Flex
            flexDirection="column"
            gap="24px"
            zIndex="10"
            maxWidth="100%"
            md={{
              maxWidth: '800px',
              marginX: !form && layout !== 'split' ? 'auto' : undefined,
            }}
          >
            {announcementBar && (
              <Container width="100%" marginBottom={8}>
                <AnnouncementBar {...announcementBar} />
              </Container>
            )}
            {headingIcons && (
              <Flex justifyContent="center" gap="20px" sm={{ gap: '32px' }}>
                {headingIcons.map(icon => (
                  <Flex
                    key={icon.id}
                    alignItems="center"
                    justifyContent="center"
                    backgroundShorthand={`linear-gradient(${color.gray[900]},
                      ${color.gray[900]}) padding-box, linear-gradient(90deg, #FF2EEA -100%, #4B3CFF 92.5%) border-box`}
                    border="1px solid"
                    borderColor="common-transparent"
                    borderRadius="16px"
                    width="105px"
                    height="105px"
                    sm={{
                      width: '176px',
                      height: '176px',
                    }}
                  >
                    <Image
                      src={icon.imageDesktop?.url || ''}
                      alt=""
                      width={icon.imageDesktop?.width}
                      height={icon.imageDesktop?.height}
                      css={{
                        height: 'auto',
                        width: '45px',
                        [media.sm]: {
                          width: '75px',
                        },
                      }}
                    />
                  </Flex>
                ))}
              </Flex>
            )}
            {heading && (
              <Heading
                as="h1"
                textStyle={(mobileHeadingSize as TextStyles) || 'sm'}
                sm={{ textStyle: (tabletHeadingSize as TextStyles) || 'md' }}
                lg={{ textStyle: (desktopHeadingSize as TextStyles) || 'lg' }}
                textColor={(getColor(headingColor as string) as GetColorDefinition) || 'common-white'}
                fontWeight="bold"
                opacity={animate ? 0 : 1}
                animation={animate && triggered && '1000ms ease 0s 1 normal forwards running fadeIn'}
                data-sb-field-path="heading"
                css={`
                  ${headingColorIsGradient &&
                  `
                  background-color: ${color.common.white};
                  background: linear-gradient(91deg, #ceced2 -8.25%, #fff 45.05%, #a9a9ad 99.43%);
                  background-size: 100%;
                    background-repeat: repeat;
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  -moz-background-clip: text;
                  -moz-text-fill-color: transparent;
                  `}
                `}
              >
                {heading}
              </Heading>
            )}
            {heroBody && (
              <Flex
                fontFamily="bodyFont"
                fontSize="textLg"
                md={{ fontSize: 'textXl' }}
                textColor={(getColor(bodyColor as string) as GetColorDefinition) || 'common-white'}
                opacity={animate ? 0 : 1}
                animation={animate && triggered && '1000ms ease 400ms 1 normal forwards running fadeIn'}
                flexDirection="column"
                gap="24px"
                data-sb-field-path="body"
                css={`
                  & [id*='hsform'] {
                    display: flex;
                    justify-content: ${centeredHero ? 'center' : 'left'};
                    margin-left: ${centeredHero ? 'auto' : '0'};
                  }
                `}
              >
                {richTextParser(heroBody as any)}
              </Flex>
            )}
          </Flex>
          {callToActions && callToActions.length > 0 && (
            <Flex
              flexDirection="column"
              gap="16px"
              width="100%"
              opacity={animate ? 0 : 1}
              marginTop={8}
              sm={{
                flexDirection: 'row',
                justifyContent: isSplit ? 'flex-start' : 'center',
              }}
              animation={animate && triggered && '1000ms ease 800ms 1 normal forwards running fadeIn'}
            >
              {callToActions.map(button => (
                <ComponentButton key={button?.id} {...button} data-sb-object-id={button?.id} />
              ))}
            </Flex>
          )}
          {userReview && userReview !== '' && <UserReview review={userReview} marginTop={8} />}
          {references && references.length > 0 && (
            <Flex
              flexDirection="column"
              marginTop={8}
              gap="24px"
              textAlign="left"
              width="100%"
              lg={{ flexDirection: 'row', marginTop: 32, gap: '32px' }}
            >
              <Container flex="1 0 0">
                <BlogCard {...(references[0] as ITemplateBlogRecord)} height="100%" isBlogList />
              </Container>
              <Flex flex="1 0 0" flexDirection="column" gap="24px">
                {references.slice(1).map(item => (
                  <BlogCard key={item.id} {...(item as ITemplateBlogRecord)} isSmall />
                ))}
              </Flex>
            </Flex>
          )}
        </Flex>
        {form?.__typename === 'ComponentFormRecord' && (
          <Container
            backgroundColor={form?.formId !== 'search_form' && 'common-black'}
            borderRadius="12px"
            border={form?.formId !== 'search_form' && '1px solid'}
            borderColor="gray-900"
            paddingAll={form?.formId === 'search_form' ? 0 : 32}
            width="100%"
            maxWidth={isWideMedia ? '680px' : '570px'}
            marginX={form?.formId === 'search_form' && 'auto'}
            css={`
              .hs_submit {
                width: 100%;

                .actions {
                  max-width: 500px;
                  padding-right: 8px;
                }
              }
            `}
          >
            <ComponentForm {...form} />
          </Container>
        )}
        {form?.__typename === 'ComponentTestimonialCardRecord' && (
          <Container>
            <TestimonialStatCard {...(form as IComponentTestimonialCardRecord)} lg={{ maxWidth: '520px' }} />
          </Container>
        )}
        {form?.__typename === 'ComponentImageRecord' && form.imageDesktop?.url && (
          <Flex maxWidth={isWideMedia ? '680px' : '570px'} width="100%" maxHeight="600px">
            {form.imageDesktop.url.slice(-4) !== 'json' ? (
              <Image
                src={form.imageDesktop?.url || ''}
                alt={form.imageDesktop?.alt || ''}
                title={form.imageDesktop?.title || ''}
                width={form.imageDesktop?.width}
                height={form.imageDesktop?.height}
                isFullWidth
                css={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  aspectRatio: `${form.imageDesktop?.width} / ${form.imageDesktop?.height}`,
                  maxHeight: '600px',
                }}
              />
            ) : (
              <LottieImage url={form.imageDesktop.url} />
            )}
          </Flex>
        )}
        {form?.__typename === 'ComponentVideoRecord' && (
          <Flex
            maxWidth={isWideMedia ? '680px' : '570px'}
            width="100%"
            minHeight="400px"
            borderRadius="8px"
            overflowX="hidden"
            overflowY="hidden"
          >
            <ComponentVideo {...form} />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default ComponentHero;

ComponentHero.defaultProps = {
  isWideMedia: false,
};
