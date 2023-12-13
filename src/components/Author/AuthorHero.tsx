import BottomGradient from 'assets/images/bottom_gradient2.svg';
import Ripple from 'assets/images/ripple.svg';

import Icon from 'atoms/Icons/Icon';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Link from 'quarks/Link';
import Text from 'quarks/Text';

import { sectionSizing } from 'molecules/Section/Section';

import richTextParser from 'utils/richTextParser';

import type { IEntityPersonRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

type BlogProps = BasicProps & IEntityPersonRecord;

const AuthorHero: FC<BlogProps> = ({ name, role, bio, github, linkedin, headshot }) => (
  <Container as="section" id="author-detail-hero" backgroundColor="common-black" textColor="common-white">
    <Container {...sectionSizing} paddingTop={48}>
      <Flex
        paddingY={48}
        gap="28px"
        flexDirection="column"
        lg={{
          flexDirection: 'row',
          gap: '48px',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingY: 96,
        }}
      >
        <Flex
          flexDirection="column"
          width="100%"
          textColor="common-white"
          lg={{
            maxWidth: '488px',
          }}
        >
          <Heading
            as="h1"
            textStyle="md"
            backgroundShorthand="linear-gradient(82.38deg, #201CFF -97.96%, #13EFA0 71.09%)"
            textColor="common-transparent"
            backgroundClip="text"
            marginBottom={8}
            sm={{ textStyle: 'lg' }}
            css={`
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              text-fill-color: transparent;
            `}
          >
            {name}
          </Heading>
          <Text textStyle="xl" fontWeight="bold" textColor="gray-400">
            {role}
          </Text>
          {bio && (
            <Container marginTop={24} textColor="gray-100">
              {richTextParser(bio)}
            </Container>
          )}
          {(github || linkedin) && (
            <Flex marginTop={24} gap="14px">
              {linkedin && (
                <Link href={linkedin} textColor="gray-700" hover={{ textColor: 'common-white' }}>
                  <Icon iconName="linkedin" size={24} />
                </Link>
              )}
              {github && (
                <Link href={github} textColor="gray-700" hover={{ textColor: 'common-white' }}>
                  <Icon iconName="github" size={24} />
                </Link>
              )}
            </Flex>
          )}
        </Flex>
        {headshot?.url && (
          <Flex
            backgroundImage={Ripple}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            paddingTop={56}
            position="relative"
            sm={{ paddingTop: 64 }}
            lg={{ flex: '0 0 50%', justifyContent: 'center', paddingTop: 96 }}
            after={{
              content: '',
              position: 'absolute',
              width: '100%',
              height: '50%',
              left: 0,
              bottom: -5,
              backgroundImage: BottomGradient,
              backgroundPosition: 'center bottom',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% auto',
              zIndex: 10,
            }}
          >
            <Image
              borderRadius="8px"
              src={headshot.url}
              alt={headshot?.alt || ''}
              title={headshot?.title || ''}
              width={headshot?.width}
              height={headshot?.height}
              isFullWidth
              isFullHeight
              maxHeight="500px"
              css={`
                max-width: 100%;
                max-height: 500px;
              `}
            />
          </Flex>
        )}
      </Flex>
    </Container>
  </Container>
);

export default AuthorHero;
