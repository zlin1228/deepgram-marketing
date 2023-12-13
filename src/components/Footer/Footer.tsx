import ReactMarkdown from 'react-markdown';

import color from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Grid from 'quarks/Grid';
import Heading from 'quarks/Heading';
import Link from 'quarks/Link';
import Text from 'quarks/Text';

import Checkbox from 'molecules/Checkbox/Checkbox';
import { sectionSizing } from 'molecules/Section/Section';

import ComponentForm from 'components/Form/Form';

import type { IComponentFooterRecord } from 'lib/types';
import type { FlexProps } from 'quarks/interpolations/flex';
import type { FC } from 'react';

interface FooterProps extends FlexProps, IComponentFooterRecord {
  isBackgroundDark?: boolean;
}

const ComponentFooter: FC<FooterProps> = ({ heading, subhead, menuItem, bottomFooter, form, disclaimerText }) => (
  <Container
    as="footer"
    paddingTop={24}
    paddingBottom={48}
    sm={{ paddingBottom: 72 }}
    xl={{ paddingBottom: 96 }}
    backgroundColor="common-black"
    position="relative"
    zIndex={10}
  >
    <Container {...sectionSizing} marginX="auto">
      <Flex flexDirection="column" paddingY={10} gap="24px" sm={{ gap: '40px' }}>
        {(heading || subhead || form) && (
          <Flex
            flexDirection="column"
            width="100%"
            gap="24px"
            lg={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
          >
            {(heading || subhead) && (
              <Flex flexDirection="column" gap="8px" textColor="common-white" width="100%">
                {heading && (
                  <Text textStyle="xl" fontWeight="bold" sm={{ textStyle: 'lg' }} lg={{ textStyle: 'xl' }}>
                    {heading}
                  </Text>
                )}
                {subhead && (
                  <Flex
                    alignItems="center"
                    css={`
                      & .MuiFormControlLabel-root {
                        margin-right: 8px;
                      }
                      & a {
                        color: ${color.primary[700]};
                        text-decoration: none;
                      }
                      & .MuiCheckbox-root {
                        margin-top: 0;
                      }
                    `}
                  >
                    <Checkbox />
                    <ReactMarkdown>{subhead}</ReactMarkdown>
                  </Flex>
                )}
              </Flex>
            )}
            {form && <ComponentForm {...form} justifyContent="flex-start" isInFooter />}
          </Flex>
        )}
        {menuItem && menuItem?.length > 0 && (
          <Grid
            flexGrow={1}
            gap="30px"
            gridTemplateColumns="repeat(2,minmax(0,1fr))"
            sm={{
              gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
            }}
            md={{
              gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
            }}
            xl={{
              gridTemplateColumns: 'repeat(5,minmax(0,1fr))',
            }}
          >
            {menuItem.map(menu => (
              <Flex key={menu?.id} flexDirection="column" gap="12px">
                <Heading as="h6" marginBottom={4} fontSize="textLg" fontWeight="semiBold" textColor="common-white">
                  {menu?.heading}
                </Heading>
                {menu?.menuItem?.map(submenuItem => (
                  <Link
                    key={submenuItem?.id}
                    href={submenuItem?.url || ''}
                    fontSize="textSm"
                    lineHeight="textSm"
                    textColor="gray-500"
                    textDecoration="none"
                  >
                    {submenuItem?.heading}
                  </Link>
                ))}
              </Flex>
            ))}
          </Grid>
        )}
        <Flex paddingTop={20} borderTop="1px solid" borderColor="gray-800" alignItems="center">
          {bottomFooter?.map(submenuItem => (
            <>
              <Link
                key={submenuItem?.id}
                href={submenuItem?.url || ''}
                fontSize="textSm"
                lineHeight="textSm"
                textColor="gray-500"
                textDecoration="none"
              >
                {submenuItem?.heading}
              </Link>
              <Text height="18px" borderLeft="1px solid" borderColor="gray-500" marginX={8} />
            </>
          ))}
          {disclaimerText && (
            <Text fontSize="textSm" lineHeight="textSm" textColor="gray-500">
              {disclaimerText}
            </Text>
          )}
        </Flex>
      </Flex>
    </Container>
  </Container>
);

export default ComponentFooter;
