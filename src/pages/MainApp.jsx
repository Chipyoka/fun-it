import { React, useState } from "react";

import TopBar from '../components/app/TopBar'
import ToolBar from '../components/app/ToolBar'
import Tippy from '@tippyjs/react'

import shirtMock from '../assets/mocks/shirt_mockup_2.png';

const MainApp = () =>{

    const [isLoaded, setIsLoaded] = useState( true);

    const handleAlert = () =>{
        alert("Button Clicked");
        setIsLoaded(false);
    }

    return(
        <>
            <TopBar/>
            <div className="canvas-space container">
                <div className="container">
                    <ToolBar/>
                </div>
                <div className="space container">
                    <aside className="design-space">
                        {
                            isLoaded && (
                                <div className="overlay container">
                                    <div className="nod-message">

                                        <p>Upload a design to get started.</p>
                                     
                                        <Tippy content="Upload a design">
                                            <button
                                                onClick = {() => {handleAlert()}}                                        
                                                className="a-btn a-btn-full"
                                            >
                                                + Upload Design
                                            </button>
                                        </Tippy>
                                    </div>
                                </div>
                            )
                        }

                      
                       
                        
                    </aside>
                    <aside
                    className="preview-space">
                        <div className="info">
                            <p>Shirt Mockup</p>
                             

                            <Tippy content="Preview of you design.">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                                </svg>
                            </Tippy>
                        </div>
                    
                        <div className=" hg container">
                            <div>

                                <div className="mockup">
                                  
                                        <img src={shirtMock} alt="Your design mockupp" width="250px"/>
                                   
                                </div>
                             
                            </div>
                            <div className="design-frame">
                                <h1 class="test-design">Your <br/> Design</h1>
                            </div>
                            
                        </div>

                    </aside>
                </div>
              
            </div>

        </>
    )

} 

export default MainApp;