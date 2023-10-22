interface Props {
  href: string;
  src: string;
  label: string;
}

export const SnsLinkButton = (props: Props) => {
  return (
    <div>
      <a
        role="button"
        className="btn glass btn-md w-36 gap-2 rounded-2xl normal-case"
        href={props.href}
        target="_blank"
        rel="noreferrer"
      >
        <img src={props.src} width={24} alt={props.label} />
        {props.label}
      </a>
    </div>
  );
};
