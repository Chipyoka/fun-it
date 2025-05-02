import React from 'react';
import FadeInSection from "./FadeInSection";

const Hero = () => {
    return(
        <>
          <section className="hero">
            <FadeInSection>
                <h1>Mock it. Rock it. <br />Ship it.</h1>
            </FadeInSection>
               
                <p>Your design, our merch — faster than your morning <br /> coffee brews.</p>
                <button className="btn-grad">Try Fun-it for Free</button>
            </section>
        </>
    )
}

export default Hero;