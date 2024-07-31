import React from "react";
import michaelPic from "../../assets/michaelpic.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={michaelPic} alt="profile pic"></img>
      <h2 className="card-title">Michael</h2>
      <p className="card-text">I'm a teacher, learning to code!</p>
    </div>
  );
}

export default Card;
