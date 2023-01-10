import "./mini.css";

type Props = {
  paragraph: string;
  heading: string;
};

const Mini = ({ paragraph, heading }: Props) => {
  return (
    <div className="destinations__head">
      <p className="destinations__para">{paragraph}</p>
      <h2 className="destinations__heading">{heading}</h2>
    </div>
  );
};

export default Mini;
