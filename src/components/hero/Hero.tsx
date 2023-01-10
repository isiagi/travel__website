import { BsSearch } from "react-icons/bs";

import { BiDrink } from "react-icons/bi";
import { FaTheaterMasks } from "react-icons/fa";
import { GiMountains } from "react-icons/gi";
import { HiOutlineCamera } from "react-icons/hi";

import "./hero.css";
import { Link } from "react-router-dom";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="hero__container">
      <div className="middle hero__wrapper">
        <div className="hero__head">
          <h1 className="hero__heading">Search your next <span className="hero__heading1">Holiday</span></h1>
          <p className="hero__para">CHECK OUR BEST PROMOTIONS</p>
          <div className="hero__input">
            <BsSearch className="hero__icon" />
            <input type="text" className="hero__input__element" />
          </div>
        </div>
        <div className="hero__select">
          <Link to="/category/Relax">
            <div className="hero__item">
              <BiDrink className="icon" />
              <p>Relax</p>
            </div>
          </Link>
          <Link to="/category/Cultural">
            <div className="hero__item">
              <FaTheaterMasks className="icon" />
              <p>Cultural</p>
            </div>
          </Link>
          <Link to="/category/Sports">
            <div className="hero__item">
              <GiMountains className="icon" />
              <p>Sports</p>
            </div>
          </Link>
          <Link to="/category/History">
            <div className="hero__item">
              <HiOutlineCamera className="icon" />
              <p>History</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
