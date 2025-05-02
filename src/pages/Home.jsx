import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Templates from '../components/Templates';
import HowItWorks from '../components/HowItWorks'


import Pattern from '../assets/pattern.png';

const Home = () => {

    return(
        <>
        <Navbar/>
        <Hero/>
        <Templates/>
        <HowItWorks/>
    
        <section className="pattern-overlay">
            <img src={Pattern} alt="A nice puzzle" />
            <img src={Pattern} alt="A nice puzzle" />
        </section>


        </>
    )
}

export default Home;