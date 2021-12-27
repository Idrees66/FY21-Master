import React from "react";
import Card from "../../Components/card/Card";
import moment from "moment";
import "./OrdorCard.css";
import ProductImage from "../../assets/product.png";

const OrdorCard = ({ order, deleteOrder }) => {
  return (
    <div className="ordorCard">
      <div className="body">
     
        <div 
        // data-aos="fade-right" data-aos-duration={2000} 
        className="details">
          <div className="detail">
            <div className="name">Order ID:</div>
            <div className="value">{order._id}</div>
          </div>
          <div className="detail">
            <div className="name">UserID :</div>
            <div className="value">{order.userId}</div>
          </div>
          <div className="detail">
            <div className="name">Order By:</div>
            <div className="value">{order.userName.toUpperCase()}</div>
          </div>
          <div className="detail">
            <div className="name">Ordered On:</div>
            <div className="value">{moment(order.createdAt).fromNow()}</div>
          </div>
          <div className="detail">
            <div className="name">Delivery Address:</div>
            <div className="value">{order.address}</div>
          </div>
        </div>{deleteOrder?
        <div className="orderimage">
        <button onClick={() => deleteOrder(order._id)}>Order Completed</button>
        </div>
          :<div/>}
      </div>
      <div className="products">
        {order.products?.map((product) => (
          <Card   key={product.key} data={product} />
        ))}
      </div>
      
    </div>
  );
};

export default OrdorCard;
