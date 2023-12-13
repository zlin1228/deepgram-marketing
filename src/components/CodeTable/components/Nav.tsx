import React from 'react';

import Grid from 'quarks/Grid';

import NavItem from 'components/CodeTable/components/NavItem';

import type { FC } from 'react';

interface NavProps {
  data: any;
  active: number;
  setActive: (idx: number) => void;
}

const Nav: FC<NavProps> = ({ data, active, setActive }) => (
  <Grid
    gridTemplateColumns="1fr 1fr"
    backgroundColor="gray-800"
    borderRadius="12px 12px 0px 0px"
    borderRight="1px solid #2C2C33"
    borderLeft="1px solid #2C2C33"
    borderTop="1px solid #2C2C33"
    overflowX="hidden"
    overflowY="hidden"
    sm={{
      gridTemplateColumns: '1fr 1fr 1fr',
    }}
    md={{
      display: 'flex',
      width: 'unset',
    }}
  >
    {data.map((snippet: any, idx: number) => (
      <NavItem
        key={snippet?.id}
        item={snippet?.code?.value?.document?.children[0]?.language}
        active={active}
        setActive={setActive}
        idx={idx}
      />
    ))}
  </Grid>
);

export default Nav;
