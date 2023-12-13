/* eslint-disable react/no-array-index-key */
import DOMPurify from 'isomorphic-dompurify';
import React from 'react';

import Icon from 'atoms/Icons/Icon';
import color from 'atoms/colors/colors';
import { fontSize } from 'atoms/typography/typography';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Grid from 'quarks/Grid';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Text from 'quarks/Text';

import type { IComponentComparisonTableRecord } from 'lib/types';
import type { FlexProps } from 'quarks/interpolations/flex';
import type { FC } from 'react';

interface ComparisonTableProps extends FlexProps, IComponentComparisonTableRecord {}

const ComponentComparisonTable: FC<ComparisonTableProps> = ({ tableTitle, tableComparisons, tableSections }) => {
  const deepgramIndex = tableComparisons?.findIndex(item => item?.company?.company === 'Deepgram');
  const comparisonCount = tableComparisons?.length + 1 || 3;

  const spacerRow = (index: number) =>
    Array(comparisonCount)
      .fill(null)
      .map((_, spacerIndex) => (
        <Container
          key={`spacer-${index}-${spacerIndex}`}
          backgroundShorthand={spacerIndex === deepgramIndex + 1 ? 'rgba(255,255,255, 0.03)' : 'transparent'}
          height={64}
        />
      ));

  const renderCellData = (cellData: string | boolean | null) => {
    switch (typeof cellData) {
      case 'string':
        return (
          <Text
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(cellData),
            }}
          />
        );
      case 'boolean':
        return cellData ? (
          <Icon iconName="check-circle-1" width={32} height={32} />
        ) : (
          <Icon iconName="circle-xmark-2" width={32} height={32} />
        );
      default:
        return null;
    }
  };

  const gridTemplateColumns = `minmax(170px, 1.3fr) repeat(${comparisonCount - 1}, minmax(150px, 1fr))`;

  return (
    <Flex width="100%" overflowX="hidden">
      <Flex position="relative" flexDirection="column" width="100%" overflowX="auto">
        <Grid gridTemplateColumns={gridTemplateColumns} gridTemplateRows="minmax(64px, auto)" rowGap={0}>
          <Flex alignItems="flex-end">
            <Container paddingX={16} paddingTop={16} paddingBottom={24} width="100%">
              <Heading fontSize="textMd">{tableTitle}</Heading>
            </Container>
          </Flex>
          {tableComparisons?.map((comparison, index) => {
            const { companyIcon, company, companyData } = comparison;
            const companyName = company?.company || '';

            return (
              <Grid
                key={comparison?.id}
                gridTemplateColumns="1fr"
                gridTemplateRows="32px 1fr auto"
                gap="1rem"
                paddingAll={16}
                backgroundShorthand={index === deepgramIndex ? 'rgba(255,255,255, 0.03)' : 'transparent'}
              >
                {companyIcon && (
                  <Container
                    css={`
                      > div {
                        height: 32px;
                        width: auto;
                        aspect-ratio: ${companyIcon.width} / ${companyIcon.height};
                      }
                    `}
                  >
                    <Image
                      src={companyIcon?.url}
                      alt={`${companyName} logo`}
                      fill
                      maxHeight="32px"
                      paddingAll={index === deepgramIndex ? 0 : 8}
                    />
                  </Container>
                )}
                {!companyIcon && company?.companyLogo?.imageDesktop?.url && (
                  <Container
                    css={`
                      > div {
                        height: 32px;
                        width: auto;
                        aspect-ratio: ${company?.companyLogo?.imageDesktop.width} /
                          ${company?.companyLogo?.imageDesktop.height};
                      }
                    `}
                  >
                    <Image
                      src={company?.companyLogo?.imageDesktop?.url}
                      alt={`${companyName} logo`}
                      fill
                      maxHeight="32px"
                      paddingAll={0}
                    />
                  </Container>
                )}
                {companyName && (
                  <Text fontSize="textXl" fontWeight="bold">
                    {companyName}
                  </Text>
                )}
                {companyData && (
                  <Container
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(companyData) }}
                    css={`
                      p {
                        color: ${color.gray[500]};
                        font-size: ${fontSize.textSm};

                        b, strong {
                          color: ${color.primary[400]};
                          font-size: ${fontSize.textXl};
                        }
                      }
                      p:not(:last-child){ {
                        margin-bottom: 0.75rem;
                      }
                    `}
                  />
                )}
              </Grid>
            );
          })}
        </Grid>
        {tableSections?.map((section, sectionIndex) => {
          const { id, sectionTitle, sectionTable } = section;
          const tableColumns = sectionTable?.table.columns || [];
          const tableRows = sectionTable?.table.data || [];

          return (
            <Grid key={id} gridTemplateColumns={gridTemplateColumns} gridTemplateRows="minmax(64px, auto)" gap={0}>
              <Container
                position="relative"
                key={id}
                paddingX={32}
                paddingY={16}
                after={{
                  content: '',
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  height: 1,
                  width: '100%',
                  borderBottom: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                {sectionTitle}
              </Container>
              {tableComparisons?.map((comparison, cIndex) => (
                <Container
                  key={`section-${cIndex}-${comparison?.id}`}
                  position="relative"
                  borderRadius="4px 4px 0 0"
                  paddingX={32}
                  paddingY={16}
                  backgroundShorthand={cIndex === deepgramIndex ? 'rgba(255,255,255, 0.03)' : 'transparent'}
                  after={{
                    content: '',
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    height: 1,
                    width: '100%',
                    borderBottom: '1px solid rgba(255,255,255,0.2)',
                  }}
                />
              ))}
              {tableRows?.map((rowData: any) => (
                <React.Fragment key={`row-${id}`}>
                  {tableColumns.map((competitor: string, competitorIndex: number) => (
                    <Container
                      key={`competitor-${competitor}-${competitorIndex}`}
                      position="relative"
                      paddingX={32}
                      paddingY={16}
                      backgroundShorthand={
                        competitorIndex === deepgramIndex + 1 ? 'rgba(255,255,255, 0.03)' : 'transparent'
                      }
                      after={{
                        content: '',
                        position: 'absolute',
                        left: 0,
                        bottom: 0,
                        height: 1,
                        width: '100%',
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                      }}
                    >
                      {renderCellData(
                        rowData[competitor].heading || rowData[competitor].content || rowData[competitor],
                      )}
                    </Container>
                  ))}
                </React.Fragment>
              ))}
              {sectionIndex < tableSections.length - 1 && spacerRow(sectionIndex)}
            </Grid>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default ComponentComparisonTable;
