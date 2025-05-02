import React from 'react';

import Caps from '../assets/cap.jpg';
import Hat from '../assets/b-hat.jpg';
import Label from '../assets/label.jpg'
import Shirt from '../assets/shirt.jpg'
import Bag from '../assets/bag.jpg'
import Sticker from '../assets/sticker.jpg'

const Templates = () => {
    return(
        <>
        <section className="templates">
         <aside className="temp-text">
            <h2>Just Bring Your Art.</h2>
            <p>
                Then upload. We'll handle the flex, finesse, and 
                fulfillment. For hustlers, dreamers, event planners, and design-droppers.
            </p>
            <button className="btn-full">Try Fun-it for Free</button>
         </aside>
         <aside className="container temp-grid">
            <div className="col">
                <div><img src={Caps} alt="caps" /></div>
                <div><img src={Label} alt="caps" /></div>
                <div><img src={Sticker} alt="caps" /></div>
                <div><img src={Bag} alt="caps" /></div>
              
            </div>
            <div className="col">
                <div><img src={Shirt} alt="caps" /></div>
                <div><img src={Hat} alt="Hats" /></div>
                <div><img src={Caps} alt="caps" /></div>
                <div><img src={Shirt} alt="caps" /></div>
          
            </div>
         </aside>
        </section>
        </>
    )
}

export default Templates;