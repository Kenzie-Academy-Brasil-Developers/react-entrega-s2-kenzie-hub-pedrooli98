import React from "react";
import Bio from "../../components/Bio";
import Header from "../../components/Header";
import TechList from "../../components/TechList";
import Typography from "../../styles/typography";


const Home = () => {
  return (
    <main>
      <Header/>
      <Bio
        name="Pedro"
        bio="poxxxa"
      />
      <TechList/>
    </main>
  )
}
export default Home