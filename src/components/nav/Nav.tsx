import { ImCancelCircle } from "react-icons/im";
import { CgDetailsMore } from "react-icons/cg";

import "./nav.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Props = {};

const Nav = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [offset] = windowOffset();

  return (
    <div className={offset > 20 ? "nav__container1" : "nav__container"}>
      <div className="middle nav__wrappeer">
        <h1>
          <Link to="/">Travel</Link>
        </h1>

        <div className={`nav__ul ${open ? "active" : " "}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        <div className="nav__icons">
          {open ? (
            <ImCancelCircle onClick={() => setOpen(false)} />
          ) : (
            <CgDetailsMore onClick={() => setOpen(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;

function windowOffset() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.scrollY);
    };
  }, []);

  return [offset];
}
