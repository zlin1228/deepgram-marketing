import { useHits } from 'react-instantsearch-hooks';
import { Highlight } from 'react-instantsearch-hooks-web';

import Icon from 'atoms/Icons/Icon';
import color from 'atoms/colors/colors';
import gradient from 'atoms/colors/gradients';

import Flex from 'quarks/Flex';
import Link from 'quarks/Link';
import Paragraph from 'quarks/Paragraph';

import type { FC } from 'react';

interface PropTypes {
  headingText: string;
}

const Hits: FC<PropTypes> = () => {
  const { hits } = useHits();

  const getHitItem = (hit: any) => {
    if (hit?.hierarchy?.lvl6) {
      return ['hierarchy.lvl6', 6];
    }
    if (hit?.hierarchy?.lvl5) {
      return ['hierarchy.lvl5', 5];
    }
    if (hit?.hierarchy?.lvl4) {
      return ['hierarchy.lvl4', 4];
    }
    if (hit?.hierarchy?.lvl3) {
      return ['hierarchy.lvl3', 3];
    }
    if (hit?.hierarchy?.lvl2) {
      return ['hierarchy.lvl2', 2];
    }
    if (hit?.hierarchy?.lvl1) {
      return ['hierarchy.lvl1', 1];
    }

    return ['hierarchy.lvl0', 0];
  };

  const filterUrl = (url: string) => url.replace('blog.deepgram.com', 'deepgram.com/blog');

  return (
    <Flex flexDirection="column" width="100%" maxWidth="670px">
      <Flex flexDirection="column" gap="10px" id="result-container">
        {hits &&
          hits.slice(0, 9).map((hit: any) => {
            const item = getHitItem(hit);

            return (
              <Flex key={`${hit.objectID}`}>
                <Link
                  href={filterUrl(hit?.url)}
                  width="100%"
                  textColor="gray-200"
                  paddingY={12}
                  paddingX={24}
                  borderRadius="4px"
                  backgroundShorthand="#1D1D21"
                  border="1px solid #1D1D21"
                  hover={{
                    textColor: 'common-white',
                    borderColor: 'common-transparent',
                    backgroundShorthand: `linear-gradient(${color.gray[900]}, ${color.gray[900]}) padding-box, ${gradient.primary.border} border-box`,
                  }}
                  css={`
                    .enter-icon {
                      opacity: 0;
                      transition: opacity 200ms;
                    }
                    &:hover .enter-icon {
                      opacity: 1;
                    }
                    &.active {
                      color: white;
                      border-color: transparent;
                      background: linear-gradient(${color.gray[900]}, ${color.gray[900]}) padding-box,
                        ${gradient.primary.border} border-box;
                      .enter-icon {
                        opacity: 1;
                      }
                    }
                    .ais-Highlight-highlighted {
                      color: #13ef93;
                      background: unset;
                    }
                  `}
                >
                  <Flex alignItems="center" gap="10px" justifyContent="space-between" width="100%">
                    <Flex
                      flexDirection="column"
                      width="calc(100% - 50px)"
                      flexGrow={1}
                      paddingLeft={(item[1] as number) > 1 ? 16 : 0}
                    >
                      <Paragraph
                        fontSize="textLg"
                        fontWeight="bold"
                        whiteSpace="nowrap"
                        overflowX="hidden"
                        textOverflow="ellipsis"
                      >
                        <Highlight hit={hit} attribute={item[0]} />
                      </Paragraph>
                      <Paragraph fontSize="textSm" whiteSpace="nowrap" overflowX="hidden" textOverflow="ellipsis">
                        {(item[1] as number) > 1 && <Highlight hit={hit} attribute="hierarchy.lvl1" />}
                      </Paragraph>
                    </Flex>
                    <Flex className="enter-icon" flex="0 0 40">
                      <Icon iconName="arrow-turn-down-left" size={18} color={color.primary[300]} />
                    </Flex>
                  </Flex>
                </Link>
              </Flex>
            );
          })}
      </Flex>
    </Flex>
  );
};

export default Hits;
