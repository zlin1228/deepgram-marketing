import Icon from 'atoms/Icons/Icon';
import color from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Iframe from 'quarks/Iframe';
import Text from 'quarks/Text';

import Breadcrumb from 'components/Breadcrumb/Breadcrumb';
import BlogCard from 'components/Cards/BlogCard/BlogCard';

import { getYoutubeId } from 'utils/functions';
import richTextParser from 'utils/richTextParser';

import type { ITemplateBlogRecord, ITemplatePartnerRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

type PartnerHeroProps = BasicProps & ITemplatePartnerRecord;

const PartnerHero: FC<PartnerHeroProps> = ({ category, title, slug, excerpt, caseStudy, youtubeUrl }) => {
  const breadcrumbs = [
    { link: 'https://deepgram.com/partners', label: 'Partners' },
    { link: `https://deepgram.com/partners/${slug}`, label: title },
  ];
  const youtubeID = getYoutubeId(youtubeUrl || '');
  const url = `https://www.youtube.com/embed/${youtubeID}`;

  return (
    <Container as="section" id="partners-detail-hero" textColor="common-white">
      <Flex paddingTop={32} flexDirection="column" gap="64px" lg={{ gap: '72px' }}>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <Flex flexDirection="column" gap="40px" lg={{ flexDirection: 'row', gap: '32px', alignItems: 'center' }}>
          <Flex flexDirection="column" gap="16px" flex="1 0 0">
            {category && (
              <Flex
                paddingY={4}
                paddingX={10}
                gap="8px"
                fontWeight="bold"
                borderRadius="30px"
                backgroundColor="gray-800"
                alignItems="center"
                fontSize="textXs"
                lineHeight="textXs"
                width="fit-content"
              >
                <Icon iconName="code" size={16} color={color.primary[300]} />
                <Text textTransform="uppercase" fontWeight="bold" textColor="common-white">
                  {category}
                </Text>
              </Flex>
            )}
            {title && (
              <Heading as="h1" textStyle="md" sm={{ textStyle: 'lg' }} textColor="common-white" fontWeight="semiBold">
                {title}
              </Heading>
            )}
            {excerpt && (
              <Flex
                flexDirection="column"
                gap="16px"
                fontFamily="bodyFont"
                fontSize="textLg"
                textColor="gray-100"
                css={`
                  h6 {
                    font-size: 18px;
                  }
                  ul {
                    font-size: 16px;
                    color: ${color.gray[300]};
                  }
                  span[font-weight='bold'] {
                    color: ${color.common.white};
                  }
                `}
              >
                {richTextParser(excerpt)}
              </Flex>
            )}
          </Flex>
          {!youtubeID && caseStudy && (
            <Flex flex="1 0 0" maxWidth="592px" marginX="auto">
              <BlogCard {...(caseStudy as unknown as ITemplateBlogRecord)} isPartner />
            </Flex>
          )}
          {youtubeID && (
            <Container
              position="relative"
              width="100%"
              height="400px"
              maxWidth="100%"
              marginX="auto"
              borderRadius="8px"
              border="1px solid"
              borderColor="gray-700"
              overflowX="hidden"
              overflowY="hidden"
              md={{ maxWidth: '592px', height: '450px' }}
            >
              <Iframe
                id="video-iframe"
                src={url}
                title=""
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; accelerometer; clipboard-write;encrypted-media; gyroscope; picture-in-picture;"
                scrolling="no"
                loading="lazy"
                position="absolute"
                left={0}
                top={0}
              />
            </Container>
          )}
        </Flex>
      </Flex>
    </Container>
  );
};

export default PartnerHero;
