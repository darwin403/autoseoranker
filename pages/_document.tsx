import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html className="h-100">
        <Head>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
          <script
            async
            defer
            crossOrigin="anonymous"
            src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v11.0"
            nonce="izPCFPVT"
          ></script>
        </Head>
        <body className="h-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
