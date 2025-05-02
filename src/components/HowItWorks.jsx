import React from 'react';


const HowItWorks = () => {

    return(
        <>
            <section className="how-it-works">
                <h2>Keep it <span>Simple</span>, Keep it <span>Fun</span></h2>
                <p>No design skills? No problem. No 3D models? Not needed.</p>
                <div className="container steps-container">
                    <div className="step">
                        <div>1</div>
                        <h3>Choose a Mockup</h3>
                        <p>“Tees, caps, cups & cases — pick your canvas, Picasso.”</p>
                    </div>

                    <div className="step">
                        <div>2</div>
                        <h3>Upload Your Design</h3>
                        <p>“Drag, drop, boom! Your art just got merch famous.”</p>
                    </div>

                    <div className="step">
                        <div>3</div>
                        <h3>Preview & Share</h3>
                        <p>“Looks so good, everyone will definitely like it.”</p>
                    </div>

                    <div className="step">
                        <div>4</div>
                        <h3>Place an Order</h3>
                        <p>“We print, source, and deliver. You sit back and slay.”</p>
                    </div>
                </div>
            </section>

        </>
    )

}

export default HowItWorks;