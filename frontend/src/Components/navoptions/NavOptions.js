import React from "react";
import { Link } from "react-router-dom";
import "./NavOptions.css"
const NavOptions = ({ link,name ,setActive}) => {
  return (
    <div className="options">
      <Link className="name" to={`${link}/mens-clothing`} onClick={()=>setActive(null)}>
        <div >{name} Mens Clothing</div>
      </Link>
      <Link className="name" to={`${link}/womens-clothing`}  onClick={()=>setActive(null)}>
        <div >{name} Womens Clothing</div>
      </Link>
      <Link className="name" to={`${link}/phone-telecommunication`}  onClick={()=>setActive(null)}>
        <div >{name} phone-telecommunication </div>
      </Link>
      <Link className="name" to={`${link}/computer-office`} onClick={()=>setActive(null)}>
        <div >{name} computer-office</div>
      </Link>
      <Link className="name" to={`${link}/consumer-electronics`} onClick={()=>setActive(null)}>
        <div >{name} consumer-electronics</div>
      </Link>
      <Link className="name" to={`${link}/home`} onClick={()=>setActive(null)}>
        <div >{name} home</div>
      </Link>
      <Link className="name" to={`${link}/toys-kids`} onClick={()=>setActive(null)}>
        <div >{name} toys-kids</div>
      </Link>
      <Link className="name" to={`${link}/bags-luggage`} onClick={()=>setActive(null)}>
        <div >{name} bags-luggage</div>
      </Link>
      <Link className="name" to={`${link}/beauty-health`} onClick={()=>setActive(null)}>
        <div >{name} beauty-health</div>
      </Link>
      <Link className="name" to={`${link}/outdoor-sports`} onClick={()=>setActive(null)}>
        <div >{name} outdoor-sports</div>
      </Link>
      <Link className="name" to={`${link}/watches`} onClick={()=>setActive(null)}>
        <div >{name} watches</div>
      </Link>
    </div>
  );
};

export default NavOptions;
