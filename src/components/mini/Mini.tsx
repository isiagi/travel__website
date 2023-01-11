import "./mini.css";

type Props = {
  paragraph: string;
  heading: string;
};

const Mini = ({ paragraph, heading }: Props) => {
  return (
    <div className="destinations__head">
      <p className="destinations__para">{paragraph}</p>
      <h1 className="destinations__heading">
        OUR <span className="destinations__heading1">{heading}</span>
      </h1>
    </div>
  );
};

export default Mini;
