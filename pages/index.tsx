import { faLaptopCode, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { HeaderLink } from "../components/header-link";
import { Label } from "../components/label";
import { SnsLinkButton } from "../components/sns-link-button";
import { SoftwareCard } from "../components/software-card";
import { WorksCard } from "../components/works-card";
import {
  WorksCardItemJob,
  WorksCardItemSpan,
  WorksCardItemTech,
} from "../components/works-card-item";

function getAge(year: number, month: number, date: number) {
  const today = new Date();
  const thisYearsBirthday = new Date(today.getFullYear(), month - 1, date);
  const passedBirthday = today >= thisYearsBirthday;
  return today.getFullYear() - (passedBirthday ? year : year - 1);
}
const age = getAge(1981, 1, 10);

export default () => {
  return (
    <div>
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
              <HeaderLink label="Works" href="#works" />
            </ul>
          </div>
        </div>
        <div className="p-8 pb-0">
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
            <h2 className="text-3xl font-bold mb-4">
              <FontAwesomeIcon
                icon={faLaptopCode}
                height="1em"
                className="inline-block mr-2"
              />
              Software
            </h2>
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
                <Label>使用技術</Label>Express / Socket.IO / Redis
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
                <Label>使用技術</Label>Firebase / React
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
                <Label>使用技術</Label>Electron
              </SoftwareCard>
              <SoftwareCard
                softwareId="rest-timer"
                name="Rest Timer"
                imageSrc="/image/rest-timer.png"
                summary="全画面で定時をお知らせする常駐アプリケーション"
                githubUrl="https://github.com/proyuki02/rest-timer/"
              >
                集中していても休み時間や定時に気づけるように開発しました。全画面で最前列に表示されるのがポイントです。3分前から予告表示もあります。
                <br />
                <Label>使用技術</Label>Electron
              </SoftwareCard>
              <SoftwareCard
                softwareId="kari"
                name="狩"
                imageSrc="/image/kari.png"
                summary="アクションRPG"
              >
                就職活動でゲーム会社の応募作品として制作したアクションRPGです。
                <br />
                <Label>使用技術</Label>Visual C++ / DirectX
              </SoftwareCard>
            </div>
          </section>

          <section id="works">
            <h2 className="text-3xl font-bold mb-4">
              <FontAwesomeIcon
                icon={faUserTie}
                height="1em"
                className="inline-block mr-2"
              />
              Works
            </h2>
            <WorksCard summary="自社製品（医療画像解析・FAX送信・自動音声応答）のカスタマイズ">
              <WorksCardItemSpan>2000</WorksCardItemSpan>
              <WorksCardItemJob>実装 / 単体テスト</WorksCardItemJob>
              <WorksCardItemTech>Visual C++</WorksCardItemTech>
            </WorksCard>
            <WorksCard summary="通信データ相互変換システムの機能開発">
              <WorksCardItemSpan>2001 - 2002</WorksCardItemSpan>
              <WorksCardItemJob>実装 / 単体テスト</WorksCardItemJob>
              <WorksCardItemTech>
                RS6000 / DB2 / AIX(Unix) / UNIX C
              </WorksCardItemTech>
            </WorksCard>
            <WorksCard summary="営業支援システムの機能開発">
              <WorksCardItemSpan>2002 - 2004</WorksCardItemSpan>
              <WorksCardItemJob>実装 / 単体テスト</WorksCardItemJob>
              <WorksCardItemTech>
                Visual C++ / ASP / VBA / SQL Server
              </WorksCardItemTech>
            </WorksCard>
            <WorksCard summary="書籍販売サイト制作･運営">
              <WorksCardItemSpan>2004 - 2006</WorksCardItemSpan>
              <WorksCardItemJob>
                要件定義 / 設計 / 実装 / テスト / 運用
              </WorksCardItemJob>
              <WorksCardItemTech>
                Perl / Dreamwaver / Photoshop / Illustrator / Flash
              </WorksCardItemTech>
            </WorksCard>
            <WorksCard summary="携帯公式コンテンツ制作･運営">
              <WorksCardItemSpan>2005 - 2008</WorksCardItemSpan>
              <WorksCardItemJob>設計 / 実装 / テスト / 運用</WorksCardItemJob>
              <WorksCardItemTech>
                PHP / MySQL / Dreamwaver / Photoshop / Illustrator / Flash
              </WorksCardItemTech>
            </WorksCard>
            <WorksCard summary="社内情報ポータルの新規開発">
              <WorksCardItemSpan>2007 - 2008</WorksCardItemSpan>
              <WorksCardItemJob>
                要件定義 / 設計 / 実装 / テスト / 運用
              </WorksCardItemJob>
              <WorksCardItemTech>PHP / MySQL / Dreamwaver</WorksCardItemTech>
            </WorksCard>
            <WorksCard summary="チケット予約システムの不具合修正">
              <WorksCardItemSpan>2008 - 2009</WorksCardItemSpan>
              <WorksCardItemJob>調査 / 実装 / テスト</WorksCardItemJob>
              <WorksCardItemTech>PHP / Smarty / MySQL</WorksCardItemTech>
            </WorksCard>
            <WorksCard summary="自社製品（ECサイト・携帯情報配信）のカスタマイズ">
              <WorksCardItemSpan>2009</WorksCardItemSpan>
              <WorksCardItemJob>詳細設計 / 実装 / 単体テスト</WorksCardItemJob>
              <WorksCardItemTech>
                Java / Struts / Mayaa / JavaScript / PostgreSQL
              </WorksCardItemTech>
            </WorksCard>
            <WorksCard summary="婚活支援サイトの新規開発">
              <WorksCardItemSpan>2009</WorksCardItemSpan>
              <WorksCardItemJob>
                要件定義 / 設計 / 実装 / テスト
              </WorksCardItemJob>
              <WorksCardItemTech>
                PHP / Symfony / Apache / JavaScript / MySQL
              </WorksCardItemTech>
            </WorksCard>
            <WorksCard summary="球団ファンサイトの機能開発">
              <WorksCardItemSpan>2009 - 2010</WorksCardItemSpan>
              <WorksCardItemJob>
                詳細設計 / 実装 / 単体テスト / 運用
              </WorksCardItemJob>
              <WorksCardItemTech>
                PHP / Symfony / Apache / JavaScript / MySQL
              </WorksCardItemTech>
            </WorksCard>
            <WorksCard summary="データウェアハウスのリニューアル">
              <WorksCardItemSpan>2010 - 2016</WorksCardItemSpan>
              <WorksCardItemJob>
                設計 / 実装 / テスト / 運用 / 開発環境整備
              </WorksCardItemJob>
              <WorksCardItemTech>
                Hadoop / Hive / Bash script / Perl / Java / Spring / Ruby /
                Sinatra / jQuery / Bitbucket / Jenkins / Cloud Foundry / Splunk
                / MySQL / Oracle / Systemwalker
              </WorksCardItemTech>
            </WorksCard>
            <WorksCard summary="店舗評価システムの新規開発">
              <WorksCardItemSpan>2016 - 2018</WorksCardItemSpan>
              <WorksCardItemJob>
                設計 / 実装 / テスト / 運用 / 開発環境整備
              </WorksCardItemJob>
              <WorksCardItemTech>
                React / Flow / Redux / Java / Spring / Swagger / Bitbucket /
                Jenkins / Cloud Foundry / Splunk / MySQL / Oracle / Flyway /
                Kafka / PowerCenter / Zeppelin
              </WorksCardItemTech>
            </WorksCard>
            <WorksCard summary="顧客管理システムの新規開発">
              <WorksCardItemSpan>2018 - 2022</WorksCardItemSpan>
              <WorksCardItemJob>
                設計 / 実装 / テスト / 運用 / 開発環境整備
              </WorksCardItemJob>
              <WorksCardItemTech>
                TypeScript / React / MobX / Express / Swagger / GitHub
                Enterprise / CircleCI / Docker / Cloud Foundry / Splunk / Redis
                / MySQL / Kafka
              </WorksCardItemTech>
            </WorksCard>
            <WorksCard summary="問い合わせチャットシステムの新規開発">
              <WorksCardItemSpan>2019 - 2022</WorksCardItemSpan>
              <WorksCardItemJob>
                設計 / 実装 / テスト / 運用 / 開発環境整備
              </WorksCardItemJob>
              <WorksCardItemTech>
                TypeScript / React / MobX / NestJS / Jest / Socket.IO / Java /
                Spring / GitOps / Bitbucket / Jenkins / Docker / Kubernetes /
                Kustomize / Elastic Stack / Splunk / Redis / MySQL
              </WorksCardItemTech>
            </WorksCard>
          </section>
        </div>
        <footer className="footer footer-center p-4 pt-0 bg-black text-base-content text-slate-400">
          <div>
            <p>Copyright © 2022 - All right reserved by Kazuyuki Tamura</p>
          </div>
        </footer>
      </main>
    </div>
  );
};
