import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Label = (props: Props) => {
  return (
    <span className="badge badge-secondary mr-2 w-20 p-2">
      {props.children}
    </span>
  );
};
