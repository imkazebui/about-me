import Head from "next/head";

import HomePage from "components/Pages/Home";

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>About me</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <HomePage />
    </div>
  );
}
