import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import NavOptions from "../navoptions/NavOptions";
import ClickAwayListener from "react-click-away-listener";
import Logout from "../../Logout";
const Navbar = ({user,setUser}) => {
  const [active, setActive] = useState(null);

  const handleClickAwayOnline = () => {
    if (active == "online") {
      setActive(null);
    }
    console.log("Maybe close the popup");
  };
  const handleClickAwayFetch = () => {
    if (active == "fetch") {
      setActive(null);
    }
    console.log("Maybe close the popup");
  };

  return (
    <div className="navbar">
      <div className="nav-Body">
        <div className="nav-text" onClick={() => setActive("online")}>
          <ClickAwayListener onClickAway={handleClickAwayOnline}>
            <span>Online Products</span>
          </ClickAwayListener>
        </div>
        <div className="nav-text" onClick={() => setActive("fetch")}>
          <ClickAwayListener onClickAway={handleClickAwayFetch}>
            <span> Fetch Products</span>
          </ClickAwayListener>
        </div>
        <NavLink
          exact
          to="/admin"
          className="nav-text"
          onClick={() => setActive(null)}
        >
          <span> ORDERS </span>
        </NavLink>

        <NavLink
          exact
          to="/completedorders"
          className="nav-text"
          onClick={() => setActive(null)}
        >
          <span> Completed Orders </span>
        </NavLink>
        <NavLink
          exact
          to="/reports"
          className="nav-text"
          onClick={() => setActive(null)}
        >
          <span> Reports & Analysis </span>
        </NavLink>
        {/* <NavLink exact to="/admins" className="nav-text" onClick={() => setActive(null)}>
        <span> Admins </span>
      </NavLink> */}
        <NavLink
          exact
          to="/messages"
          className="nav-text"
          onClick={() => setActive(null)}
        >
          <span> Messeges </span>
        </NavLink>
        <Logout user={user} setUser={setUser} />
        {active === "fetch" ? (
          <NavOptions
            name={active.toUpperCase()}
            setActive={setActive}
            link="/fetchproducts"
          />
        ) : active === "online" ? (
          <NavOptions
            name={active.toUpperCase()}
            setActive={setActive}
            link="/onlineproducts"
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Navbar;
