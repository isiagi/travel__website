import Button from "../button/Button";
import Mini from "../mini/Mini";
import "./destination.css";

import { destinations } from "../../data/data";

type Props = {};

const Destinations = (props: Props) => {
  return (
    <div className="destinations__container">
      <div className="middle destionations__wrapper">
        <Mini paragraph="Our Proposal" heading="OUR DESTINATIONS" />
        <div className="destionations__grid">
          {destinations.map((data) => (
            <div
              className="destionations__item"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data.image})`,
                backgroundSize: "cover",
                height: "100%",
                backgroundPosition: "center",
              }}
            >
              <div className="destionations__overlay">
                <h3>{data.hoverTitle}</h3>
                <Button name="Details" bg="#fff" color="#53BAD5" />
              </div>
              <div className="destionations__icon">{data.icon}</div>
              <div className="destionations__details">
                <h2>{data.cardHeading}</h2>
                <p>{data.packages}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
