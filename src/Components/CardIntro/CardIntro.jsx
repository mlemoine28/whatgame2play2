import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import GamingConsoles from "../../assets/GamingConsolesPic.jpg";
import styles from "./custom-card.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CardIntro() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <Card
        className="bg-secondary border-success"
        style={{ maxWidth: "60rem", height: "auto" }}
      >
        <Card.Img variant="top" src={GamingConsoles} />
        <Card.Body className="bg-dark border border-success">
          <Card.Title className="text-primary">Welcome!</Card.Title>
          <Card.Text className="text-white">
            Let's find a game for you to play.
          </Card.Text>
          <Button variant="primary">Let's Get Started</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardIntro;
