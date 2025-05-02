import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Templates from '../components/Templates';
import HowItWorks from '../components/HowItWorks';
import WeSupply from '../components/WeSupply';
import Footer from '../components/Footer';


import Pattern from '../assets/pattern.png';

const Home = () => {

    return(
        <>
        <Navbar/>
        <Hero/>
     
        <section className="pattern-overlay">
            <img src={Pattern} alt="A nice puzzle" />
            <img src={Pattern} alt="A nice puzzle" />
        </section>


        <Templates/>
        <HowItWorks/>
        <WeSupply/>
        <section className="pattern-overlay">
            <img src={Pattern} alt="A nice puzzle" />
            <img src={Pattern} alt="A nice puzzle" />
        </section>
        <Footer/>

        </>
    )
}

export default Home;