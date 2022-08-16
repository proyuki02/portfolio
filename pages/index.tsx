import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";
import { Profile } from "./profile";
import { Software } from "./software";
import { Works } from "./works";

export default () => {
  return (
    <div>
      <Head>
        <title>Portfolio / Kazuyuki Tamura</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black/90 container mx-auto grow">
        <Header />
        <div className="p-8 pb-0">
          <Profile />
          <Software />
          <Works />
        </div>
        <Footer />
      </main>
    </div>
  );
};
