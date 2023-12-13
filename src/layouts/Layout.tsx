import SEO from 'layouts/Seo';

import Logo from 'assets/svg/Logo_White.svg';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Link from 'quarks/Link';
import Text from 'quarks/Text';

import { sectionSizing } from 'molecules/Section/Section';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

import type { IComponentFooterRecord, IComponentHeaderRecord, ISeoField } from 'lib/types';
import type { FC, ReactNode } from 'react';

interface LayoutProps {
  seoMetadata?: ISeoField;
  children: ReactNode;
  slug: string;
  pageId?: string;
  footer: IComponentFooterRecord;
  header: IComponentHeaderRecord;
  noHeader?: boolean;
  noFooter?: boolean;
  includePreFooterCardDeck?: boolean;
  breadcrumbs?: string[];
  isArticle?: boolean;
  isPerson?: boolean;
}

const Layout: FC<LayoutProps> = ({
  footer,
  slug,
  pageId,
  seoMetadata,
  header,
  noHeader,
  noFooter,
  children,
  breadcrumbs,
  isArticle,
  isPerson,
}) => (
  <>
    {seoMetadata && (
      <SEO slug={slug} {...seoMetadata} breadcrumbs={breadcrumbs} isArticle={isArticle} isPerson={isPerson} />
    )}
    <div data-sb-object-id={pageId}>
      {noHeader ? (
        <Flex
          as="header"
          width="100%"
          paddingY={48}
          alignItems="center"
          justifyContent="center"
          position="absolute"
          zIndex={100}
        >
          <Link href="https://deepgram.com">
            <Image src={Logo} alt="Deepgram" width={130} height={29} />
          </Link>
        </Flex>
      ) : (
        <Header {...header} />
      )}
      <main id="main-content">{children}</main>
      {noFooter ? (
        <Container as="footer" backgroundColor="common-black">
          <Container {...sectionSizing}>
            <Flex
              width="100%"
              maxWidth="1280px"
              marginX="auto"
              paddingY={48}
              alignItems="center"
              justifyContent="space-between"
            >
              <Link href="https://deepgram.com">
                <Image src={Logo} alt="Deepgram" width={130} height={29} />
              </Link>
              <Flex gap="0.5rem" alignItems="center">
                <Link href="https://deepgram.com/terms">
                  <Text textStyle="md" textColor="gray-500">
                    Terms
                  </Text>
                </Link>
                <Text height="18px" borderLeft="1px solid" borderColor="gray-500" marginX={8} />
                <Link href="https://deepgram.com/privacy">
                  <Text textStyle="md" textColor="gray-500">
                    Privacy
                  </Text>
                </Link>
                <Text height="18px" borderLeft="1px solid" borderColor="gray-500" marginX={8} />
                <Text textStyle="md" textColor="gray-500">
                  All rights reserved {new Date().getFullYear()} Deepgram Inc.
                </Text>
              </Flex>
            </Flex>
          </Container>
        </Container>
      ) : (
        <Footer {...footer} />
      )}
    </div>
  </>
);

export default Layout;
