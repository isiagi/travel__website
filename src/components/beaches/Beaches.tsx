import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./beaches.css";

import { slideImages } from "../../data/data";
import Button from "../button/Button";

type Props = {};

const Beaches = (props: Props) => {
  return (
    <div className="beaches__container">
      <div className="middle beaches__wrapper">
        <div className="beaches__text">
          <p className="beaches__para">East Africa</p>
          <h1 className="beaches__title">The Best <span className="beaches__title1">Beaches</span></h1>

          <p className="beaches__dest">
            Lorem ipsum dolor sit amet, consectetur adip iscing elit. Proin
            rhoncus urna dictum neque molestie ultricies mauris ac.
          </p>

          <p className="beaches__dest">
            Lorem ipsum dolor sit amet, consectetur adip iscing elit. Proin
            rhoncus urna dictum neque molestie ultricies mauris ac.
          </p>
          <h3 className="he3">
            <span className="through">900</span> 500 $ <small className="small"> / FOR PERSON</small>
          </h3>
          <Button name="Book" bg="#61BD9B" color="#FFFFFF"/>
        </div>

        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div
                style={{
                  backgroundImage: `url(${slideImage.url})`,
                  backgroundSize: "cover",
                  height: "100%",
                  backgroundPosition: "center"
                }}
              ></div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Beaches;
