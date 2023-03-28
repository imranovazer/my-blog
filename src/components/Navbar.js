import React from "react";
import "../styles/Navbar.scss";
import { useSelector, useDispatch } from "react-redux";
import { LogOut } from "../redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.auth.username);

  return (
    <div className="Navbar">
      <Link to="/" className="Logo">
        Blog
      </Link>
      <div className="SearchBar">
        <input placeholder="search.."></input>
        <i className="bx bx-search"></i>
      </div>
      <div className="Options">
        <div className="settings ">
          <i className="bx bxs-cog">{}</i>
        </div>
        <div className="settings ava">
          <i className="bx bx-user"></i>
        </div>
        <div className="dropdown">
          <div className="dropDownBox">
            <span>{name}</span>
            <button onClick={() => dispatch(LogOut())}>Log out</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
