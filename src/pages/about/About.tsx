import Header from "../../components/header/Header";
import scrollToTop from "../../hooks/scrollToTop";

import "./about.css";

type Props = {};

const About = (props: Props) => {
  scrollToTop()
  return (
    <div>
      <Header
        headerTitle={"About"}
        bg="https://images.unsplash.com/photo-1512844417531-fd0e4fc0af27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhpc3RvcnklMjBhZnJpY2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      />
      <div className="middle about__wrapper">
        <h1 className="about__heading">About Page</h1>
      </div>
    </div>
  );
};

export default About;
