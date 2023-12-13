import React from 'react';

import color from 'atoms/colors/colors';
import gradient from 'atoms/colors/gradients';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Grid from 'quarks/Grid';
import Text from 'quarks/Text';

import TestimonialCard from 'components/Cards/TestimonialCard/TestimonialCard';
import ComponentForm from 'components/Form/Form';
import ComponentHeading from 'components/Heading/Heading';
import ComponentTrustBar from 'components/TrustBar/TrustBar';

import type { IComponentHeadingRecord, IComponentTestimonialConversionPanelRecord } from 'lib/types';
import type { GridProps } from 'quarks/interpolations/grid';
import type { FC } from 'react';

interface TestimonialConversionPanel extends GridProps, IComponentTestimonialConversionPanelRecord {
  backgroundIsDark: boolean;
}

const TestimonialConversionPanel: FC<TestimonialConversionPanel> = ({
  id,
  backgroundIsDark,
  conversionHeading,
  conversionQuote,
  conversionTrustBar,
  formHeading,
  formBody,
  conversionForm,
}) => {
  const hasForm = conversionForm && conversionForm?.formId;

  return (
    <Grid
      data-sb-object-id={id}
      gridTemplateColumns="100%"
      gridTemplateRows="repeat(4, auto)"
      textColor="common-white"
      rowGap="32px"
      md={{
        rowGap: '90px',
        columnGap: '32px',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gridTemplateRows: 'repeat(3, auto)',
      }}
      lg={{
        gridTemplateRows: 'repeat(3, auto)',
        rowGap: '96px',
        columnGap: '56px',
      }}
      xl={{
        columnGap: '90px',
      }}
    >
      <Container
        gridRow="1 / 2"
        gridColumn="1 / 2"
        md={{
          gridColumn: '1 / 3',
        }}
      >
        <ComponentHeading {...(conversionHeading as IComponentHeadingRecord)} backgroundIsDark={backgroundIsDark} />
      </Container>
      {conversionQuote && (
        <Container
          gridRow="2 / 3"
          gridColumn="1 / 2"
          md={{
            gridRow: '2 / 3',
            gridColumn: hasForm ? '1 / 2' : '1 / 3',
          }}
        >
          <TestimonialCard {...conversionQuote} hideBorder width="100%" paddingX={0} md={{ paddingX: 0 }} />
        </Container>
      )}
      {conversionTrustBar && (
        <Flex
          gridRow="3 / 4"
          gridColumn="1 / 2"
          alignItems="center"
          md={{
            gridRow: '2 / 3',
            gridColumn: '2 / 3',
          }}
          lg={{
            gridRow: '3 / 4',
            gridColumn: hasForm ? '1 / 2' : '1 / 3',
            alignItems: 'flex-end',
          }}
        >
          <ComponentTrustBar {...conversionTrustBar} isDark={backgroundIsDark} />
        </Flex>
      )}
      {hasForm && (
        <Container
          gridRow="4 / 5"
          gridColumn="1 / 2"
          md={{
            gridRow: '3 / 4',
            gridColumn: '1 / 3',
          }}
          lg={{
            gridRow: '2 / 4',
            gridColumn: '2 / 3',
          }}
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap="32px"
            width="100%"
            borderRadius="16px"
            backgroundShorthand={`linear-gradient(${color.gray[900]}, ${color.gray[900]}) padding-box, ${gradient.primary.conversion} border-box`}
            border="1px solid"
            borderColor="common-transparent"
            paddingAll={40}
          >
            {(formHeading || formBody) && (
              <Flex flexDirection="column" justifyContent="space-between" alignItems="center" gap="16px">
                {formHeading && <Text fontSize="displaySm">{formHeading}</Text>}
                {formBody && <Text textStyle="md">{formBody}</Text>}
              </Flex>
            )}
            <ComponentForm {...conversionForm} backgroundIsDark={backgroundIsDark} />
          </Flex>
        </Container>
      )}
    </Grid>
  );
};

export default TestimonialConversionPanel;
