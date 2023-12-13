import Icon from 'atoms/Icons/Icon';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import { sectionSizing } from 'molecules/Section/Section';

import ComponentHeading from 'components/Heading/Heading';

import type { IEntityCompanyRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

type BenefitsProps = BasicProps & IEntityCompanyRecord;

const CaseStudyCompanyBenefits: FC<BenefitsProps> = ({ company, benefits }) => (
  <Container
    as="section"
    id="case-study-benefits"
    backgroundColor="common-black"
    textColor="common-white"
    overflowY="hidden"
    overflowX="hidden"
  >
    <Container {...sectionSizing}>
      <Flex paddingY={48} flexDirection="column" gap="40px" sm={{ paddingY: 72 }} lg={{ gap: '56px', paddingY: 96 }}>
        <ComponentHeading
          id="case-study-benefits-heading"
          callToActions={[]}
          heading={`How ${company} Benefits from Deepgram`}
          headingColor="White"
          desktopHeadingSize="md"
          tabletHeadingSize="md"
          mobileHeadingSize="sm"
          gradientBackgroundColor="green_gradient"
        />
        <Flex gap="32px" flexWrap="wrap">
          {benefits?.map(benefit => (
            <Flex
              key={benefit.id}
              width="100%"
              paddingY={24}
              paddingX={16}
              backgroundColor="gray-800"
              borderRadius="8px"
              gap="16px"
              alignItems="center"
              sm={{ flex: '0 0 calc(50% - 16px)' }}
              lg={{ paddingX: 24 }}
            >
              <Flex flex="0 0 32px">
                <Icon
                  iconName="check-circle-4"
                  size={32}
                  css={`
                    & svg path {
                      fill: url(#gradient-red);
                    }
                  `}
                />
                <Icon iconName="gradient-red" />
              </Flex>
              <Text textStyle="lg" fontWeight="medium" textColor="gray-200">
                {benefit.heading}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Container>
  </Container>
);

export default CaseStudyCompanyBenefits;
