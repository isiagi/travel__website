import Button from "../button/Button";
import { CiLocationOn } from "react-icons/ci";

import "./package.css";

type Props = {
  id: number;
  img: string;
  state: string;
  icon: JSX.Element;
  country: string;
  type: string;
  price: string;
  paragraph: string;
  textColor: string;
  bg: string;
};

const Card = ({
  id,
  img,
  state,
  icon,
  country,
  type,
  price,
  paragraph,
  textColor,
  bg,
}: Props) => {
  return (
    <div className="package__item" key={id}>
      <div className="package__show">
        <img src={img} alt="" />
        <div className="packages__icon" style={{ backgroundColor: bg }}>
          {icon}
        </div>
      </div>
      <div className="package__detail">
        <div className="package__detail1">
          <h4 className="package__city">{state}</h4>
          <div className="package__location">
            <CiLocationOn />
            <p>{country}</p>
          </div>
        </div>
        <hr />
        <div className="package__tags">
          <p className="package__tags__para">{type}</p>
          <h2 className="package__tags__head">{price}</h2>
        </div>
        <hr />
        <div className="package__text">
          <p>{paragraph}</p>
        </div>
        <Button name="Details" bg={bg} color={textColor} />
      </div>
    </div>
  );
};

export default Card;
