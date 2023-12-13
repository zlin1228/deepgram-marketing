import React from 'react';

import Icon from 'atoms/Icons/Icon';
import color from 'atoms/colors/colors';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';

import richTextParser from 'utils/richTextParser';

import type { IComponentCardDeckAddonRecord } from 'lib/types';
import type { FC } from 'react';
import type { RichText } from 'utils/richTextParser';

interface AddonProps {
  addOns: IComponentCardDeckAddonRecord[];
}

const AddOn: FC<AddonProps> = ({ addOns }) => (
  <Flex
    flexDirection="column"
    marginTop={24}
    gap="50px 32px"
    sm={{
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}
    lg={{
      gap: '50px 96px',
    }}
  >
    {addOns.map(addOn => (
      <Flex
        key={addOn?.id}
        width="100%"
        sm={{ flex: '0 0 calc(50% - 16px)' }}
        lg={{ flex: '0 0 calc(33.33% - 64px)' }}
        textColor="common-white"
      >
        <Container
          fontSize="textLg"
          lineHeight="textLg"
          textColor="gray-500"
          css={`
            & span[font-weight='bold'] {
              color: ${color.common.white};
            }
            & p:nth-child(2) {
              display: ${addOn?.icon ? 'inline' : 'block'};
            }
          `}
        >
          {addOn?.icon && <Icon iconName={addOn?.icon} size={14} marginRight={12} display="inline" />}
          {richTextParser(addOn?.body as RichText)}
        </Container>
      </Flex>
    ))}
  </Flex>
);

export default AddOn;
