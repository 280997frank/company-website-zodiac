import { FC } from "react";
import Head from "next/head";
interface HtmlHeaderProps {
  pageTitle?: string;
}

const AppHeader: FC<HtmlHeaderProps> = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0"
          key="viewport"
        ></meta>
        <link rel="shortcut icon" href="/favicon.png"></link>
      </Head>
    </>
  );
};

export default AppHeader;
