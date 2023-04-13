import Head from "next/head";
import Script from "next/script";
import React from "react";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/Utils.module.css";

function logConsole() {
  console.log(`script loaded correctly, window.FB has been populated`);
}

const FirstPost = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={logConsole}
      />
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <b>Dhruv.</b> I am a highly motivated professional with a
          diverse set of skills in software development, web design, and
          database management.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on
          <a href="https://nextjs.org/learn"> our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
};

export default FirstPost;
