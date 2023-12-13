import { useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';

import Icon from 'atoms/Icons/Icon';
import { media } from 'atoms/breakpoints/breakpoints';

import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import ComponentButton from 'components/ComponentButton/ComponentButton';

import { stringToId } from 'utils/functions';

import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

type GlossaryToCProps = BasicProps & {
  tableOfContents?: {
    content: any;
    nodeType: string;
    level: number;
    label: string;
  }[];
};

const GlossaryToC: FC<GlossaryToCProps> = ({ tableOfContents }) => {
  const isDesktop = useMediaQuery(media.xl);

  const [activeStep, setActiveStep] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  const setTextIndent = (headingNumber: number) => {
    switch (headingNumber) {
      case 2:
        return 8;
      case 3:
        return 16;
      case 4:
        return 32;
      case 5:
        return 40;
      default:
        return 0;
    }
  };

  useEffect(() => {
    if (isDesktop) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  }, [isDesktop]);

  useEffect(() => {
    const handleScroll = () => {
      tableOfContents &&
        tableOfContents.map((item: any, index: number) => {
          const content = item?.label;
          const nextContent = tableOfContents[index + 1]?.label;
          const id = stringToId(content as string);
          const nextId = stringToId(nextContent as string);
          const dom = document.getElementById(id as string) as HTMLElement;

          if (dom) {
            const rect = dom.getBoundingClientRect();
            if (rect.top < 200) {
              if (nextId) {
                const nextEl = document.getElementById(nextId as string) as HTMLElement;
                if (nextEl) {
                  const nextRect = nextEl.getBoundingClientRect();
                  if (nextRect.top > 200) {
                    setActiveStep(index);
                  }
                }
              } else {
                setActiveStep(index);
              }
            }
          }

          return;
        });
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const smoothScroll = (id: string, offset?: number): void => {
    const element = document.getElementById(id);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - (offset || 0);

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Flex
      flexDirection="column"
      gap="10px"
      width="100%"
      textColor="common-white"
      position="sticky"
      top="100px"
      alignSelf="start"
    >
      <Flex
        width="100%"
        alignItems="center"
        gap="10px"
        paddingAll={8}
        border="1px solid #88888C"
        borderRadius="8px"
        xl={{ border: 'none' }}
      >
        {isDesktop && (
          <>
            <Icon size={24} iconName="chevron-right-double" />
            <Text textColor="gray-200" xl={{ textColor: 'common-white' }} fontSize="textMd" fontWeight="semiBold">
              On this page
            </Text>
          </>
        )}
        {!isDesktop && (
          <ComponentButton
            label="On this page"
            onClick={() => setIsExpanded(!isExpanded)}
            endIcon={isExpanded ? 'chevron-down' : 'chevron-right'}
            textColor="gray-200"
            display="flex"
            justifyContent="space-between"
            width="100%"
            css={`
              &:focus {
                outline: none !important;
              }
              button {
                &:focus {
                  outline: none !important;
                }
              }
            `}
          />
        )}
      </Flex>
      {isExpanded && (
        <Flex
          flexDirection="column"
          width="100%"
          maxHeight="400px"
          overflowY="scroll"
          backgroundColor="gray-900"
          paddingLeft={4}
          paddingY={4}
          css={`
            &::-webkit-scrollbar {
              display: none;
            }
            -ms-overflow-style: none;
            scrollbar-width: none;
          `}
          xl={{
            backgroundColor: 'common-transparent',
            maxHeight: 'calc(100vh - 175px)',
          }}
        >
          {tableOfContents?.map((item, index) => {
            const content = item?.label;
            const nodeType = item?.level || 2;
            const id = content
              ?.toString()
              .toLowerCase()
              .replace(/x[\d]+;/g, '')
              .replace(/[^a-z0-9\s]+/g, '')
              .replace(/\s/g, '-');

            return (
              <ComponentButton
                key={content}
                label={content}
                onClick={() => smoothScroll(id as string, 100)}
                textColor={activeStep === index ? 'gray-300' : 'gray-500'}
                width="100%"
                justifyContent="flex-start"
                paddingY={8}
                paddingLeft={setTextIndent(nodeType)}
                fontSize="textSm"
                lineHeight="textSm"
                transition="200ms ease-in-out"
                hover={{ backgroundShorthand: 'rgba(255, 255, 255, 0.1)' }}
                css={`
                  font-weight: ${nodeType === 2 ? '700' : '400'};
                  .button-label {
                    text-wrap: wrap;
                    text-align: left;
                  }
                  &:focus {
                    outline: none !important;
                    background: rgba(255, 255, 255, 0.1);
                  }
                `}
              />
            );
          })}
        </Flex>
      )}
    </Flex>
  );
};

export default GlossaryToC;
