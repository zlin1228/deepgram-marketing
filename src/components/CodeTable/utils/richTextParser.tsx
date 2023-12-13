import { isCode } from 'datocms-structured-text-utils';
import { StructuredText, renderMarkRule, renderNodeRule } from 'react-datocms';

import Text from 'quarks/Text';

import CodeSnippets from 'components/CodeTable/components/CodeSnippet';

import type { Scalars } from 'lib/types';

export interface RichText {
  value: Scalars['JsonField'];
}

const richTextParser = (content: RichText, idx: number, active: number) => {
  const customMarkRules = [
    renderMarkRule('code', ({ children, key }) => (
      <Text
        key={key}
        paddingX={4}
        borderRadius="3px"
        textStyle="md"
        fontFamily="secondaryFont"
        css="background-color: #1e2c3c"
      >
        {children}
      </Text>
    )),
  ];

  const customNodeRules = [
    renderNodeRule(isCode, ({ node, key }) => <CodeSnippets node={node} key={key} active={active} idx={idx} />),
  ];

  const richTextElement = (
    <StructuredText data={content as any} customNodeRules={customNodeRules} customMarkRules={customMarkRules} />
  );

  return richTextElement;
};

export default richTextParser;
