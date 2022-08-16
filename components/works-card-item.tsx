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

export const WorksCardItemSpan = (props: { children: any }) => {
  return <WorksCardItem label="期間">{props.children}</WorksCardItem>;
};

export const WorksCardItemJob = (props: { children: any }) => {
  return <WorksCardItem label="主な業務">{props.children}</WorksCardItem>;
};

export const WorksCardItemTech = (props: { children: any }) => {
  return <WorksCardItem label="使用技術">{props.children}</WorksCardItem>;
};
