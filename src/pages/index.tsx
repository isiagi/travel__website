import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import About from "./about/About";
import Category from "./category/Category";
import HomePage from "./homepage/HomePage";

type Props = {};

const Index = (props: Props) => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/category/:id" element={<Category />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Index;
