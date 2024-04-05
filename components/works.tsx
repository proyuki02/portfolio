import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WorksCard } from "../components/works-card";
import {
  WorksCardItemJob,
  WorksCardItemSpan,
  WorksCardItemTech,
} from "../components/works-card-item";

export const Works = () => {
  return (
    <section id="works">
      <h2 className="mb-4 text-3xl font-bold">
        <FontAwesomeIcon
          icon={faUserTie}
          height="1em"
          className="mr-2 inline-block"
        />
        Works
      </h2>
      <WorksCard summary="自社製品（医療画像解析・FAX通信・電話自動応答）のカスタマイズ">
        <WorksCardItemSpan>2000/04 - 2000/12</WorksCardItemSpan>
        <WorksCardItemJob>実装 / 単体テスト</WorksCardItemJob>
        <WorksCardItemTech>Visual C++</WorksCardItemTech>
      </WorksCard>
      <WorksCard summary="コンビニATM⇔銀行通信データ変換ゲートウェイの機能開発">
        <WorksCardItemSpan>2001/04 - 2002/03</WorksCardItemSpan>
        <WorksCardItemJob>実装 / 単体テスト</WorksCardItemJob>
        <WorksCardItemTech>RS6000 / DB2 / AIX(Unix) / UNIX C</WorksCardItemTech>
      </WorksCard>
      <WorksCard summary="MR（医薬営業）業務支援システムの機能開発">
        <WorksCardItemSpan>2002/08 - 2004/06</WorksCardItemSpan>
        <WorksCardItemJob>実装 / 単体テスト</WorksCardItemJob>
        <WorksCardItemTech>
          Visual C++ / ASP / VBA / SQL Server
        </WorksCardItemTech>
      </WorksCard>
      <WorksCard summary="東北文庫（書籍販売サイト）の制作･運営">
        <WorksCardItemSpan>2004/08 - 2006/06</WorksCardItemSpan>
        <WorksCardItemJob>
          要件定義 / 設計 / 実装 / テスト / 運用
        </WorksCardItemJob>
        <WorksCardItemTech>
          Perl / Dreamwaver / Photoshop / Illustrator / Flash / Linux
        </WorksCardItemTech>
      </WorksCard>
      <WorksCard summary="au携帯公式コンテンツの制作･運営">
        <WorksCardItemSpan>2005/09 - 2008/11</WorksCardItemSpan>
        <WorksCardItemJob>設計 / 実装 / テスト / 運用</WorksCardItemJob>
        <WorksCardItemTech>
          PHP / MySQL / Dreamwaver / Photoshop / Illustrator / Flash / Linux
        </WorksCardItemTech>
      </WorksCard>
      <WorksCard summary="社内情報ポータルの新規開発">
        <WorksCardItemSpan>2007/05 - 2008/03</WorksCardItemSpan>
        <WorksCardItemJob>
          要件定義 / 設計 / 実装 / テスト / 運用
        </WorksCardItemJob>
        <WorksCardItemTech>PHP / MySQL / Dreamwaver / Linux</WorksCardItemTech>
      </WorksCard>
      <WorksCard summary="チケット予約システムの不具合修正">
        <WorksCardItemSpan>2008/12 - 2009/02</WorksCardItemSpan>
        <WorksCardItemJob>調査 / 実装 / テスト</WorksCardItemJob>
        <WorksCardItemTech>
          PHP / Smarty / MySQL / V-Payment / Apache / Linux
        </WorksCardItemTech>
      </WorksCard>
      <WorksCard summary="携帯情報配信システムのカスタマイズ">
        <WorksCardItemSpan>2009/02 - 2009/03</WorksCardItemSpan>
        <WorksCardItemJob>詳細設計 / 実装 / テスト</WorksCardItemJob>
        <WorksCardItemTech>
          Java / Struts / Mayaa / JavaScript / PostgreSQL / Tomcat
        </WorksCardItemTech>
      </WorksCard>
      <WorksCard summary="ECサイトパッケージのカスタマイズ">
        <WorksCardItemSpan>2009/04 - 2009/05</WorksCardItemSpan>
        <WorksCardItemJob>詳細設計 / 実装 / テスト</WorksCardItemJob>
        <WorksCardItemTech>
          Java / Struts / Mayaa / JavaScript / PostgreSQL / Tomcat
        </WorksCardItemTech>
      </WorksCard>
      <WorksCard summary="婚活支援サイトの新規開発">
        <WorksCardItemSpan>2009/06 - 2009/10</WorksCardItemSpan>
        <WorksCardItemJob>要件定義 / 設計 / 実装 / テスト</WorksCardItemJob>
        <WorksCardItemTech>
          PHP / Symfony / JavaScript / MySQL / Apache
        </WorksCardItemTech>
      </WorksCard>
      <WorksCard summary="球団ファンサイトの機能開発">
        <WorksCardItemSpan>2009/11 - 2010/03</WorksCardItemSpan>
        <WorksCardItemJob>詳細設計 / 実装 / テスト</WorksCardItemJob>
        <WorksCardItemTech>
          PHP / Symfony / JavaScript / MySQL / Apache / Linux
        </WorksCardItemTech>
      </WorksCard>
      <WorksCard summary="ポータルサイト保守">
        <WorksCardItemSpan>2010/04 - 2010/04</WorksCardItemSpan>
        <WorksCardItemJob>設計 / 実装 / テスト</WorksCardItemJob>
        <WorksCardItemTech>
          Java / Struts / Mojavi / PHP / JavaScript / Tomcat / Apache / Linux
        </WorksCardItemTech>
      </WorksCard>
      <WorksCard summary="売上レポートバッチ開発">
        <WorksCardItemSpan>2010/05 - 2010/05</WorksCardItemSpan>
        <WorksCardItemJob>設計 / 実装 / テスト</WorksCardItemJob>
        <WorksCardItemTech>Java / Spring / Oracle / Linux</WorksCardItemTech>
      </WorksCard>
      <WorksCard summary="汎用応募受付フォーム開発">
        <WorksCardItemSpan>2010/06 - 2010/09</WorksCardItemSpan>
        <WorksCardItemJob>要件定義 / 設計 / 実装 / テスト</WorksCardItemJob>
        <WorksCardItemTech>
          Java / Struts / MySQL / Tomcat / Apache / Linux
        </WorksCardItemTech>
      </WorksCard>
      <WorksCard summary="データウェアハウスのリニューアル">
        <WorksCardItemSpan>2010/10 - 2016/05</WorksCardItemSpan>
        <WorksCardItemJob>
          設計 / 実装 / テスト / 運用 / 開発環境整備
        </WorksCardItemJob>
        <WorksCardItemTech>
          Hadoop / Hive / Bash script / Perl / Java / Spring / SAStruts /
          Velocity / Jersey / Ruby / Sinatra / Slim / Sass / jQuery / Bitbucket
          / Jenkins / Cloud Foundry / Splunk / MySQL / Exadata / Infomix / Derby
          / Systemwalker / Linux
        </WorksCardItemTech>
      </WorksCard>
      <WorksCard summary="ECモール運用ツールのDBマイグレーション">
        <WorksCardItemSpan>2015/02 - 2015/03</WorksCardItemSpan>
        <WorksCardItemJob>実装 / テスト</WorksCardItemJob>
        <WorksCardItemTech>
          Java / Struts / Infomix / Exadata / Tomcat / Linux
        </WorksCardItemTech>
      </WorksCard>
      <WorksCard summary="店舗評価システムの新規開発">
        <WorksCardItemSpan>2016/04 - 2018/09</WorksCardItemSpan>
        <WorksCardItemJob>
          プロトタイピング / 設計 / 実装 / テスト / 運用 / 開発環境整備
        </WorksCardItemJob>
        <WorksCardItemTech>
          React / Flow / Redux / Java / Spring / Swagger / Bitbucket / Jenkins /
          Cloud Foundry / Splunk / MySQL / Oracle / Flyway / Kafka / PowerCenter
          / Zeppelin / Linux
        </WorksCardItemTech>
      </WorksCard>
      <WorksCard summary="顧客管理システムの新規開発">
        <WorksCardItemSpan>2018/09 - now</WorksCardItemSpan>
        <WorksCardItemJob>
          プロトタイピング / 設計 / 実装 / テスト / 運用 / 開発環境整備
        </WorksCardItemJob>
        <WorksCardItemTech>
          TypeScript / React / MobX / Express / Swagger / GitHub Enterprise /
          CircleCI / Docker / Cloud Foundry / Splunk / Redis / MySQL / Kafka /
          Next.js / zustand / tRPC / TypeORM / Vite / Vitest / Kubernetes /
          Elastic Stack / PractiTest / GitOps / Bitbucket / Jenkins / Linux
        </WorksCardItemTech>
      </WorksCard>
      <WorksCard summary="問い合わせシステムのリニューアル・機能開発">
        <WorksCardItemSpan>2019/03 - now</WorksCardItemSpan>
        <WorksCardItemJob>
          設計 / 実装 / テスト / 運用 / 開発環境整備
        </WorksCardItemJob>
        <WorksCardItemTech>
          TypeScript / React / Next.js / MobX / zustand / tRPC / NestJS / Jest /
          Socket.IO / Java / Spring / GitOps / Bitbucket / Jenkins / Docker /
          Kubernetes / Elastic Stack / Splunk / Redis / MySQL / PractiTest /
          OpenAI API / Linux
        </WorksCardItemTech>
      </WorksCard>
    </section>
  );
};
