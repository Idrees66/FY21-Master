import React from 'react'
import { Link } from "react-router-dom";
import bigEllipse from "../../../assets/svg3.png";
import "./Menu.scss"

const Menu = () => {
    return (
        <><div class="all">
            <div class="lefter">
            <Link class="linker"   to="/admin" /> 
                <div class="text">Orders</div>
            </div>
            <div class="left">
            <Link class="linker"   to="/completedorders" /> 
                <div class="text">Completed Orders</div>
            </div>
            <div class="center">
                <div class="explainer">
                    {/* <span>Dashboard</span> */}
                    {/* <img 
                    // src="https://cdn1.iconfinder.com/data/icons/basic-e-commerce/512/3-256.png" 
                    src={bigEllipse}
                    width="100" height="100" /> */}
                    </div>
                {/* <div class="text">Frontend Development</div> */}
            </div>
            
   
            <div class="right">
            <Link class="linker"  to="/reports" /> 
                <div class="text">Report & Analysis</div>
               
            </div>
          
            <div class="righter">
            <Link class="linker"  to="/messages" /> 
                <div class="text">Messages</div>
            </div>
        </div>
      
        </>
    )
}

export default Menu


