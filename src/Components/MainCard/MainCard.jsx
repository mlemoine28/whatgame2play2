import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button2 from "../../Components/Button/Button2";
import FormSubmit from "../../Components/FormSubmit/FormSubmit";
import Form from "react-bootstrap/Form";

function MainCard() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <Card
        className="bg-secondary border-success"
        style={{ maxWidth: "60rem", height: "auto" }}
      >
        <Card.Img variant="top" />
        <Card.Body className="bg-dark border border-success">
          <Card.Title className="text-primary">Question One</Card.Title>
          <Card.Text className="text-white">
            What genre of game are you looking to play?
          </Card.Text>
          <FormSubmit />
        </Card.Body>
      </Card>
    </div>
  );
}
export default MainCard;
