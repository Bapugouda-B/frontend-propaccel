import React from "react";
import "./header.css";
import img1 from "../../../images/img1.png";
import img2 from "../../../images/img2.png";

export default function Header() {
  return (
    <div className="header-container">
      <div className="content">
        <div className="left-content">
          <h1>Learn how to launch a successful podcast</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo harum
            magnam maiores libero alias obcaecati? Soluta explicabo dolore
            necessitatibus tempora.
          </p>
          <button className="btn">Sign up Now</button>
        </div>
        <div className="right-content">
          <img className="img-1" src={img1} alt="image1" />
          <img className="img-2" src={img2} alt="image1" />
        </div>
      </div>
      <div className="content course-container">
        <div className="course-content">
          <div className="content-1">
            <div className="course-details">
              <h4>Interactive Features</h4>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                harum minus a delectus excepturi adipisci.
              </small>
            </div>
            <div className="course-details">
              <h4>Interactive Features</h4>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                harum minus a delectus excepturi adipisci.
              </small>
            </div>
          </div>
          <div className="content-2">
            <div className="course-details">
              <h4>Interactive Features</h4>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                harum minus a delectus excepturi adipisci.
              </small>
            </div>
            <div className="course-details">
              <h4>Interactive Features</h4>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                harum minus a delectus excepturi adipisci.
              </small>
            </div>
          </div>
        </div>
        <div className="right-content about-course">
          <h1>About the Course</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            odit voluptate ullam minima temporibus soluta hic similique
            asperiores. Enim commodi quasi hic vel, eligendi provident.
          </p>
          <button className="btn">Explore Now</button>
        </div>
      </div>
    </div>
  );
}
