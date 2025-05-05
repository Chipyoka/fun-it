import React from 'react';
import { Link } from "react-scroll";
import {NavLink} from 'react-router-dom';

const Navbar = () => {

    return(
        <>
        <nav>
            <div className="j">
                <h1 className="logo">Fun-it</h1>
                <ul className="nav-links container">
              
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <Link
                            to="how"
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="active"
                        >
                            How It Works
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="wesupply"
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="active"
                        >
                            Order Merch
                        </Link>
                    </li>
                  
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