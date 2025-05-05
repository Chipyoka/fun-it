import React from 'react';

import FadeInSection from "./FadeInSection";
import We from '../assets/we-supply.jpg';

import {NavLink} from 'react-router-dom';

const WeSupply  = () => {
  return(
            <>
            <section className="we-supply container">             
                <FadeInSection>
                            
                <div className="container">
                        <aside>
                                <div className="img-container">
                                    <img src={We} alt="" />

                                </div>
                            </aside>

                            <aside className="we-text">
                                <h2>We know where to get it.</h2>
                                <p>
                                    Once you create a mockup, place an order with your design.
                                    We will source the merchandise, get it printed and 
                                    deliver it to you - Smooth.
                                </p>
                               
                                <NavLink to="/order">

                                    <button className="btn-full"><span>Place an Order</span></button>
                                </NavLink>
                            </aside>
                        </div>
                </FadeInSection>
            </section>

        </>

  )
}

export default WeSupply;