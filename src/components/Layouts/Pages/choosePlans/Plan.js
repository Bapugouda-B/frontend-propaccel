import React from "react";
import "./plan.css";
import line1 from "../../../images/Line 1.png"
import line2 from "../../../images/Line 2.png"
import line3 from "../../../images/Line 3.png"

export default function Plan() {
  return (
    <div className="service-container">
      <div className="podcast">Podcast</div>
      <img className="line-1" src={line1} alt="line-1" />
      <img className="line-2" src={line2} alt="line-2" />
      <img className="line-3" src={line3} alt="line-3" />
    <div className="plans-container">
      <div className="plans-header">
        <h1>Choose your plan</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ut
          praesentium esse vitae quis, explicabo magnam.
        </p>
      </div>
      <div className="plans-content">
        <div className="monthly-yearly">
          <span className="plan-type">monthly</span>
          <span>yearly</span>
        </div>
        <div className="plans-details-container">
          <div className="plan-card">
            <h3>Basic Plan</h3>
            <small>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
              facere nihil.
            </small>
            <div className="plan-cost ">
              <span className="cost">$54</span>
              <span>/month</span>
            </div>
            <ul>
              <li>Free access to video class</li>
              <li>Free access to video class</li>
              <li>Free access to video class</li>
            </ul>
            <button className="plan-btn">Start Free Trial</button>
          </div>
          <div className="plan-card premium">
            <h3>Premium Plan</h3>
            <small>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
              facere nihil.
            </small>
            <div className="plan-cost premium-cost">
              <span className="cost">$54</span>
              <span>/month</span>
            </div>
            <ul>
              <li>Free access to video class</li>
              <li>Free access to video class</li>
              <li>Free access to video class</li>
            </ul>
            <button className="plan-btn">Start Free Trial</button>
          </div>
          <div className="plan-card">
            <h3>Basic Plan</h3>
            <small>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
              facere nihil.
            </small>
            <div className="plan-cost">
              <span className="cost">$54</span>
              <span>/month</span>
            </div>
            <ul>
              <li>Free access to video class</li>
              <li>Free access to video class</li>
              <li>Free access to video class</li>
            </ul>
            <button className="plan-btn">Start Free Trial</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
