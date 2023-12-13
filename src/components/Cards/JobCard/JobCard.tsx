import color from 'atoms/colors/colors';
import { gradient } from 'atoms/colors/gradients';

import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Text from 'quarks/Text';

import ComponentButton from 'components/ComponentButton/ComponentButton';

import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface JobCardProps extends BasicProps {
  title?: string;
  employmentType?: string;
  locationName?: string;
  team?: string;
  jobId?: string;
}

const JobCard: FC<JobCardProps> = ({ title, jobId, employmentType, locationName, team, ...props }) => (
  <Flex
    flexDirection="column"
    borderRadius="16px"
    paddingY={32}
    paddingX={24}
    backgroundColor="gray-900"
    textColor="common-white"
    border="1px solid"
    borderColor="common-transparent"
    boxShadow="xxxl"
    sm={{ paddingAll: 40 }}
    hover={{
      backgroundShorthand: `linear-gradient(${color.gray[900]}, ${color.gray[900]}) padding-box, ${gradient.primary.border} border-box`,
      boxShadow: 'greenButton',
    }}
    {...props}
  >
    <Heading as="h3" textStyle="xs" fontWeight="bold" marginBottom={8} sm={{ textStyle: 'sm' }}>
      {title}
    </Heading>
    <Text textTransform="uppercase" textStyle="md" fontWeight="semiBold" textColor="primary-300" marginBottom={16}>
      {locationName}, {team}, {employmentType}
    </Text>

    <ComponentButton
      label="Learn More"
      color="secondary"
      variant="text"
      href={`https://jobs.ashbyhq.com/Deepgram/${jobId}?employmentType=${employmentType}`}
      endIcon="arrow-right"
    />
  </Flex>
);

export default JobCard;
