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
        className="btn btn-md gap-4 glass normal-case w-40"
        href={props.href}
        target="_blank"
      >
        <img src={props.src} width={24} alt={props.label} />
        {props.label}
      </a>
    </div>
  );
};
