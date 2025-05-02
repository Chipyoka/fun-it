import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Templates from '../components/Templates';
import HowItWorks from '../components/HowItWorks';
import WeSupply from '../components/WeSupply';
import Footer from '../components/Footer';

import {Element } from "react-scroll";
import ScrollToTopButton from "../components/ScrollToTop";



import Pattern from '../assets/pattern.png';

const Home = () => {

    return(
        <>
        <Navbar/>
       

        <Element name="hero">
            <Hero/>
        </Element>
     
        <section className="pattern-overlay">
            <img src={Pattern} alt="A nice puzzle" />
            <img src={Pattern} alt="A nice puzzle" />
        </section>

        <Element name="temp">
            <Templates/>
        </Element>


        <Element name="how">
            <HowItWorks/>
        </Element>

        <Element name="wesupply">
            <WeSupply/>
        </Element>

    
      
        <section className="pattern-overlay">
            <img src={Pattern} alt="A nice puzzle" />
            <img src={Pattern} alt="A nice puzzle" />
        </section>
        <Footer/>
        
        <ScrollToTopButton />

        </>
    )
}

export default Home;