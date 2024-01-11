import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CertificationItem } from "./certification-item";

export const Certification = () => {
  return (
    <section id="certification">
      <h2 className="mb-4 text-3xl font-bold">
        <FontAwesomeIcon
          icon={faCertificate}
          height="1em"
          className="mr-2 inline-block"
        />
        Certification
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="w-28">取得日</th>
              <th>資格名</th>
            </tr>
          </thead>
          <tbody>
            <CertificationItem
              date="2006/05/16"
              name="初級システムアドミニストレータ試験"
            />
            <CertificationItem date="2009/05/26" name="基本情報技術者試験" />
            <CertificationItem
              date="2012/04/09"
              name="Oracle Certified Professional, Java SE 6 Programmer"
            />
            <CertificationItem
              date="2017/08/10"
              name="AWS Certified Solutions Architect - Associate"
            />
            <CertificationItem date="2023/10/08" name="応用情報技術者試験" />
          </tbody>
        </table>
      </div>
    </section>
  );
};
