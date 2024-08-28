import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button2 from "../../Components/Button/Button2";
import FormSubmit from "../../Components/FormSubmit/FormSubmit";
import Form from "react-bootstrap/Form";
import GamingConsoles from "../../assets/GamingConsolesPic.jpg";
import styles from "./MainCard.module.css";

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

  const submitButtonClick2 = () => {
    setNextQuestions(false);
    setShowIntroCard(true);
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

  const years = [
    { value: "2010s", label: "2010s" },
    { value: "2000s", label: "2000s" },
    { value: "1990s", label: "1990s" },
    { value: "1980s", label: "1980s" },
    { value: "1970s", label: "1970s" },
  ];

  const gamelength = [
    { value: "≤5 hours", label: "≤5 hours" },
    { value: "5-9 hours", label: "5-9 hours" },
    { value: "10-19 hours", label: "10-19 hours" },
    { value: "20-29 hours", label: "20-29 hours" },
    { value: "30-39 hours", label: "30-39 hours" },
    { value: "40-49 hours", label: "40-49 hours" },
    { value: "50+ hours", label: "50+ hours" },
  ];

  const gameprices = [
    { value: "≤$5", label: "≤$5" },
    { value: "$6-10", label: "$6-10" },
    { value: "$11-15", label: "$11-15" },
    { value: "$16-20", label: "$16-20" },
    { value: "$21-30", label: "$21-30" },
    { value: "$31-40", label: "$31-40" },
    { value: "$41-50", label: "$41-50" },
    { value: "$51-60", label: "$51-60" },
    { value: "$61+", label: "$61+" },
  ];

  const firstQuestions = [
    {
      id: 1,
      title: "Question One",
      questionText: "What genre(s) of game are you looking to play?",
      generateList: genres,
    },
    {
      id: 2,
      title: "Question Two",
      questionText: "What console(s) are you looking to play on?",
      generateList: gamingConsole,
    },
    {
      id: 3,
      title: "Question Three",
      questionText: "What metacritic score(s) would you like to see?",
      generateList: metacritic,
    },
  ];

  const secondQuestions = [
    {
      title: "Question Four",
      questionText: "From which decade(s) do you want your game to be from?",
      generateList: years,
    },
    {
      title: "Question Five",
      questionText: "How long do you want your game(s) to take you to beat?",
      generateList: gamelength,
    },
    {
      title: "Question Six",
      questionText: "What's your budget?",
      generateList: gameprices,
    },
  ];

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark ">
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
        <div className={styles.maincardstyle}>
          {firstQuestions.map((question, i) => (
            <Card
              key={i}
              className="bg-secondary border-success"
              style={{ maxWidth: "60rem", height: "auto", margin: "50px" }}
            >
              <Card.Body className="bg-dark border border-success">
                <Card.Title className="text-primary">
                  {question.title}
                </Card.Title>
                <Card.Text className="text-white">
                  {question.questionText}
                  <FormSubmit
                    className=""
                    options={question.generateList}
                    placeholder="Select an option"
                  ></FormSubmit>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
          <Button2
            className="justify-content-md-center"
            label="Submit"
            onClick={submitButtonClick}
          ></Button2>
        </div>
      )}

      {nextQuestions && (
        <div className={styles.maincardstyle}>
          {secondQuestions.map((question, i) => (
            <Card
              key={i}
              className="bg-secondary border-success"
              style={{ maxWidth: "60rem", height: "auto", margin: "50px" }}
            >
              <Card.Body className="bg-dark border border-success">
                <Card.Title className="text-primary">
                  {question.title}
                </Card.Title>
                <Card.Text className="text-white">
                  {question.questionText}

                  <FormSubmit
                    options={question.generateList}
                    placeholder="Select an option"
                  ></FormSubmit>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
          <Button2
            className="justify-content-md-center"
            label="Submit"
            onClick={submitButtonClick2}
          ></Button2>
        </div>
      )}
    </div>
  );
}
export default MainCard;
