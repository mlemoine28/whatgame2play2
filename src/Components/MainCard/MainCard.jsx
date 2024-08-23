import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button2 from "../../Components/Button/Button2";
import FormSubmit from "../../Components/FormSubmit/FormSubmit";
import Form from "react-bootstrap/Form";
import GamingConsoles from "../../assets/GamingConsolesPic.jpg";

function MainCard() {
  const [showIntroCard, setShowIntroCard] = useState(true);
  const [initialQuestions, setInitialQuestions] = useState(false);
  const [nextQuestions, setNextQuestions] = useState(false);

  const handleIntroButtonClick = () => {
    setShowIntroCard(false);
    setInitialQuestions(true);
  };

  const submitButtonClick = () => {
    setInitialQuestions(false);
    setNextQuestions(true);
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

  const metacritic = [
    { value: "96-100", label: "96-100" },
    { value: "91-95", label: "91-95" },
    { value: "86-90", label: "86-90" },
    { value: "81-85", label: "81-85" },
    { value: "76-80", label: "76-80" },
    { value: "71-75", label: "71-75" },
    { value: "66-70", label: "66-70" },
    { value: "61-65", label: "61-65" },
    { value: "<=60", label: "<=60" },
  ];

  const gamingConsole = [
    { value: "Xbox Series X/S", label: "Xbox Series X/S" },
    { value: "Playstation 5", label: "Playstation 5" },
    { value: "Nintendo Switch", label: "Nintendo Switch" },
    { value: "Sega Genesis", label: "Sega Genesis" },
    { value: "Xbox 360", label: "Xbox 360" },
    { value: "Playstation 3", label: "Playstation 3" },
  ];

  const firstQuestions = [
    {
      id: 1,
      title: "Question One",
      questionText: "What genre of game are you looking to play?",
      generateList: genres,
    },
    {
      id: 2,
      title: "Question Two",
      questionText: "What console are you looking to play on?",
      generateList: gamingConsole,
    },
    {
      id: 3,
      title: "Question Three",
      questionText: "What metacritic score would you like to see?",
      generateList: metacritic,
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
    },
  ];

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      {showIntroCard && (
        <Card
          className="bg-secondary border-success"
          style={{ maxWidth: "60rem", height: "auto" }}
        >
          <Card.Img variant="top" src={GamingConsoles} />
          <Card.Body className="bg-dark border border-success">
            <Card.Title className="text-primary">Welcome!</Card.Title>
            <Card.Text className="text-white">
              Answer a few questions to find the best games for you.
            </Card.Text>
            <Button2
              label="Get Started"
              onClick={handleIntroButtonClick}
            ></Button2>
          </Card.Body>
        </Card>
      )}

      {initialQuestions && (
        <div>
          {firstQuestions.map((question, i) => (
            <Card
              key={i}
              className="bg-secondary border-success"
              style={{ maxWidth: "60rem", height: "auto" }}
            >
              <Card.Body className="bg-dark border border-success">
                <Card.Title className="text-primary">
                  {question.title}
                </Card.Title>
                <Card.Text className="text-white">
                  {question.questionText}
                  <FormSubmit
                    options={question.generateList}
                    placeholder="this is the list"
                  ></FormSubmit>
                </Card.Text>
              </Card.Body>
            </Card>
            
          ))}
          <Button2 label="Submit" onClick={submitButtonClick}></Button2>
        </div>
      )}

      {nextQuestions && (
        <div>
          {secondQuestions.map((question, i) => (
            <Card
              key={i}
              className="bg-secondary border-success"
              style={{ maxWidth: "60rem", height: "auto" }}
            >
              <Card.Body className="bg-dark border border-success">
                <Card.Title className="text-primary">
                  {question.title}
                </Card.Title>
                <Card.Text className="text-white">
                  {question.questionText}

                  <FormSubmit
                    options={question.generateList}
                    placeholder="this is the list"
                  ></FormSubmit>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
export default MainCard;
