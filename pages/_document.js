import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
      <Script
          type='text/javascript'
          src='//dapi.kakao.com/v2/maps/sdk.js?appkey=221865f87f3f5b0bb2ac662f197e31e1&autoload=false'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}