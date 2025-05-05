import React from 'react';

import {NavLink} from 'react-router-dom';


const Login = () =>{
    return(
        <>
        <div>
            <p>From Login !</p>

            <NavLink to="/">
                <button>Home</button>
            </NavLink>
        </div>
        </>
    )
}
export default Login;