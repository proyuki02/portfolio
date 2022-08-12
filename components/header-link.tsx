interface Props {
  href: string;
  label: string;
}

export const HeaderLink = (props: Props) => {
  return (
    <li>
      <a href={props.href} className="active:bg-red-200/20">
        {props.label}
      </a>
    </li>
  );
};
