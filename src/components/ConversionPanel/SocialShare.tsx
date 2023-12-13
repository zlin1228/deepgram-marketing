import { useMediaQuery } from '@mui/material';

import Icon from 'atoms/Icons/Icon';
import { media } from 'atoms/breakpoints/breakpoints';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Link from 'quarks/Link';
import Text from 'quarks/Text';

import type { IEntityCompanyRecord } from 'lib/types';
import type { FlexProps } from 'quarks/interpolations/flex';
import type { FC } from 'react';

type SocialShareProps = FlexProps & IEntityCompanyRecord;

const SocialShare: FC<SocialShareProps> = ({
  company,
  companyLogo,
  twitch,
  github,
  twitter,
  linkedin,
  youtube,
  facebook,
  dribbble,
}) => {
  const isTablet = useMediaQuery(media.sm);

  return (
    <Flex
      flexDirection="column"
      width="100%"
      gap="16px"
      borderRadius="16px"
      backgroundColor="gray-900"
      border="1px solid"
      borderColor="gray-700"
      paddingAll={24}
      boxShadow="socialShare"
      sm={{ paddingX: 40 }}
      lg={{ flexDirection: 'row', paddingY: 40, alignItems: 'center' }}
    >
      <Flex
        width="100%"
        flexDirection="column"
        gap="8px"
        sm={{ gap: '20px', flexDirection: 'row', alignItems: 'center' }}
      >
        {companyLogo?.imageDesktop?.url && (
          <Flex height="32px">
            <Image
              src={companyLogo.imageDesktop.url}
              alt={company || ''}
              width={companyLogo.imageDesktop.width}
              height={companyLogo.imageDesktop.height}
              css={{
                height: '100%',
                width: 'auto',
              }}
            />
          </Flex>
        )}
        <Text
          borderTop="1px solid"
          borderColor="common-white"
          height="0px"
          width="40px"
          sm={{
            borderLeft: '1px solid',
            borderTop: 'unset',
            borderColor: 'common-white',
            height: '40px',
            width: '0px',
          }}
        />
        <Text textColor="common-white" textStyle="md">
          Essential Building Blocks for Language AI
        </Text>
      </Flex>

      <Flex gap="12px" justifyContent="space-between" sm={{ gap: '27px', justifyContent: 'unset' }}>
        {twitch && (
          <Link display="flex" href={twitch} textColor="gray-700" hover={{ textColor: 'common-white' }}>
            <Icon iconName="twitch" size={isTablet ? 20 : 18} />
          </Link>
        )}
        {github && (
          <Link display="flex" href={github} textColor="gray-700" hover={{ textColor: 'common-white' }}>
            <Icon iconName="github" size={isTablet ? 20 : 18} />
          </Link>
        )}
        {twitter && (
          <Link display="flex" href={twitter} textColor="gray-700" hover={{ textColor: 'common-white' }}>
            <Icon iconName="twitter" size={isTablet ? 20 : 18} />
          </Link>
        )}
        {linkedin && (
          <Link display="flex" href={linkedin} textColor="gray-700" hover={{ textColor: 'common-white' }}>
            <Icon iconName="linkedin" size={isTablet ? 20 : 18} />
          </Link>
        )}
        {youtube && (
          <Link display="flex" href={youtube} textColor="gray-700" hover={{ textColor: 'common-white' }}>
            <Icon iconName="youtube" size={isTablet ? 20 : 18} />
          </Link>
        )}
        {facebook && (
          <Link display="flex" href={facebook} textColor="gray-700" hover={{ textColor: 'common-white' }}>
            <Icon iconName="facebook" size={isTablet ? 20 : 18} />
          </Link>
        )}
        {dribbble && (
          <Link display="flex" href={dribbble} textColor="gray-700" hover={{ textColor: 'common-white' }}>
            <Icon iconName="dribbble" size={isTablet ? 20 : 18} />
          </Link>
        )}
        <a href="https://deepgram.com/blog.xml">
          <Container display="flex" textColor="gray-700" hover={{ textColor: 'common-white' }}>
            <Icon iconName="rss" size={isTablet ? 20 : 18} />
          </Container>
        </a>
      </Flex>
    </Flex>
  );
};

export default SocialShare;
