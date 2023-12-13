import Document, { Head, Html, Main, NextScript } from 'next/document';
import { Fragment } from 'react';
import { ServerStyleSheet } from 'styled-components';

import type { DocumentContext, DocumentInitialProps } from 'next/document';

const MyDocument = () => (
  <Html lang="en">
    <Head>
      <link rel="icon" type="image/ico" href="/favicon.ico" />
      <link rel="alternate" type="application/rss+xml" title="Deepgram Blog" href="/blog.xml" />
      <link rel="alternate" type="application/rss+xml" title="Deepgram Product Changelog" href="/changelog.xml" />{' '}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PFZZ2KW');`,
        }}
      />
    </Head>
    <body>
      <Main />
      <NextScript />
      <noscript
        dangerouslySetInnerHTML={{
          __html:
            '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PFZZ2KW" height="0" width="0" style="display: none; visibility: hidden;" />',
        }}
      />
      <div id="portal-root"></div>
    </body>
  </Html>
);

MyDocument.getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps> => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        <Fragment key="1">
          {initialProps.styles}
          {sheet.getStyleElement()}
        </Fragment>,
      ],
    };
  } finally {
    sheet.seal();
  }
};
export default MyDocument;
