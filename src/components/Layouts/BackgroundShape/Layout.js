import React from "react";
import "./shapes.css";
import NavBar from "../Pages/Navbar/NavBar.js";
import Header from "../Pages/Header/Header.js";
import Ellipse from "./Ellipse/Ellipse.js";
import png from "../../images/pngwing.png";
import mic from "../../images/mic.png";
import icon from "../../images/img3.png";

export default function Layout() {
  return (
    <div className="page-container">
      <Ellipse />
      <div className="circle-shape"></div>
      <div className="polygon-shape-1"></div>
      <div className="polygon-shape-2"></div>
      <img className="pngwing" src={png} alt="png" />
      <img className="mic" src={mic} alt="mic" />
      <img className="icon" src={icon} alt="Icon" />

      <NavBar />
      <Header />
    </div>
  );
}
