interface Props {
  softwareId: string;
  name: string;
  imageSrc: string;
  summary: string;
  children: any;
  demoUrl?: string;
  githubUrl?: string;
}

export const SoftwareCard = (props: Props) => {
  const modalId = "software-" + props.softwareId;
  return (
    <div>
      <div>
        <div className="card max-full bg-base-100 shadow-xl">
          <figure>
            <img
              src={props.imageSrc}
              alt={props.name}
              className="object-contain"
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title">{props.name}</h2>
            <p>{props.summary}</p>
            <div className="card-actions justify-center mt-4">
              <label
                htmlFor={modalId}
                className="btn btn-wide btn-primary modal-button"
              >
                OPEN
              </label>
              <input type="checkbox" id={modalId} className="modal-toggle" />
              <label htmlFor={modalId} className="modal cursor-pointer">
                <label
                  className="modal-box relative w-11/12 max-w-5xl"
                  htmlFor=""
                >
                  <img
                    src={props.imageSrc}
                    alt={props.name}
                    className="object-contain w-full"
                  />
                  <p className="py-4">{props.children}</p>
                  <div className="modal-action">
                    {props.demoUrl ? (
                      <ActionButton
                        label="Demo"
                        href={props.demoUrl}
                        src="/image/demo.svg"
                      />
                    ) : null}
                    {props.githubUrl ? (
                      <ActionButton
                        label="GitHub"
                        href={props.githubUrl}
                        src="/image/github.png"
                      />
                    ) : null}
                    <div>
                      <label htmlFor={modalId} className="btn">
                        CLOSE
                      </label>
                    </div>
                  </div>
                </label>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ActionButton = (props: { label: string; href: string; src: string }) => {
  return (
    <div>
      <a
        role="button"
        className="btn btn-md gap-2 glass normal-case whitespace-nowrap"
        href={props.href}
        target="_blank"
      >
        <img src={props.src} width={24} />
        {props.label}
      </a>
    </div>
  );
};
