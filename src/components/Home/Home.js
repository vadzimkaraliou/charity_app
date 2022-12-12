import React from "react";
import HomeNavHeader from "./HomeNavHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeContact from "./HomeContact";
import HomeOrganisations from "./HomeOrganisations";

const Home = () => {
  return (
    <>
      <HomeNavHeader />
      <HomeThreeColumns />
      <HomeSimpleSteps />
      <HomeAboutUs />
      <HomeOrganisations />
      <HomeContact />
    </>
  );
};

export default Home;
