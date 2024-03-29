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
          scrollBehavior: 'smooth',
        }}
      >
        <Head>
          <meta charSet="utf-8" />
          <meta name="google" content="notranslate" />
          <meta name="theme-color" content="#202120" />
          <meta name="description" content="April Mission Foundation website" />
          <meta name="keywords" content="NGO, Children, Donate, Mission Foundation, Charity, Support" />
          <meta name="author" content="Abeeb Ridwan Olumide" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            media="print"
            onLoad="this.media='all'"
          />
          <script type="module" src="https://cdn.jsdelivr.net/npm/@justinribeiro/lite-youtube@0.6.2/lite-youtube.js" />
        </Head>
        <body
          style={{
            padding: '0px',
            margin: '0px auto',
            overflowX: 'hidden',
            backgroundColor: '#101010',
            minHeight: '100%',
            width: '100%',
            maxWidth: '2000px',
            boxSizing: 'border-box',
            fontFamily: 'Arial',
            position: 'relative',
          }}
        >
          <script>0</script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
