import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Label } from "../components/label";
import { SoftwareCard } from "../components/software-card";

const UsedTech = () => (
  <>
    <div style={{ height: 8 }} />
    <Label>使用技術</Label>
  </>
);

export const Software = () => {
  return (
    <section id="software">
      <h2 className="mb-4 text-3xl font-bold">
        <FontAwesomeIcon
          icon={faLaptopCode}
          height="1em"
          className="mr-2 inline-block"
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
          <UsedTech />
          Express / Socket.IO / Redis
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
          <UsedTech />
          Firebase / React
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
          <UsedTech />
          Electron
        </SoftwareCard>
        <SoftwareCard
          softwareId="rest-timer"
          name="Rest Timer"
          imageSrc="/image/rest-timer.png"
          summary="定時をお知らせする常駐アプリ"
          githubUrl="https://github.com/proyuki02/rest-timer/"
        >
          集中していても休み時間や定時に気づけるように開発しました。全画面で最前列に表示されるのがポイントです。3分前から予告表示もあります。
          <br />
          <UsedTech />
          Electron
        </SoftwareCard>
        <SoftwareCard
          softwareId="kari"
          name="狩"
          imageSrc="/image/kari.png"
          summary="アクションRPG"
        >
          就職活動でゲーム会社の応募作品として制作したアクションRPGです。
          <br />
          <UsedTech />
          Visual C++ / DirectX
        </SoftwareCard>
      </div>
    </section>
  );
};
