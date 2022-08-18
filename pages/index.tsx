import Head from "next/head";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Profile } from "../components/profile";
import { Software } from "../components/software";
import { Works } from "../components/works";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bgColor">
      <Head>
        <title>Portfolio / Kazuyuki Tamura</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto grow bgColor border-x border-solid border-gray-800">
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
