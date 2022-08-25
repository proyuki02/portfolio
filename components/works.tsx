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
      <WorksCard summary="自社製品（医療画像解析・FAX送信・自動音声応答）のカスタマイズ">
        <WorksCardItemSpan>2000</WorksCardItemSpan>
        <WorksCardItemJob>実装 / 単体テスト</WorksCardItemJob>
        <WorksCardItemTech>Visual C++</WorksCardItemTech>
      </WorksCard>
      <WorksCard summary="通信データ相互変換システムの機能開発">
        <WorksCardItemSpan>2001 - 2002</WorksCardItemSpan>
        <WorksCardItemJob>実装 / 単体テスト</WorksCardItemJob>
        <WorksCardItemTech>RS6000 / DB2 / AIX(Unix) / UNIX C</WorksCardItemTech>
      </WorksCard>
      <WorksCard summary="営業支援システムの機能開発">
        <WorksCardItemSpan>2002 - 2004</WorksCardItemSpan>
        <WorksCardItemJob>実装 / 単体テスト</WorksCardItemJob>
        <WorksCardItemTech>
          Visual C++ / ASP / VBA / SQL Server
        </WorksCardItemTech>
      </WorksCard>
      <WorksCard summary="書籍販売サイトの制作･運営">
        <WorksCardItemSpan>2004 - 2006</WorksCardItemSpan>
        <WorksCardItemJob>
          要件定義 / 設計 / 実装 / テスト / 運用
        </WorksCardItemJob>
        <WorksCardItemTech>
          Perl / Dreamwaver / Photoshop / Illustrator / Flash
        </WorksCardItemTech>
      </WorksCard>
      <WorksCard summary="携帯公式コンテンツの制作･運営">
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
        <WorksCardItemJob>要件定義 / 設計 / 実装 / テスト</WorksCardItemJob>
        <WorksCardItemTech>
          PHP / Symfony / Apache / JavaScript / MySQL
        </WorksCardItemTech>
      </WorksCard>
      <WorksCard summary="球団ファンサイトの機能開発">
        <WorksCardItemSpan>2009 - 2010</WorksCardItemSpan>
        <WorksCardItemJob>詳細設計 / 実装 / 単体テスト / 運用</WorksCardItemJob>
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
          Hadoop / Hive / Bash script / Perl / Java / Spring / Ruby / Sinatra /
          jQuery / Bitbucket / Jenkins / Cloud Foundry / Splunk / MySQL / Oracle
          / Systemwalker
        </WorksCardItemTech>
      </WorksCard>
      <WorksCard summary="店舗評価システムの新規開発">
        <WorksCardItemSpan>2016 - 2018</WorksCardItemSpan>
        <WorksCardItemJob>
          プロトタイピング / 設計 / 実装 / テスト / 運用 / 開発環境整備
        </WorksCardItemJob>
        <WorksCardItemTech>
          React / Flow / Redux / Java / Spring / Swagger / Bitbucket / Jenkins /
          Cloud Foundry / Splunk / MySQL / Oracle / Flyway / Kafka / PowerCenter
          / Zeppelin
        </WorksCardItemTech>
      </WorksCard>
      <WorksCard summary="顧客管理システムの新規開発">
        <WorksCardItemSpan>2018 - 2022</WorksCardItemSpan>
        <WorksCardItemJob>
          プロトタイピング / 設計 / 実装 / テスト / 運用 / 開発環境整備
        </WorksCardItemJob>
        <WorksCardItemTech>
          TypeScript / React / MobX / Express / Swagger / GitHub Enterprise /
          CircleCI / Docker / Cloud Foundry / Splunk / Redis / MySQL / Kafka
        </WorksCardItemTech>
      </WorksCard>
      <WorksCard summary="問い合わせシステムのリニューアル">
        <WorksCardItemSpan>2019 - 2022</WorksCardItemSpan>
        <WorksCardItemJob>
          設計 / 実装 / テスト / 運用 / 開発環境整備
        </WorksCardItemJob>
        <WorksCardItemTech>
          TypeScript / React / MobX / NestJS / Jest / Socket.IO / Java / Spring
          / GitOps / Bitbucket / Jenkins / Docker / Kubernetes / Kustomize /
          Elastic Stack / Splunk / Redis / MySQL
        </WorksCardItemTech>
      </WorksCard>
    </section>
  );
};
