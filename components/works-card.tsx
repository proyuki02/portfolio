import { ReactNode } from "react";

interface Props {
  summary: string;
  children: ReactNode;
}

export const WorksCard = (props: Props) => {
  return (
    <div className="alert mb-4 shadow-lg">
      <div className="w-full">
        <div>
          <h3 className="text-lg font-bold">{props.summary}</h3>
          {props.children}
        </div>
      </div>
    </div>
  );
};
