import type { NextPage } from "next";
import Head from "next/head";
// import { useEffect } from "react";

function getAge(year: number, month: number, date: number) {
  const today = new Date();
  const thisYearsBirthday = new Date(today.getFullYear(), month - 1, date);
  const passedBirthday = today >= thisYearsBirthday;
  return today.getFullYear() - (passedBirthday ? year : year - 1);
}
const age = getAge(1981, 1, 10);

const Home: NextPage = () => {
  // useEffect(() => {
  //   const f = async () => {
  //     const res = await fetch("/api/hello").then((res) => res.json());
  //     console.log(res);
  //   };
  //   f();
  // }, []);

  return (
    <div className="">
      <Head>
        <title>Portfolio / Kazuyuki Tamura</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black/90 container mx-auto grow">
        <div className="navbar sticky top-0 z-30 bg-red-900/90">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl normal-case" href="#">
              Portfolio
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
              <li>
                <a href="#prefile" className="active:bg-red-200/20">
                  Prefile
                </a>
              </li>
              <li>
                <a href="#software" className="active:bg-red-200/20">
                  Software
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-8">
          <section id="prefile">
            <div className="card lg:card-side bg-base-100 shadow-xl pt-8 lg:pt-0">
              <figure>
                <img
                  src="/image/photo01.jpg"
                  alt="Kazuyuki Tamura"
                  width={250}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-3xl font-bold">
                  Hello! I am KAZUYUKI TAMURA
                </h2>
                <ul className="m-4 list-disc">
                  <li>誕生日: 1981年1月10日 ({age}歳)</li>
                  <li>プログラミング歴: 1997年～現在</li>
                  <li>出身地: 熊本県 熊本市</li>
                  <li>現在地: 宮城県 仙台市</li>
                </ul>
                <div className="card-actions items-center gap-x-4">
                  <div>
                    <a
                      role="button"
                      className="btn btn-md gap-4 glass normal-case w-40"
                      href="https://github.com/proyuki02"
                      target="_blank"
                    >
                      <img src="/image/github.png" width={24} />
                      GitHub
                    </a>
                  </div>
                  <div>
                    <a
                      role="button"
                      className="btn btn-md gap-4 glass normal-case w-40"
                      href="https://twitter.com/proyuki02"
                      target="_blank"
                    >
                      <img src="/image/twitter.png" width={24} />
                      Twitter
                    </a>
                  </div>
                  <div>
                    <a
                      role="button"
                      className="btn btn-md gap-4 glass normal-case w-40"
                      href="https://qiita.com/proyuki02"
                      target="_blank"
                    >
                      <img src="/image/qiita.png" width={24} />
                      Qiita
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="software">
            <h2 className="text-3xl font-bold mb-4">Software</h2>
            <div>
              <div>
                <div className="card max-w-md bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src="/image/whitebord.png"
                      alt="Whitebord"
                      className="object-contain h-48"
                    />
                  </figure>
                  <div className="card-body p-4">
                    <h2 className="card-title">Whitebord</h2>
                    <p>レトロスペクティブ専用のホワイトボード</p>
                    <div className="card-actions justify-center mt-4">
                      <label
                        htmlFor="my-modal"
                        className="btn btn-wide btn-primary modal-button"
                      >
                        OPEN
                      </label>
                      <input
                        type="checkbox"
                        id="my-modal"
                        className="modal-toggle"
                      />
                      <label
                        htmlFor="my-modal"
                        className="modal cursor-pointer"
                      >
                        <label
                          className="modal-box relative w-11/12 max-w-5xl"
                          htmlFor=""
                        >
                          <img
                            src="/image/whitebord.png"
                            alt="Whitebord"
                            className="object-cover w-fit"
                          />
                          <p className="py-4">
                            レトロスペクティブに使用するために開発しました。議題に集中できるようにシンプルな機能群、キャンパスサイズ、ペンの太さなどに拘っています。
                            <br />
                            開発には Express / Socket.IO / Redis
                            を使用しました。
                          </p>
                          <div className="modal-action">
                            <div>
                              <a
                                role="button"
                                className="btn btn-md gap-2 glass normal-case whitespace-nowrap"
                                href="https://proyuki02-whiteboard.glitch.me/"
                                target="_blank"
                              >
                                <img src="/image/demo.svg" width={24} />
                                Demo
                              </a>
                            </div>
                            <div>
                              <a
                                role="button"
                                className="btn btn-md gap-2 glass normal-case whitespace-nowrap"
                                href="https://github.com/proyuki02/whiteboard"
                                target="_blank"
                              >
                                <img src="/image/github.png" width={24} />
                                GitHub
                              </a>
                            </div>
                            <div>
                              <label htmlFor="my-modal" className="btn">
                                Close
                              </label>
                            </div>
                          </div>
                        </label>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <footer className="footer footer-center p-4 bg-black text-base-content">
          <div>
            <p>Copyright © 2022 - All right reserved by Kazuyuki Tamura</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;
