import { useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';

import { media } from 'atoms/breakpoints/breakpoints';

import Flex from 'quarks/Flex';

import LeadershipCard from 'components/Cards/LeadershipCard/LeadershipCard';
import LeaderShipCardDeck from 'components/SingleInstance/LeaderShipCardDeck';

import type { IComponentSingleInstanceRecord, IEntityPersonRecord } from 'lib/types';
import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface LeadershipListingProps extends BasicProps, IComponentSingleInstanceRecord {
  backgroundIsDark?: boolean;
}

const LeadershipListing: FC<LeadershipListingProps> = ({ leadershipList }) => {
  const isDesktop = useMediaQuery(media.lg);
  const isTablet = useMediaQuery(media.sm);

  const [columns, setColumns] = useState<IEntityPersonRecord[][]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isTablet) {
      setColumns([leadershipList]);
    } else if (!isDesktop) {
      const firstColumn = leadershipList.filter((_, index) => index % 2 === 0);
      const secondColumn = leadershipList.filter((_, index) => index % 2 === 1);
      setColumns([firstColumn, secondColumn]);
    } else {
      const firstColumn = leadershipList.filter((_, index) => index % 3 === 0);
      const secondColumn = leadershipList.filter((_, index) => index % 6 === 2 || index % 6 === 4);
      const thirdColumn = leadershipList.filter((_, index) => index % 6 === 1 || index % 6 === 5);
      setColumns([firstColumn, secondColumn, thirdColumn]);
    }
    setIsLoaded(true);
  }, [isDesktop, isTablet]);

  return (
    <Flex width="100%" gap="32px" opacity={isLoaded ? 1 : 0}>
      {isTablet &&
        columns.length > 0 &&
        columns.map((column, index) => (
          <Flex key={`column-${index + 1}`} flex="1 0 0" flexDirection="column" gap="32px">
            {column.map((item, idx) => (
              <LeadershipCard key={item.id} {...item} isSmall={(index + idx) % 2 === 0} />
            ))}
          </Flex>
        ))}
      {!isTablet && <LeaderShipCardDeck card={leadershipList} />}
    </Flex>
  );
};

export default LeadershipListing;
