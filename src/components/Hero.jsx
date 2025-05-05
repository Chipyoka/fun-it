import React from 'react';
import FadeInSection from "./FadeInSection";

import {NavLink} from 'react-router-dom';

const Hero = () => {
    return(
        <>
          <section className="hero">
            <FadeInSection>
                <h1>Mock it. Rock it. <br />Ship it.</h1>
            </FadeInSection>
               
                <p>Your design, our merch — faster than your morning <br /> coffee brews.</p>
          
                <NavLink to="/app">
                 <button className="btn-grad">Try Fun-it for Free</button>
                </NavLink>
            </section>
        </>
    )
}

export default Hero;