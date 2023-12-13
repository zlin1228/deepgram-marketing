import { render } from 'datocms-structured-text-to-plain-text';
import { isBlockquote, isCode, isHeading, isParagraph } from 'datocms-structured-text-utils';
import { StructuredText, renderMarkRule, renderNodeRule } from 'react-datocms';

import Icon from 'atoms/Icons/Icon';
import { gradient } from 'atoms/colors/gradients';

import Heading from 'quarks/Heading';
import Paragraph from 'quarks/Paragraph';
import Text from 'quarks/Text';

import Button from 'molecules/Button/Button';

import CodeSnippets from 'components/CodeSnippets/CodeSnippets';
import ComponentImage from 'components/ComponentImage/ComponentImage';
import ComponentVideo from 'components/ComponentVideo/ComponentVideo';
import ComponentForm from 'components/Form/Form';
import Quote from 'components/Quote/BlogQuote';
import TableBlock from 'components/TableBlock/TableBlock';

import type {
  IComponentCallToActionRecord,
  IComponentFormRecord,
  IComponentImageRecord,
  IComponentVideoRecord,
  IEntityPersonRecord,
  IHtmlTableRecord,
  Scalars,
} from 'lib/types';

export interface RichText {
  blocks: Array<IHtmlTableRecord | Scalars['String']>;
  links: Array<IComponentCallToActionRecord | Scalars['String']>;
  value: Scalars['JsonField'];
}

const richTextParser = (content: RichText, showLineNumbers?: boolean, useInlineStyle?: boolean) => {
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
    renderMarkRule('highlight', ({ children, key }) => (
      <Text
        key={key}
        textColor="primary-900"
        backgroundShorthand={gradient.primary.red}
        css={`
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        `}
      >
        {children}
      </Text>
    )),
  ];

  const customNodeRules = [
    renderNodeRule(isHeading, ({ node, children, key }) => {
      const HeadingTag = `h${node.level}`;
      type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
      const heading = render(node);
      const id = heading
        ?.toString()
        .toLowerCase()
        .replace(/x[\d]+;/g, '')
        .replace(/[^a-z0-9\s]+/g, '')
        .replace(/\s/g, '-');

      return (
        <Heading id={id} as={HeadingTag as HeadingType} key={key} css="scroll-margin-top: 120px;">
          {children}
        </Heading>
      );
    }),
    renderNodeRule(isParagraph, ({ children, key }) => children && <Paragraph key={key}>{children}</Paragraph>),
    renderNodeRule(isCode, ({ node, key }) => (
      <CodeSnippets node={node} key={key} showLineNumbers={showLineNumbers} useInlineStyle={useInlineStyle} />
    )),
    renderNodeRule(isBlockquote, ({ node, children, key }) => {
      let person = node?.attribution?.split('\n');
      if (person?.length === 1) {
        person = node?.attribution?.split(',');
      }

      return (
        <Quote
          key={key}
          quote={children}
          person={person ? ({ name: person?.[0], role: person?.[1] } as IEntityPersonRecord) : undefined}
        />
      );
    }),
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
              <ComponentImage
                {...(record as unknown as IComponentImageRecord)}
                isShowCaption
                sizes="(min-width: 992px) 810px, 100vw"
              />
            );
          case 'ComponentVideoRecord':
            return <ComponentVideo {...(record as unknown as IComponentVideoRecord)} />;
          case 'ComponentFormRecord':
            return <ComponentForm {...(record as unknown as IComponentFormRecord)} isLeftAligned />;
          case 'MenuItemRecord':
            return <Icon iconName={record?.icon as string} size={18} verticalAlign="middle" marginBottom={4} />;
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
      renderBlock={({ record }) => {
        switch (record.__typename) {
          case 'HtmlTableRecord':
            return <TableBlock key={record?.id} table={record.table as string} />;
          default:
            return null;
        }
      }}
    />
  );

  return richTextElement;
};

export default richTextParser;
