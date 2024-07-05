import { Fragment, useEffect } from "react";
import { useState } from "react";
import "./Navigation.css";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  const [authUser, setAuthUser] = useState(null);

  return (
    <Fragment>
      <div className="navbar">
        <div className="logo"></div>
        <ul>
          <li>
            <Link to="/">
              <span className="link-text">HOME</span>
            </Link>
          </li>

          <li>
            <Link to="/trending">
              <span className="link-text">TRENDING</span>
            </Link>
          </li>
          <li>
            <Link to="/all-product">
              <span className="link-text">ALL PRODUCT </span>
            </Link>
          </li>
          <li>
            <Link to="/shopping-cart">
              <span className="link-text">CART </span>
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
