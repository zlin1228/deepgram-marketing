import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { fontFamily } from 'atoms/typography/typography';

import Container from 'quarks/Container';

import type { FC } from 'react';

interface CodeSnippetProps {
  node: any;
  idx: number;
  active: number;
}

const CodeSnippets: FC<CodeSnippetProps> = ({ node, idx, active }) => {
  // eslint-disable-next-line no-nested-ternary
  const language = node.language === 'sml' ? 'uri' : node.language === 'aspnet' ? 'clike' : node.language;

  return (
    <Container
      fontSize="textMd"
      height="100%"
      width="100%"
      marginX="auto"
      marginY={0}
      overflowY="auto"
      backgroundColor="gray-300"
      borderRadius="0px 0px 12px 12px"
      borderRight="1px solid #2C2C33"
      borderLeft="1px solid #2C2C33"
      borderBottom="1px solid #2C2C33"
      display={idx === active ? 'block' : 'none'}
      css={`
        background-color: #101014;
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
        & code {
          color: #fff;
          background-color: #101014;
          & span {
            color: #fff;
            background-color: #101014;
          }
        }
        & pre {
          border-radius: 0px;
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
        language={language}
        useInlineStyles
        style={oneDark}
        showLineNumbers
        customStyle={{
          padding: '24px',
          backgroundColor: '#101014',
          borderRadius: '0px 0px 12px 12px',
          textAlign: 'left',
          overflowX: 'auto',
          margin: '0',
          fontFamily: fontFamily.secondaryFont,
        }}
        codeTagProps={{
          style: {
            fontFamily: fontFamily.secondaryFont,
          },
        }}
        lineNumberStyle={{
          color: '#fff',
          backgroundColor: '#101014',
          fontFamily: fontFamily.secondaryFont,
        }}
      >
        {node.code}
      </SyntaxHighlighter>
    </Container>
  );
};

export default CodeSnippets;
