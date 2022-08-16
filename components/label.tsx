interface Props {
  children: any;
}

export const Label = (props: Props) => {
  return (
    <span className="badge badge-secondary p-2 mr-2 w-20">
      {props.children}
    </span>
  );
};
