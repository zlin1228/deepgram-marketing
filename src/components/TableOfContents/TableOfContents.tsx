import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Icon from 'atoms/Icons/Icon';

import Flex from 'quarks/Flex';
import Link from 'quarks/Link';
import Text from 'quarks/Text';

import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

type TableOfContentsProps = BasicProps & {
  tableOfContents?: {
    content: any;
    nodeType: string;
    level: number;
    label: string;
  }[];
  heading?: string;
};

const TableOfContents: FC<TableOfContentsProps> = ({ tableOfContents, heading }) => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [isExpend, setExpend] = useState(true);

  const setTextIndent = (headingNumber: number) => {
    switch (headingNumber) {
      case 2:
        return 0;
      case 3:
        return 16;
      case 4:
        return 32;
      default:
        return 0;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      tableOfContents &&
        tableOfContents.map((item: any, index: number) => {
          const content = item?.label;
          const nextContent = tableOfContents[index + 1]?.label;
          const id = content
            ?.toString()
            .toLowerCase()
            .replace(/x[\d]+;/g, '')
            .replace(/[^a-z0-9\s]+/g, '')
            .replace(/\s/g, '-');
          const nextId = nextContent
            ?.toString()
            .toLowerCase()
            .replace(/x[\d]+;/g, '')
            .replace(/[^a-z0-9\s]+/g, '')
            .replace(/\s/g, '-');

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

  return (
    <Flex
      flexDirection="column"
      gap="10px"
      width="100%"
      textColor="common-white"
      borderTop="1px solid"
      borderColor="primary-300"
    >
      <Flex
        justifyContent="space-between"
        width="100%"
        cursor="pointer"
        alignItems="center"
        onClick={() => setExpend(!isExpend)}
        paddingAll={8}
      >
        <Text textColor="common-white" textStyle="lg" fontWeight="bold">
          {heading || 'Table of Contents'}
        </Text>
        {isExpend ? <Icon size={20} iconName="chevron-down" /> : <Icon size={20} iconName="chevron-up" />}
      </Flex>
      {isExpend && (
        <Flex
          flexDirection="column"
          gap="10px"
          width="100%"
          maxHeight="calc(100vh - 400px)"
          overflowX="hidden"
          overflowY="auto"
          css={`
            &::-webkit-scrollbar {
              display: none;
            }
            -ms-overflow-style: none;
            scrollbar-width: none;
          `}
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
              <Link
                key={content}
                href={`https://deepgram.com${router.pathname.replace(
                  '[slug]',
                  router?.query?.['slug'] as string,
                )}#${id}`}
                paddingLeft={setTextIndent(nodeType)}
                fontSize="textMd"
                lineHeight="textMd"
                textDecoration="none"
                textColor={activeStep === index ? 'primary-300' : 'gray-200'}
                paddingY={8}
                paddingX={16}
                transition="200ms ease-in-out"
                hover={{ backgroundShorthand: 'rgba(255, 255, 255, 0.1)' }}
              >
                {content}
              </Link>
            );
          })}
        </Flex>
      )}
    </Flex>
  );
};

export default TableOfContents;
