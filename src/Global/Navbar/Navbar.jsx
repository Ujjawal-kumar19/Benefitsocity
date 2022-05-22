import React, { useEffect, useState } from "react";
import "./navbar.css";
import menuItems from "./MenuItems";

const Navbar = () => {
  // useEffect(() => {
  //   document.addEventListener("scroll", function (event) {
  //     if (event.deltaY > 100) {
  //       document.getElementById("navbar").style.opacity = 0;
  //     } else {
  //       document.getElementById("navbar").style.opacity = 1;
  //     }
  //   });
  // }, []);
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar fixed-top">
      <a href="/" className="text-decoration">
        <h1 className="navbar-logo">Benefitsocity.</h1>
      </a>

      <div className="menu-icon" onClick={handleClick}>
        <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} onClick={handleClick} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
