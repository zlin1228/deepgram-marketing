import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import color from 'atoms/colors/colors';
import { fontFamily } from 'atoms/typography/typography';

import Container from 'quarks/Container';

import type { BasicProps } from 'quarks/interpolations/basic';
import type { FC } from 'react';

interface CodeSnippetProps extends BasicProps {
  node: any;
  showLineNumbers?: boolean;
  useInlineStyle?: boolean;
}

const CodeSnippets: FC<CodeSnippetProps> = ({ node, showLineNumbers, useInlineStyle }) => (
  <Container
    fontSize="textMd"
    maxHeight="300px"
    overflowY="auto"
    borderRadius="8px"
    css={`
      background-color: #1e2c3c;
      code .linenumber {
        color: ${color.gray[400]};
      }
      & * {
        font-family: ${fontFamily.secondaryFont};
      }
      &::-webkit-scrollbar {
        border-radius: 100px;
        height: 6px;
        width: 16px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #2f4053;
        border-radius: 100px;
      }
      &::-webkit-scrollbar-track {
        background-color: #1e2c3c;
        border-radius: 100px;
      }
      & pre {
        &::-webkit-scrollbar {
          border-radius: 100px;
          height: 6px;
          width: 16px;
        }
        &::-webkit-scrollbar-thumb {
          background-color: #2f4053;
          border-radius: 100px;
        }
        &::-webkit-scrollbar-track {
          background-color: #1e2c3c;
          border-radius: 100px;
        }
      }
    `}
  >
    <SyntaxHighlighter
      language={node.language === 'sml' ? 'uri' : node.language}
      useInlineStyles={useInlineStyle}
      style={atomDark}
      wrapLongLines
      showLineNumbers={showLineNumbers}
      customStyle={{
        padding: '20px 24px',
        backgroundColor: '#1E2C3C',
        borderRadius: '0px',
        textAlign: 'left',
        overflowX: 'auto',
        fontFamily: fontFamily.secondaryFont,
        margin: '0',
      }}
      codeTagProps={{
        style: {
          color: color.gray[200],
          fontFamily: fontFamily.secondaryFont,
        },
      }}
      lineNumberStyle={{
        color: color.gray[400],
        opacity: 0.3,
        fontFamily: fontFamily.secondaryFont,
      }}
    >
      {node.code}
    </SyntaxHighlighter>
  </Container>
);

export default CodeSnippets;
