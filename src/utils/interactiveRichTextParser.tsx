import {
  isBlockquote,
  isCode,
  isHeading,
  isList,
  isListItem,
  isParagraph,
  isSpan,
} from 'datocms-structured-text-utils';
import { StructuredText, renderMarkRule, renderNodeRule } from 'react-datocms';

import Container from 'quarks/Container';
import Flex from 'quarks/Flex';
import Heading from 'quarks/Heading';
import Image from 'quarks/Image';
import Paragraph from 'quarks/Paragraph';
import Text from 'quarks/Text';

import Button from 'molecules/Button/Button';

import CodeSnippets from 'components/CodeSnippets/CodeSnippets';

import colorizeText from 'utils/colorizeText';

import type { IComponentCallToActionRecord, IFileField, Scalars } from 'lib/types';

export interface RichText {
  blocks: Array<Scalars['String']>;
  links: Array<IComponentCallToActionRecord | Scalars['String']>;
  value: Scalars['JsonField'];
}

const interactiveRichTextParser = (content: RichText, showLineNumbers?: boolean) => {
  const customMarkRules = [
    renderMarkRule('strong', ({ children, key }) => (
      <Text fontWeight="bold" key={key}>
        {children}
      </Text>
    )),
    renderMarkRule('bold', ({ children, key }) => (
      <Text fontWeight="bold" key={key}>
        {children}
      </Text>
    )),
    renderMarkRule('italic', ({ children, key }) => (
      <Text fontStyle="italic" key={key}>
        {children}
      </Text>
    )),
    renderMarkRule('underline', ({ children, key }) => (
      <Text textDecoration="underline" key={key}>
        {children}
      </Text>
    )),
    renderMarkRule('highlight', ({ children, key }) => (
      <Text textColor="primary-400" key={key}>
        {children}
      </Text>
    )),
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
    renderNodeRule(isHeading, ({ node, children, key }) => {
      const HeadingTag = `h${node.level}`;
      type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
      const heading = (node?.children[0] as any).value || '';
      const id = heading
        ?.toString()
        .toLowerCase()
        .replace(/x[\d]+;/g, '')
        .replace(/[^a-z0-9\s]+/g, '')
        .replace(/\s/g, '-');

      return (
        <Heading id={id} as={HeadingTag as HeadingType} key={key}>
          {children}
        </Heading>
      );
    }),
    renderNodeRule(isParagraph, ({ children, key }) => children && <Paragraph key={key}>{children}</Paragraph>),
    renderNodeRule(isList, ({ node, children, key }) =>
      node.style === 'bulleted' ? (
        <Flex as="ul" paddingLeft={0} gap="8px" flexDirection="column" key={key}>
          {children}
        </Flex>
      ) : (
        <Flex as="ol" gap="16px" flexDirection="column" key={key}>
          {children}
        </Flex>
      ),
    ),
    renderNodeRule(isListItem, ({ children, key }) => <Container key={key}>{children}</Container>),
    renderNodeRule(isBlockquote, ({ children, key }) => (
      <Container
        key={key}
        paddingLeft={16}
        borderLeft="3px solid"
        borderColor="primary-300"
        textColor="primary-50"
        marginLeft={32}
        fontWeight="semiBold"
      >
        {children}
      </Container>
    )),
    renderNodeRule(isSpan, ({ node }) => (
      <Text
        fontWeight={node.marks?.includes('bold') || node.marks?.includes('strong') ? 'bold' : undefined}
        fontStyle={node.marks?.includes('italic') ? 'italic' : undefined}
        textDecoration={node.marks?.includes('underline') ? 'underline' : undefined}
        textColor={node.marks?.includes('highlight') ? 'primary-400' : undefined}
      >
        {colorizeText(node.value)}
      </Text>
    )),
    renderNodeRule(isCode, ({ node, key }) => <CodeSnippets node={node} key={key} showLineNumbers={showLineNumbers} />),
  ];

  const richTextElement = (
    <StructuredText
      data={content as any}
      customNodeRules={customNodeRules}
      customMarkRules={customMarkRules}
      renderInlineRecord={({ record }) => {
        switch (record.__typename) {
          case 'ComponentImageRecord':
            return (
              <Image
                src={(record?.imageDesktop as IFileField)?.url || ''}
                alt={(record?.imageDesktop as IFileField)?.alt || ''}
                title={(record?.imageDesktop as IFileField)?.title || ''}
                width={(record?.imageDesktop as IFileField).width}
                height={(record?.imageDesktop as IFileField).height}
              />
            );
          case 'ComponentVideoRecord':
            return <Container position="relative"></Container>;
          default:
            return (
              <Button
                key={record.id}
                href={record?.link as string}
                display="flex"
                width="100%"
                marginBottom={24}
                sm={{ display: 'inline-flex', width: 'auto', marginBottom: 0 }}
                startIcon={record.startIcon as any}
                endIcon={record.endIcon as any}
              >
                {record.label as string}
              </Button>
            );
        }
      }}
    />
  );

  return richTextElement;
};

export default interactiveRichTextParser;
