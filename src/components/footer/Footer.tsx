import Button from "../button/Button";
import "./footer.css";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer__container">
      <div className="middle footer__wrapper">
        <div className="footer__first">
          <div className="footer__text">
            <p>Keep In Touch</p>
            <h3>Travel With Us</h3>
          </div>
          <div className="footer__input">
            <input type="text" className="hero__input__element" />
            <Button name="Send" bg="#53BAD5" color="#FFFFFF"/>
          </div>
        </div>
        <div className="footer__last">
          <div className="last__item">
            <h3 className="footer__h3">Travel</h3>
            <p className="footer__para">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
              eligendi expedita obcaecati voluptatem, illo quia vel ipsa fugiat
              libero delectus adipisci praesentium incidunt nobis tempora illum
              similique at sunt exercitationem.
            </p>
          </div>
          <div className="last__item">
            <h3 className="footer__h3">OUR AGENCY</h3>
            <ul>
                <li>Services</li>
                <li>Insurance</li>
                <li>Tourism</li>
                <li>Payment</li>
            </ul>
          </div>
          <div className="last__item">
            <h3 className="footer__h3">PARTNERS</h3>
            <ul>
                <li>Booking</li>
                <li>Rental cars</li>
                <li>Hotel Rental</li>
                <li>Trip Guide</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
