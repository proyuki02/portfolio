import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";
import { Profile } from "./profile";
import { Software } from "./software";
import { Works } from "./works";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio / Kazuyuki Tamura</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto grow bg-black/90">
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

export default Home;
