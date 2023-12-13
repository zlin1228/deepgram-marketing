import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

import colors from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';

import richTextParser from 'utils/richTextParser';

import type { AccordionProps as MuiAccordionProps } from '@mui/material/Accordion';
import type { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import type { IComponentAccordionRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';
import type { RichText } from 'utils/richTextParser';

const StyledAccordion = styled(
  (props: MuiAccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />,
  {
    shouldForwardProp: prop => prop !== 'backgroundIsDark',
  },
)<{ backgroundIsDark: boolean }>(() => ({
  backgroundColor: colors.common.transparent,
  borderBottom: `1px solid ${colors.gray[500]}`,
  '&:before': {
    display: 'none',
  },
}));

const StyledAccordionSummary = styled((props: AccordionSummaryProps) => <MuiAccordionSummary {...props} />, {
  shouldForwardProp: prop => prop !== 'backgroundIsDark',
})<{ backgroundIsDark: boolean }>(({ backgroundIsDark }) => ({
  backgroundColor: colors.common.transparent,
  color: backgroundIsDark ? colors.common.white : colors.gray[900],
  fontSize: 18,
  fontWeight: 400,
  padding: '24px 0',
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: backgroundIsDark ? colors.common.white : colors.gray[900],
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
    color: backgroundIsDark ? colors.common.white : colors.gray[900],
  },
  '&:hover': {
    '& .MuiAccordionSummary-expandIconWrapper': {
      color: backgroundIsDark ? colors.common.white : colors.gray[800],
    },
  },
  '.MuiAccordionSummary-content': {
    margin: 0,
  },
}));

const StyledAccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: '0 0 16px',
  fontSize: 16,
}));

interface AccordionProps extends BasicProps, IComponentAccordionRecord {
  backgroundIsDark: boolean;
}

const Accordion: FC<AccordionProps> = ({ backgroundIsDark, heading, accordion }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Flex
      flexDirection="column"
      flexWrap="nowrap"
      textAlign="center"
      alignItems="center"
      marginX="auto"
      gap="40px"
      sm={{ gap: '56px' }}
      textColor={backgroundIsDark ? 'common-white' : 'gray-900'}
    >
      {heading && (
        <Heading as="h2" textStyle="sm" sm={{ textStyle: 'md' }} md={{ textStyle: 'lg' }} fontWeight="bold">
          {heading}
        </Heading>
      )}

      <Flex columnGap="32px" width="100%" textAlign="left" flexDirection="column" lg={{ flexDirection: 'row' }}>
        {Array(2)
          .fill(null)
          .map((_, index) => {
            const blockLength = Math.ceil(accordion.length / 2);
            const start = blockLength * index;
            const end = start + blockLength;

            return (
              <Flex
                key={`column-${index + 1}`}
                flexDirection="column"
                width="100%"
                lg={{ flex: '0 0 calc(50% - 16px)' }}
              >
                {accordion &&
                  accordion.slice(start, end).map(faq => (
                    <StyledAccordion
                      key={faq.id}
                      expanded={expanded === faq.id}
                      onChange={handleChange(faq.id)}
                      backgroundIsDark={backgroundIsDark}
                    >
                      <StyledAccordionSummary
                        expandIcon={
                          expanded === faq.id ? <Remove sx={{ fontSize: 28 }} /> : <Add sx={{ fontSize: 28 }} />
                        }
                        backgroundIsDark={backgroundIsDark}
                      >
                        {faq.heading}
                      </StyledAccordionSummary>
                      <StyledAccordionDetails>
                        <Container
                          maxWidth="650px"
                          fontSize="textMd"
                          textColor={backgroundIsDark ? 'common-white' : 'gray-900'}
                        >
                          {richTextParser(faq.body as RichText)}
                        </Container>
                      </StyledAccordionDetails>
                    </StyledAccordion>
                  ))}
              </Flex>
            );
          })}
      </Flex>
    </Flex>
  );
};

export default Accordion;
