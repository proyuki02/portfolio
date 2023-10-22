interface Props {
  date: string;
  name: string;
}
export const CertificationItem = (props: Props) => {
  return (
    <tr className="hover">
      <td>{props.date}</td>
      <td className="whitespace-normal">{props.name}</td>
    </tr>
  );
};
