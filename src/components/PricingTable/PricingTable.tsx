import { useState } from 'react';

import Flex from 'quarks/Flex';

import Heading from 'components/PricingTable/components/Heading';
import SliderButtons from 'components/PricingTable/components/SliderButtons';
import Table from 'components/PricingTable/components/Table';

import type { IComponentPricingTableRecord } from 'lib/types';
import type { FC } from 'react';

const PricingTable: FC<IComponentPricingTableRecord> = ({ title, subheading, tables }) => {
  const [activeTable, setActiveTable] = useState(0);

  return (
    <Flex flexDirection="column" gap="42px">
      <Heading title={title as string} subheading={subheading as string} />
      <Flex flexDirection="column" gap="42px">
        {tables.length > 1 && (
          <SliderButtons tables={tables} activeTable={activeTable} setActiveTable={setActiveTable} />
        )}
        {tables?.map((table: any, idx: number) => (
          <Table key={table} component={table as any} activeTable={activeTable} id={idx} />
        ))}
      </Flex>
    </Flex>
  );
};

export default PricingTable;
