import Head from "next/head";
import { HeaderLink } from "../components/header-link";
import { SnsLinkButton } from "../components/sns-link-button";
import { SoftwareCard } from "../components/software-card";

function getAge(year: number, month: number, date: number) {
  const today = new Date();
  const thisYearsBirthday = new Date(today.getFullYear(), month - 1, date);
  const passedBirthday = today >= thisYearsBirthday;
  return today.getFullYear() - (passedBirthday ? year : year - 1);
}
const age = getAge(1981, 1, 10);

export default () => {
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
              <HeaderLink label="Prefile" href="#prefile" />
              <HeaderLink label="Software" href="#software" />
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
                  <SnsLinkButton
                    label="GitHub"
                    href="https://github.com/proyuki02"
                    src="/image/github.png"
                  />
                  <SnsLinkButton
                    label="Twitter"
                    href="https://twitter.com/proyuki02"
                    src="/image/twitter.png"
                  />
                  <SnsLinkButton
                    label="Qiita"
                    href="https://qiita.com/proyuki02"
                    src="/image/qiita.png"
                  />
                </div>
              </div>
            </div>
          </section>
          <section id="software">
            <h2 className="text-3xl font-bold mb-4">Software</h2>
            <div className="grid gap-8 lg:grid-cols-3">
              <SoftwareCard
                softwareId="whitebord"
                name="Whitebord"
                imageSrc="/image/whitebord.png"
                summary="レトロスペクティブ専用のホワイトボード"
                demoUrl="https://proyuki02-whiteboard.glitch.me/"
                githubUrl="https://github.com/proyuki02/whiteboard/"
              >
                レトロスペクティブに使用するために開発しました。議題に集中できるように、シンプルな機能群、キャンパスサイズ、ペンの太さなどにこだわりました。
                <br />
                開発には Express / Socket.IO / Redis を使用しました。
              </SoftwareCard>
              <SoftwareCard
                softwareId="dpo"
                name="Delegation Poker Online"
                imageSrc="/image/delegation-poker-online.png"
                summary="権限移譲を促進するブラウザゲーム"
                demoUrl="https://delegation-poker-online-demo.web.app/"
                githubUrl="https://github.com/proyuki02/delegation-poker-online/"
              >
                権限移譲を促進するために開発しました。デリゲーションポーカーはマネジメント3.0でも紹介されているポピュラーなゲームです。
                <br />
                開発には Firebase / React を使用しました。
              </SoftwareCard>
              <SoftwareCard
                softwareId="forward-proxy"
                name="Forward Proxy"
                imageSrc="/image/forward-proxy.png"
                summary="ローカルPCで稼働するプロキシサーバー"
                githubUrl="https://github.com/proyuki02/forward-proxy/"
              >
                在宅ワーク時に開発サーバーのサイトを実機検証するために開発しました。スマホからVPNに接続したPCを経由して開発サーバーにアクセスします。
                <br />
                開発には Electron を使用しました。
              </SoftwareCard>
              <SoftwareCard
                softwareId="rest-timer"
                name="Rest Timer"
                imageSrc="/image/rest-timer.png"
                summary="全画面で定時をお知らせする常駐アプリケーション"
                githubUrl="https://github.com/proyuki02/rest-timer/"
              >
                集中していても休み時間や定時に気づけるように開発しました。全画面で最前列に表示されるのがポイントです。3分前からの予告表示もあります。
                <br />
                開発には Electron を使用しました。
              </SoftwareCard>
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
