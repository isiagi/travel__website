import "./header.css";

type Props = {
  headerTitle?: string;
  bg?: string;
};

const Header = ({ headerTitle, bg }: Props) => {
  return (
    <div
      className="header__container"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`,
        backgroundSize: "cover",
        minHeight: "60vh",
        backgroundPosition: "center",
      }}
    >
      <div className="middle header__wrapper">
        <h1>{headerTitle}</h1>
      </div>
    </div>
  );
};

export default Header;
