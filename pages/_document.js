import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html
        lang="en"
        style={{
          height: '100%',
          color: '#545454',
          boxSizing: 'border-box',
        }}
      >
        <Head>
          <meta charSet="utf-8" />
          <meta name="google" content="notranslate" />
          <meta name="theme-color" content="#888e94" />
          <meta name="description" content="April Mission Foundation website" />
          <meta name="keywords" content="NGO, Children, Donate, Mission Foundation, Charity, Support" />
          <meta name="author" content="Abeeb Ridwan Olumide" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body
          style={{
            padding: '0px',
            margin: '0px',
            overflowX: 'hidden',
            backgroundColor: '#101010',
            minHeight: '100%',
            width: '100%',
            boxSizing: 'border-box',
            fontFamily: 'Arial',
            position: 'relative',
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
