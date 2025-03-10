import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Section from "../components/Section";
import Footer from "../Components/Footer";



const Home = () => {

const[darkMode,setDarkMode] = useState(false)

  return (
    <>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Section darkMode={darkMode} />
        <Footer darkMode={darkMode}/>

    </>
  );
};

export default Home;