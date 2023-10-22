import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Label = (props: Props) => {
  return (
    <span className="badge mr-2 w-20 border-0 bg-zinc-700 p-3">
      {props.children}
    </span>
  );
};
