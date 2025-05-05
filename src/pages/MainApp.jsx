import { React } from "react";

import TopBar from '../components/app/TopBar'
import ToolBar from '../components/app/ToolBar'

const MainApp = () =>{

    return(
        <>
            <TopBar/>
            <div className="canvas-space">
                <div className="container">
                    <ToolBar/>
                </div>
              
            </div>

        </>
    )

} 

export default MainApp;