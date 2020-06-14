import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" style={{
                height: '100%',
                font: '16px Helvetica Neue Helvetica Arial sans-serif',
                lineHeight: 1.5,
                color: '#545454'
            }}>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="google" content="notranslate" />
                    <meta name="theme-color" content="#888e94" />
                    <meta name="description" content="April Mission Foundation website" />
                    <meta name="keywords" content="NGO, Children, Donate, Mission Foundation, Charity, Support" />
                    <meta name="author" content="Abeeb Ridwan Olumide" />
                    <link
                        rel="shortcut icon"
                        href="/favicon.ico"
                    />
                </Head>
                <body
                    style={{
                        padding: '0px',
                        margin: '0px',
                        overflow: 'hidden',
                        backgroundColor: 'black',
                        minHeight: '100%',
                    }}
                >
                    <Main />
                    <NextScript />
                </body>
            </Html >
        );
    }
}

export default MyDocument
