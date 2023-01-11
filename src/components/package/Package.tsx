import Button from "../button/Button";
import "./package.css";

import { card } from "../../data/data";
import Mini from "../mini/Mini";
import Card from "./Card";

type Props = {};

const Package = (props: Props) => {
  return (
    <div className="package__container">
      <div className="middle package__wrapper">
        <Mini paragraph="PROMOTIONS" heading="PACKAGES" />

        <div className="package__grid">
          {card.map(
            ({
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
            }) => (
              <Card
                id={id}
                img={img}
                state={state}
                icon={icon}
                country={country}
                price={price}
                paragraph={paragraph}
                textColor={textColor}
                type={type}
                bg={bg}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Package;
