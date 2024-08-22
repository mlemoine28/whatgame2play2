import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button2 from "../../Components/Button/Button2";
import FormSubmit from "../../Components/FormSubmit/FormSubmit";
import Form from "react-bootstrap/Form";

function MainCard() {
  const [showCard, setShowCard] = useState(true);
  const [firstQuestions, setFirstQuestions] = useState(true);

  const handleButtonClick = () => {
    // setShowCard(false);
    setFirstQuestions(!firstQuestions);
  };

  const genres = [
    { value: "Action-Adventure", label: "Action-Adventure" },
    { value: "RPG", label: "RPG" },
    { value: "Shooter", label: "Shooter" },
    { value: "Platformer", label: "Platformer" },
    { value: "Sandbox", label: "Sandbox" },
    { value: "Simulation", label: "Simulation" },
    { value: "Fighting", label: "Fighting" },
  ];

  const initialQuestions = [
    {
      id: 1,
      title: "Question One",
      questionText: "What genre of game are you looking to play?",
    },
    {
      id: 2,
      title: "Question Two",
      questionText: "What console are you looking to play on?",
    },
    {
      id: 3,
      title: "Question Three",
      questionText: "What metacritic score would you like to see?",
      spiderman: "peter parker",
    },
  ];

  const secondQuestions = [
    {
      title: "Question Four",
      questionText: "test again",
    },
    {
      title: "Question Five",
      questionText: "test",
    },
    {
      title: "Question Six",
      questionText: "oh my word",
    }
  ];

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      {showCard && (
        <Card
          className="bg-secondary border-success"
          style={{ maxWidth: "60rem", height: "auto" }}
        >
          <Card.Img variant="top" />
          <Card.Body className="bg-dark border border-success">
            {firstQuestions
              ? initialQuestions.map((question, i) => (
                  <div key={i}>
                    <Card.Title className="text-primary">
                      {question.title}
                    </Card.Title>
                    <Card.Text className="text-white">
                      {question.questionText}
                      <FormSubmit options={genres} placeholder="select a genre" />
                    </Card.Text>
                  </div>
                ))
              : secondQuestions.map((question, i) => (
                  <div key={i}>
                    <Card.Title className="text-primary">
                      {question.title}
                    </Card.Title>
                    <Card.Text className="text-white">
                      {question.questionText}
                    </Card.Text>
                    <FormSubmit />
                  </div>
                ))}
            <Button2 label="Submit" onClick={handleButtonClick}></Button2>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
export default MainCard;
