import { SnsLinkButton } from "./sns-link-button";

function getAge(year: number, month: number, date: number) {
  const today = new Date();
  const thisYearsBirthday = new Date(today.getFullYear(), month - 1, date);
  const passedBirthday = today >= thisYearsBirthday;
  return today.getFullYear() - (passedBirthday ? year : year - 1);
}
const age = getAge(1981, 1, 10);

export const Profile = () => {
  return (
    <section id="profile">
      <div className="card bg-base-100 pt-8 shadow-xl lg:card-side lg:pt-0">
        <figure>
          <img src="/image/photo01.jpg" alt="Kazuyuki Tamura" width={250} />
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
          <div className="card-actions items-center gap-x-2">
            <SnsLinkButton
              label="Twitter"
              href="https://twitter.com/proyuki02"
              src="/image/twitter.png"
            />
            <SnsLinkButton
              label="GitHub"
              href="https://github.com/proyuki02"
              src="/image/github.png"
            />
            <SnsLinkButton
              label="Qiita"
              href="https://qiita.com/proyuki02"
              src="/image/qiita.png"
            />
            <SnsLinkButton
              label="Zenn"
              href="https://zenn.dev/proyuki02"
              src="/image/zenn.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
