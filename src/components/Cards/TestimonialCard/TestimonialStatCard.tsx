import React, { type FC } from 'react';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Image from 'quarks/Image';
import Text from 'quarks/Text';

import type { IComponentTestimonialCardRecord } from 'lib/types';
import type { FlexProps } from 'quarks/interpolations/flex';

interface TestimonialCardProps extends FlexProps, IComponentTestimonialCardRecord {}

const TestimonialCard: FC<TestimonialCardProps> = ({ statistics, quote, ...props }) => {
  const hasStatistics = statistics && statistics?.length;
  const person = quote ? quote.person : null;

  return (
    <Flex
      position="relative"
      flexDirection="column"
      gap="2rem"
      borderRadius="16px"
      paddingY={32}
      paddingX={24}
      backgroundShorthand="rgba(255,255,255,.1)"
      textColor="common-white"
      border="1px solid rgba(255,255,255,.1)"
      boxShadow="xl"
      transform="perspective(700px) rotateX(var(--xpos)) rotateY(var(--ypos))"
      justifyContent="space-between"
      sm={{ paddingAll: 24 }}
      {...props}
    >
      {hasStatistics && (
        <Flex gap="1rem" flexWrap="wrap">
          {statistics.map(stat => (
            <Flex
              key={stat.id}
              flex="1 0 45%"
              alignItems="flex-end"
              gap="8px"
              borderRadius="8px"
              paddingY={16}
              paddingX={24}
              backgroundShorthand="rgba(255,255,255,0.05)"
              textColor="common-white"
            >
              <Text fontSize="displayMd" fontWeight="bold" letterSpacing="neg2">
                {stat.statisticValue}
              </Text>
              <Text opacity="0.5" fontSize="textSm" fontWeight="semiBold" lineHeight="sm">
                {stat.statisticLabel}
              </Text>
            </Flex>
          ))}
        </Flex>
      )}
      {quote && (
        <Flex flexDirection="column" gap="1rem">
          <Container>&quot; {quote.quote} &quot;</Container>
          <Flex justifyContent="space-between" alignItems="center" gap="16px">
            <Container>
              <Text>
                {person?.name && (
                  <Text textTransform="capitalize" textColor="common-white">
                    {person.name}
                  </Text>
                )}{' '}
                {person?.role && (
                  <Text textTransform="capitalize" textColor="gray-500">
                    {person.role.toLowerCase()}
                  </Text>
                )}
              </Text>
            </Container>
            {person?.company?.companyLogo?.imageDesktop?.url && (
              <Flex alignItems="center" justifyContent="flex-end">
                <Image
                  display="block"
                  src={person.company.companyLogo?.imageDesktop?.url}
                  width={person.company.companyLogo.imageDesktop.width}
                  height={person.company.companyLogo.imageDesktop.height}
                  alt={person.company.company || ''}
                  css={{
                    maxHeight: 24,
                    objectFit: 'contain',
                  }}
                />
              </Flex>
            )}
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default TestimonialCard;
