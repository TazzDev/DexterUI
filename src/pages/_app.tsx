"use client";
import Layout from "../components/layout";
import "../app/globals.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </>
  );
}

export default MyApp;
