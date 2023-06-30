import React from "react";
import "./footer.css";
import fb from "../../../images/mdi_facebook.png";
import youtube from "../../../images/youtube.png";
import insta from "../../../images/instagram.png";
import twitter from "../../../images/twitter.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="polygon-shape-3"></div>
      <div className="footer-content">
        <div className="footer-head">
          <h1>We have what you're looking for</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            voluptatum aliquid consequuntur officiis facilis ab odio eius amet
            aliquam eaque eum, perferendis minima tempore accusantium!
          </p>
          <button className="btn">Get Started Now</button>
        </div>
        <div className="footer">
          <p className="footer-rights">All Right Reserved @ Copyright 2023</p>
          <div className="footer-links">
            <div className="links">
            <a href="/" className="link">
              Terms of Service
            </a>
            <a href="/" className="link">
              Privacy
            </a>
            <a href="/" className="link">
              Product
            </a>
            </div>
            
            <div className="links">
              <a href="/" className="link">
                <img src={fb} alt="facebook" />
              </a>
              <a href="/" className="link">
                <img src={youtube} alt="youtube" />
              </a>
              <a href="/" className="link">
                <img src={insta} alt="instagram" />
              </a>
              <a href="/" className="link">
                <img src={twitter} alt="twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
