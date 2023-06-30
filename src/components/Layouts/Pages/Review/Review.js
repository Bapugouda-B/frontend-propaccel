import React from "react";
import "./review.css";
import { BsStarFill } from "react-icons/bs";
import myimg from "../../../images/myimage.jpg";
// BsArrowRightCircleFill
export default function Review() {
  return (
    <div className="review-container">
      <div className="review-header">
      <h1>Review from customers</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam omnis
        cum maiores magni.
        
      </p>
      </div>
      
      <div className="review-card-container">
        <div className="review-card">
          <div className="customer-name">
            <img src={myimg} alt="" />
            <div className="name">
              <h4>Lolla Smith</h4>
              <p>Microsoft</p>
              <BsStarFill className="star"/>
            </div>
          </div>
          <div className="review-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            omnis cum maiores magni, a amet suscipit saepe tempora temporibus
            consectetur nesciunt.
          </div>
        </div>
        <div className="review-card">
          <div className="customer-name">
            <img src={myimg} alt="" />
            <div className="name"> 
              <h4>Lolla Smith</h4>
              <p>Microsoft</p>
              <BsStarFill className="star" />
            </div>
          </div>
          <div className="review-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            omnis cum maiores magni, a amet suscipit saepe tempora temporibus
            consectetur nesciunt.
          </div>
        </div>
        <div className="review-card">
          <div className="customer-name">
            <img src={myimg} alt="" />
            <div className="name">
              <h4>Lolla Smith</h4>
              <p>Microsoft</p>
              <BsStarFill className="star" />
            </div>
          </div>
          <div className="review-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            omnis cum maiores magni, a amet suscipit saepe tempora temporibus
            consectetur nesciunt.
          </div>
        </div>
      </div>
    </div>
  );
}
