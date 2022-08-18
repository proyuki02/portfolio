import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Label = (props: Props) => {
  return (
    <span className="badge bg-zinc-700 border-0 mr-2 w-20 p-3">
      {props.children}
    </span>
  );
};
