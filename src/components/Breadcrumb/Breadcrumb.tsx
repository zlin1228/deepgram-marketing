import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import color from 'atoms/colors/colors';

import Flex from 'quarks/Flex';
import Link from 'quarks/Link';
import Text from 'quarks/Text';

import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface BreadcrumbProps extends BasicProps {
  breadcrumbs: any;
  noHome?: boolean;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ breadcrumbs, noHome = false, ...props }) => (
  <Flex flexDirection="row" flexWrap="nowrap" alignItems="center" gap="6px" {...props}>
    {!noHome && (
      <Link href="https://deepgram.com" textColor="primary-300" fontSize="textMd" textDecoration="none">
        Home
      </Link>
    )}
    {breadcrumbs &&
      breadcrumbs.map((item: any, idx: number) => (
        <Link
          href={item?.link || ''}
          fontSize="textMd"
          textColor={breadcrumbs.length > idx + 1 ? 'primary-300' : 'gray-200'}
          textDecoration="none"
          key={item?.label}
          lineClamp={1}
          overflowX={idx === breadcrumbs.length - 1 ? 'hidden' : 'inherit'}
          overflowY={idx === breadcrumbs.length - 1 ? 'hidden' : 'inherit'}
          display={idx === breadcrumbs.length - 1 ? '-webkit-box' : 'flex'}
          sm={{ display: 'flex' }}
          css={`
            align-items: center;
          `}
        >
          {!(noHome && idx === 0) && (
            <ChevronRightIcon sx={{ fontSize: 18, verticalAlign: 'middle', stroke: color.gray[300] }} />
          )}
          <Text verticalAlign="middle" marginLeft={8} textTransform="capitalize">
            {item?.label}
          </Text>
        </Link>
      ))}
  </Flex>
);

export default Breadcrumb;
