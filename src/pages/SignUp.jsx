import React from 'react';

import {NavLink} from 'react-router-dom';


const SignUp = () =>{
    return(
        <>
        <div>
            <p>From Sign Up !</p>

            <NavLink to="/">
                <button>Home</button>
            </NavLink>
        </div>
        </>
    )
}
export default SignUp;