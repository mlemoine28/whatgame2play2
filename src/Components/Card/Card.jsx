import React from "react";
import michaelPic from "../../assets/michaelpic.jpg";

function Card() {
  return (
    <div className="card">
      <img src={michaelPic} alt="profile pic"></img>
      <h2>Michael</h2>
      <p>I'm a teacher, learning to code!</p>
    </div>
  );
}

export default Card;
