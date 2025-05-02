import React from 'react';

const Navbar = () => {

    return(
        <>
        <nav>
            <div className="j">
                <h1 className="logo">Fun-it</h1>
                <ul className="nav-links container">
                    <li>Home</li>
                    <li>How it works</li>
                    <li>Templates</li>
                </ul>
            </div>
            <div className="btns">
                <button className="btn-outlined">Login</button>
                <button className="btn-full"><span>$ Support</span></button>
            </div>
           
        </nav>
        </>
    )
}

export default Navbar;