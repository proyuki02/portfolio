interface Props {
  href: string;
  label: string;
  openMenu: boolean;
  onClick: () => void;
}

export const HeaderLink = (props: Props) => {
  return (
    <li className={`${props.openMenu ? "block" : "hidden"} sm:block`}>
      <a
        href={props.href}
        className="active:bg-red-200/20"
        onClick={props.onClick}
      >
        {props.label}
      </a>
    </li>
  );
};
