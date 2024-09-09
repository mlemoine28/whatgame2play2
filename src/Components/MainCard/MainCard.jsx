import React from "react";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button2 from "../../Components/Button/Button2";
import FormSubmit from "../../Components/FormSubmit/FormSubmit";
import Form from "react-bootstrap/Form";
import GamingConsoles from "../../assets/GamingConsolesPic.jpg";
import styles from "./MainCard.module.css";
import ButtonHome from "../Button/ButtonHome";

function MainCard() {
  const [showIntroCard, setShowIntroCard] = useState(true);
  const [initialQuestions, setInitialQuestions] = useState(false);
  const [displayPage, setDisplayPage] = useState(false);
  const [genreList, setGenreList] = useState([]);
  const [platformList, setPlatformList] = useState([]);
  const [metacriticList, setMetacriticList] = useState([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedMetacritic, setSelectedMetacritic] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState(null);
  const [games, setGames] = useState([]);

  const handleIntroButtonClick = () => {
    setShowIntroCard(false);
    setInitialQuestions(true);
  };

  const submitButtonClick = () => {
    setInitialQuestions(false);
    setDisplayPage(true);
  };

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

  const secondQuestions = [
    {
      title: "Release Date",
      questionText: "From which decade(s) do you want your game to be from?",
      generateList: years,
    },
    {
      title: "Length",
      questionText: "How long do you want your game(s) to take you to beat?",
      generateList: gamelength,
    },
    {
      title: "Price",
      questionText: "What price are you aiming for?",
      generateList: gameprices,
    },
  ];

  //reuseable fetch function

  //Fetch Data: fetch(url) gets the data from the API.
  //Parse JSON: response.json() converts the raw response into a JavaScript object (data).
  //Log Data: console.log(data) lets you see the entire data structure in the console.
  //Format Data: formatFunction(data.results) takes the results array and processes it using your formatFunction.
  async function fetchAndFormatData(url, formatFunction) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    return formatFunction(data.results);
  }

  const formatList = (
    results //the purpose of this is so that it converts the data into an array with value and label, which is needed for use in dropdown menus!
  ) =>
    results.map((item) => ({
      value: item.id,
      label: item.name,
    }));

  useEffect(() => {
    console.log("hello from useEffect!");
    if (selectedPlatforms.length > 0 || selectedGenres.length > 0) {
      const platformParams = selectedPlatforms //selectedPlatforms is from the ARRAY at the beginning (defined in the useState function).
        .map((option) => option.value)
        .join(","); //this converts everything in the array to a string
      const genreParams = selectedGenres
        .map((option) => option.value) //remember that the parameter after .map always refers to the items (or options) in the array. So doing option.value is mapping out all the VALUES (or ids) of what's in the array.
        .join(","); //So, platformParams will be a string that lists all the selected platform values, separated by commas.

      const apiURL = `https://api.rawg.io/api/games?key=0103293563a84c6cbee68284f5e8ae4c&platforms=${platformParams}&genres=${genreParams}`;
      console.log({
        apiURL,
        platformParams,
        genreParams,
      });

      const fetchData = async () => {
        try {
          const response = await fetch(apiURL);
          const data = await response.json(); //you're waiting for the fetch to finish, and you're CONVERTING that fetch response into a Javascript object.
          setGames(data.results);
        } catch (error) {
          console.error("Error fetching data:", error); //use console.error BECAUSE it shows the error in red in the log.
        }
      };
      fetchData();
    }
  }, [selectedPlatforms, selectedGenres]);

  //platforms
  useEffect(() => {
    fetchAndFormatData(
      "https://api.rawg.io/api/platforms?key=0103293563a84c6cbee68284f5e8ae4c",
      formatList
    ).then(setPlatformList);
  }, []);

  //genres
  useEffect(() => {
    fetchAndFormatData(
      " https://api.rawg.io/api/genres?key=0103293563a84c6cbee68284f5e8ae4c",
      formatList
    ).then(setGenreList);
  }, []);

  const firstQuestions = [
    {
      id: 1,
      title: "Genre",
      questionText: "What genre(s) of game are you looking to play?",
      generateList: genreList,
      selected: selectedGenres,
      setSelected: setSelectedGenres,
    },
    {
      id: 2,
      title: "Platform",
      questionText: "What platform(s) are you looking to play on?",
      generateList: platformList,
      selected: selectedPlatforms,
      setSelected: setSelectedPlatforms,
    },
    // {
    //  id: 3,
    // title: "Metacritic",
    // questionText: "What metacritic score(s) would you like to see?",
    // generateList: metacriticList,
    // selected: selectedMetacritic,
    // setSelected: setSelectedMetacritic,
    // },
  ];

  // https://api.rawg.io/api/genres?key=0103293563a84c6cbee68284f5e8ae4c

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark ">
      {showIntroCard && (
        <Card
          className="bg-secondary border-success"
          style={{ maxWidth: "60rem", height: "auto" }}
        >
          <Card.Img className="card-img-bottom" src={GamingConsoles} />
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
              style={{ maxWidth: "60rem", height: "auto", margin: "15px" }}
            >
              <Card.Body className="bg-dark border border-success">
                <Card.Title className="text-primary ">
                  {question.title}
                </Card.Title>
                <Card.Text className="text-white">
                  {question.questionText}
                  <FormSubmit
                    className=""
                    options={question.generateList}
                    placeholder="Select an option"
                    selectedAnswers={question.selected}
                    handleChange={(selectedOption) =>
                      question.setSelected(selectedOption)
                    }
                  ></FormSubmit>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
          <Button2
            className="text-center"
            label="Submit"
            onClick={submitButtonClick}
          ></Button2>
        </div>
      )}

      {displayPage && (
        <div className={styles.maincardstyle}>
          {games.map((game, i) => (
            <Card
              key={i}
              className="bg-secondary border-success"
              style={{ maxWidth: "60rem", height: "auto", margin: "15px" }}
            >
              <Card.Body className="bg-dark border border-success">
                <Card.Title className="text-primary "></Card.Title>
                <Card.Text className="text-white">{game.name}</Card.Text>
                <Card.Text className="text-white">{game.released}</Card.Text>
                
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default MainCard;
