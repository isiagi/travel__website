import React from "react";
import Banner from "../../components/banner/Banner";
import Beaches from "../../components/beaches/Beaches";
import Destinations from "../../components/destinations/Destinations";
import Hero from "../../components/hero/Hero";
import Package from "../../components/package/Package";
import scrollToTop from "../../hooks/scrollToTop";

type Props = {};

const HomePage = (props: Props) => {
  scrollToTop()
  return (
    <div>
      <Hero />
      <Destinations />
      <Banner />
      <Beaches />
      <Package />
    </div>
  );
};

export default HomePage;
