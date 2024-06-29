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
            <span className="link-text">Popular</span>
          </li>

          <li>
            <span className="link-text">Fun Facts</span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Navigation;
