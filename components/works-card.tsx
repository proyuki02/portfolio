interface Props {
  summary: string;
  children: any;
}

export const WorksCard = (props: Props) => {
  return (
    <div className="alert shadow-lg mb-4">
      <div className="w-full">
        <div>
          <h3 className="font-bold text-lg">{props.summary}</h3>
          {props.children}
        </div>
      </div>
    </div>
  );
};
