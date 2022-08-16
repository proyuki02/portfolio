import { Label } from "./label";

interface Props {
  label: string;
  children: any;
}
export const WorksCardItem = (props: Props) => {
  return (
    <p className="text-md m-4 ml-0">
      <Label>{props.label}</Label>
      {props.children}
    </p>
  );
};
