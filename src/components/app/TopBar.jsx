import React from 'react';
import Tippy from '@tippyjs/react';

const TopBar = () =>{
    return(
        <div className="topbar">
            
           <div className="container gap">
                <h1 className="logo">Fun-it</h1>
                <p className="project-name">Project Name</p>
           </div>
            <div className="btns">

                <Tippy content="Save"> 
                    <button className="a-icon-btn a-btn-outlined container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-bookmark-check" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                    </svg>
                    </button>
                </Tippy> 
                <Tippy content="Download"> 
                    <button className="a-icon-btn a-btn-outlined container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                        </svg>
                    </button>
                </Tippy> 
               

                
                <Tippy content="View Templates">
                     <button className="a-btn a-btn-outlined">Templates</button>  
                </Tippy>       
                <Tippy content="Place Order"> 
                    <button className="a-btn a-btn-full">Place Order</button>
                </Tippy>       
            </div>

        </div>
    )
}

export default TopBar;