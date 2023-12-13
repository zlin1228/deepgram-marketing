import color from 'atoms/colors/colors';
import { gradient } from 'atoms/colors/gradients';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Link from 'quarks/Link';
import Text from 'quarks/Text';

import type { ITemplateNewsRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface NewsCardProps extends BasicProps, ITemplateNewsRecord {
  backgroundIsDark?: boolean;
}

const NewsCard: FC<NewsCardProps> = ({ title, company, publishDate, url, ...props }) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const newPublishDate = new Date(publishDate).toLocaleDateString('en-US', options as any);

  return (
    <Link href={url || ''} display="flex" height="100%" width="100%">
      <Flex
        flexDirection="column"
        borderRadius="8px"
        backgroundColor="gray-900"
        textColor="common-white"
        border="1px solid"
        borderColor="gray-700"
        overflowX="hidden"
        overflowY="hidden"
        height="100%"
        width="100%"
        paddingX={16}
        paddingY={24}
        animation="cardFadeIn 300ms"
        lg={{ paddingX: 24 }}
        hover={{
          borderColor: 'common-transparent',
          backgroundShorthand: `linear-gradient(${color.gray[900]}, ${color.gray[900]}) padding-box, ${gradient.primary.red} border-box`,
          boxShadow: 'card',
        }}
        css={`
          animation-fill-mode: forwards;
          @keyframes cardFadeIn {
            0% {
              opacity: 0;
              transform: scale(0.5);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
        {...props}
      >
        {company?.companyDarkLogo?.imageDesktop?.url ? (
          <Container width="100%" height="36px" marginBottom={32}>
            <Image
              src={company.companyDarkLogo.imageDesktop.url}
              alt=""
              width={company.companyDarkLogo.imageDesktop.width}
              height={company.companyDarkLogo.imageDesktop.height}
              maxHeight="36px"
              isFullHeight
              css={{
                height: '100%',
                width: '100%',
                objectFit: 'contain',
                objectPosition: 'left',
              }}
            />
          </Container>
        ) : (
          <>
            {company?.companyLogo?.imageDesktop?.url && (
              <Container width="100%" height="36px" marginBottom={32}>
                <Image
                  src={company.companyLogo.imageDesktop.url}
                  alt=""
                  width={company.companyLogo.imageDesktop.width}
                  height={company.companyLogo.imageDesktop.height}
                  maxHeight="36px"
                  isFullHeight
                  css={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'contain',
                    objectPosition: 'left',
                  }}
                />
              </Container>
            )}
          </>
        )}
        <Flex flexDirection="column" gap="16px" flexGrow={1} justifyContent="space-between">
          <Text textStyle="xl" fontWeight="semiBold">
            {title}
          </Text>
          <Text textStyle="md">{newPublishDate}</Text>
        </Flex>
      </Flex>
    </Link>
  );
};

export default NewsCard;
