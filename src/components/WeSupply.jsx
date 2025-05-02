import React from 'react';

import FadeInSection from "./FadeInSection";


const WeSupply  = () => {
  return(
            <>
            <section className="we-supply container">             
                <FadeInSection>
                            
                <div className="container">
                        <aside>
                                <div className="img-container">

                                </div>
                            </aside>

                            <aside className="we-text">
                                <h2>We know where to get it.</h2>
                                <p>
                                    Once you place an order with your design, 
                                    we will sourcing the merchandise, get it printed and 
                                    deliver it to you - Smooth.
                                </p>
                                <button className="btn-full"><span>Place an Order</span></button>
                            </aside>
                        </div>
                </FadeInSection>
            </section>

        </>

  )
}

export default WeSupply;