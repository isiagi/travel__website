import Button from "../button/Button";
import "./banner.css";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="banner__container">
      <div className="banner__wrapper">
        <h1 className="banner__title">
          Your Next <span className="banner__title1">Holiday</span>
        </h1>
        <Button name="View All Destinations" bg="#fff" color="#673B2C" />
      </div>
    </div>
  );
};

export default Banner;
