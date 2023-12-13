import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Text from 'quarks/Text';

import JobCard from 'components/Cards/JobCard/JobCard';
import ComponentHeading from 'components/Heading/Heading';
import JobFilter from 'components/SingleInstance/JobFilter';
import JobMobileFilter from 'components/SingleInstance/JobMobileFilter';

import type { IComponentSingleInstanceRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface JobListingProps extends BasicProps, IComponentSingleInstanceRecord {
  backgroundIsDark?: boolean;
}

const JobListing: FC<JobListingProps> = ({ optionalHeading }) => {
  const apiUrl = 'https://jobs.ashbyhq.com/api/non-user-graphql?op=ApiJobBoardWithTeams';

  const [location, setLocation] = useState('All Location');
  const [team, setTeam] = useState('All Teams');
  const [commitment, setCommitment] = useState('All Job Type');
  const [jobs, setJobs] = useState<any[]>([]);
  const [teams, setTeams] = useState<any[]>([]);

  const locationList = ['All Location', 'Remote'];
  const teamList = ['All Teams', 'Customer Success', 'Product', 'Research', 'Sales'];
  const jobTypeList = ['All Job Type', 'Full Time'];

  useEffect(() => {
    const params = {
      operationName: 'ApiJobBoardWithTeams',
      variables: {
        organizationHostedJobsPageName: 'Deepgram',
      },
      query:
        'query ApiJobBoardWithTeams($organizationHostedJobsPageName: String!) {\n  jobBoard: jobBoardWithTeams(\n    organizationHostedJobsPageName: $organizationHostedJobsPageName\n  ) {\n    teams {\n      id\n      name\n      parentTeamId\n      __typename\n    }\n    jobPostings {\n      id\n      title\n      teamId\n      locationId\n      locationName\n      employmentType\n      secondaryLocations {\n        ...JobPostingSecondaryLocationParts\n        __typename\n      }\n      compensationTierSummary\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment JobPostingSecondaryLocationParts on JobPostingSecondaryLocation {\n  locationId\n  locationName\n  __typename\n}',
    };
    axios.post(apiUrl, params).then(res => {
      setJobs(res?.data?.data?.jobBoard?.jobPostings || []);
      setTeams(res?.data?.data?.jobBoard?.teams || []);
    });
  }, []);

  const filteredJobs = useMemo(
    () =>
      jobs.filter(job => {
        const teamName = teams.filter(tm => tm.id === job.teamId)?.[0]?.name;

        return (
          (team === 'All Teams' || teamName === team) &&
          (commitment === 'All Job Type' ||
            job?.employmentType?.toLowerCase() === commitment.replace(/\s/g, '').toLowerCase()) &&
          (location === 'All Location' || job.locationName === location)
        );
      }),
    [jobs, location, commitment, team],
  );

  return (
    <Flex flexDirection="column" gap="64px" sm={{ gap: '88px' }} lg={{ gap: '56px' }}>
      {optionalHeading && (
        <Container lg={{ maxWidth: '800px', marginX: 'auto' }}>
          <ComponentHeading {...optionalHeading} aligment="center" />
        </Container>
      )}
      <Flex width="100%" flexDirection="column" gap="64px" sm={{ gap: '72px' }}>
        <Flex width="100%" gap="40px" justifyContent="center" display="none" sm={{ display: 'flex' }}>
          <Text
            textColor="common-white"
            paddingY={12}
            paddingX={32}
            backgroundColor="gray-800"
            boxShadow="xs"
            borderRadius="4px"
            textStyle="md"
            fontWeight="semiBold"
          >
            All Open Roles
          </Text>
          <JobFilter items={locationList} activeItem={location} setActive={(e: string) => setLocation(e)} />
          <JobFilter items={teamList} activeItem={team} setActive={(e: string) => setTeam(e)} />
          <JobFilter items={jobTypeList} activeItem={commitment} setActive={(e: string) => setCommitment(e)} />
        </Flex>
        <Flex display="flex" sm={{ display: 'none' }}>
          <JobMobileFilter
            locations={locationList}
            teams={teamList}
            commitments={jobTypeList}
            setLocation={setLocation}
            setTeam={setTeam}
            setCommitment={setCommitment}
          />
        </Flex>
        <Flex flexWrap="wrap" gap="32px">
          {filteredJobs.map(job => (
            <JobCard
              key={job.id}
              title={job.title}
              employmentType={job.employmentType}
              locationName={job.locationName}
              jobId={job.id}
              team={teams.filter(tm => tm.id === job.teamId)?.[0]?.name}
              width="100%"
              md={{
                flex: '0 0 calc(50% - 16px)',
              }}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default JobListing;
