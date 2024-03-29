import React, { useEffect, useRef, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import "./Header.scss";

import logo from "../../assets/logo.png";
import logo1 from "../../assets/logo1.png";

const headerNav = [
  { display: "Home", path: "/" },
  { display: "Movies", path: "/movie" },
  { display: "TV series", path: "/tv" },
  { display: "Favourites", path: "/favourites" },
  { display: "Account", path: "/account" },
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const [shrink, setShrink] = useState(false);

  const active = headerNav.findIndex((e) => {
    return e.path === pathname;
  });

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
        setShrink(true);
      } else {
        headerRef.current.classList.remove("shrink");
        setShrink(false);
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={shrink ? logo1 : logo} alt="" />
          <Link to="/">Koko Movies</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((e, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
