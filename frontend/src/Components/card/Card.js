import React from "react";
import "./Card.css";
import CustomButton from "../costom-button/CustomButton";
import ProductImage from "../../assets/product.png";
// import * as classes from "./card.module.css";
import "./card2.css";

import Swal from 'sweetalert2'


const Card = ({ data, button }) => {
 
  return (
    // <div className="collection-item">
    //   <div
    //     className="image"
        // style={
        //   data?.image|| data.productImage
        //     ? {
        //         backgroundImage: `url(${data.productImage||data.image})`,
        //       }
        //     : { backgroundImage: `url(${ProductImage})` }
        // }
    //   />
    //   {/* <img src={} /> */}
    //   <div className="collection-footer">
        
    //       <span className="name"><a href={data.productUrl} target="_blank">{data.productName}    </a></span>
    
    //   </div>
    //   <div className="collection-footer">
    //     <span className="">Price: ${data.productPrice||data.price}</span>
    //   </div>
    //   {data.productRating?
    //   <div className="collection-footer">
    //     <span className="">Rating: {data.productRating}</span>
    //   </div>:<div/>}
    //   {button ? (
    //     <CustomButton onClick={() => button.clicked(data)}>
    //       {button.name}
    //     </CustomButton>
    //   ) : (
    //     <div />
    //   )}
    // </div>
    // <h1>a</h1>

<div class="a-box">
  <div class="img-container">
    <div 
    // data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000" 
    class="img-inner">
      <div class="inner-skew">
      {   data?.image|| data.productImage
             ? 
              <img src={data.productImage||data.image} />
               
            :  <img src={ProductImage} />
            
           }
        <img src={data.productImage||data.image} />
      </div>
    </div>
  </div>
  <div class="text-container">
    <div style={{display:"flex", flexDirection:"row",justifyContent:"space-between",marginTop:"10%",width:"100%",flex:1}}>
    <h3>Price: {data.productPrice||data.price}$</h3>
    <h3>Rating: {data.productRating}</h3>
    </div>
    
    <div class="btn"
    onClick={()=>
      // Swal.fire('Any fool can use a computer')
      Swal.fire({
        // title: 'Sweet!',
        text: 'Modal with a custom image.',
        text: `${data.productName} `,
        // imageUrl: 'https://unsplash.it/400/200',
        // imageWidth: 400,
        // imageHeight: 200,
        imageAlt: 'Custom image',
      })


      // Swal.fire(
      //   `Price: ${data.productPrice||data.price}$`,
      //   `${data.productName}`,
      // )
    }
    >
      Details
    </div>
    
    {/* <div style={{background:"teal",width:"50%",height:"50%",}}>
    <div id="ex1" class="modal">
  <p>Thanks for clicking. That felt good.</p>
  <a href="#" rel="modal:close">Close</a>
</div>
    </div> */}
  

{/* <p><a href="#ex1" rel="modal:open">Open Modal</a></p> */}
    <div class="btn" >
      Delete
    </div>



    {/* <div class="text" >
    {data.productName} 
  </div> */}
</div>
</div>
    
  );
};

export default Card;
