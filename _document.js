// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Diğer meta etiketleri ve başlıklar */}
          <meta
            http-equiv="Content-Security-Policy"
            content="default-src 'self'; media-src 'self' https://res.cloudinary.com;"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
