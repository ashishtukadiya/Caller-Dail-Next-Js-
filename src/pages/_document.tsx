/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="csrf-token"
          content="EfEpN9Vx5MPGKO0EBRfwZkRcDJLWyXo9r5DDJ7N4"
        />
        <title>ASTPP</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      {/* {/ <script src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js"></script> /} */}
    </Html>
  );
}
