import React, { useState } from 'react';

import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Text from 'quarks/Text';

import Nav from 'components/CodeTable/components/Nav';
import richTextParser from 'components/CodeTable/utils/richTextParser';

import standardRichTextParser from 'utils/richTextParser';

import type { IComponentCodeTableRecord } from 'lib/types';
import type { FC } from 'react';
import type { RichText } from 'utils/richTextParser';

interface CodeTableProps extends IComponentCodeTableRecord {
  tableHeading?: IComponentCodeTableRecord['heading'];
}

const CodeTable: FC<CodeTableProps> = ({ tableHeading, codeSnippet }) => {
  const [active, setActive] = useState(0);

  return (
    <>
      <Flex
        gap="20px"
        maxWidth="864px"
        marginX="auto"
        textAlign="center"
        flexDirection="column"
        alignItems="center"
        marginBottom={64}
      >
        <Flex gap="20px" maxWidth="800px" marginX="auto" textAlign="center" flexDirection="column" alignItems="center">
          <Heading textColor="common-white" maxWidth="506px" fontSize="displayMd" lineHeight="displayMd">
            {tableHeading?.heading}
          </Heading>
          <Text textColor="common-white" fontSize="textXl" lineHeight="textXl" textAlign="center">
            {standardRichTextParser(tableHeading?.body as RichText)}
          </Text>
        </Flex>
      </Flex>
      <Flex maxWidth="864px" marginX="auto" flexDirection="column">
        <Nav data={codeSnippet} active={active} setActive={setActive} />
        <Flex>{codeSnippet?.map((snippet, idx: number) => richTextParser(snippet.code as RichText, idx, active))}</Flex>
      </Flex>
    </>
  );
};

export default CodeTable;
