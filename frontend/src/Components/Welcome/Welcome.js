import React from "react";
import bigEllipse from "../../assets/svg3.png";
import svg5 from "../../assets/svg5.png";
import Menu from "./Menu/Menu.jsx";
import classes from "./welcome.module.css"

const Welcome = () => {
  return (
    // <div  className={classes.back}>
    <div className={classes.outerContainer} style={{ height: "90vh", width: "100%", padding: "15px" }}>
      <h1
        // style={{
        //   height: "50vh",
        //   width: "100%",
        //   fontWeight: "bold",
        //   textAlign: "center",
        //   color: "white",
        // }}
        data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2000" 
      >
        Welcome to 15 Bucks
      </h1>
<br/><br/><br/>
      <Menu />

      {/* <section class={classes.FlexContainer}>
            <div>
              Order
            </div>
            <div>
              Completed Orders
            </div>
            <div>
            Messages
            </div>
            <div>
            Reports & Analysis
            </div>
        </section> */}



                <img className={classes.svg2}  
                 data-aos="fade-left" data-aos-easing="linear" data-aos-duration="2000" 
                    src={bigEllipse} alt="Ellipse" />
                    {/* <img className={classes.svg5}  
                    src={svg5} alt="Ellipse" /> */}
           
    </div>
    // </div>
  );
};

export default Welcome;
