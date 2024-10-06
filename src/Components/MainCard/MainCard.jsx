import React from "react";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button2 from "../Button/ButtonIntro.jsx";
import FormSubmit from "../../Components/FormSubmit/FormSubmit";
import Form from "react-bootstrap/Form";
import GamingConsoles from "../../assets/GamingConsolesPic.jpg";
import ButtonHome from "../Button/ButtonHome";
import MiniCardIntro from "../MiniCard/MiniCardIntro.jsx";
import MiniCardQuestions from "../MiniCard/MiniCardQuestions.jsx";
import styles from "../MiniCard/MiniCard.module.css";
import MiniCardDisplay from "../MiniCard/MiniCardDisplay.jsx";
import ButtonPage from "../../Components/Button/ButtonPage";
import ButtonSubmit from "../../Components/Button/ButtonSubmit.jsx";
import ButtonList from "../Button/ButtonList.jsx";

import SearchBar from "../SearchBar/SearchBar.jsx";
import { useNavigate } from "react-router-dom";

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
  const [pageNumber, setPageNumber] = useState(1);
  const [gamesCount, setGamesCount] = useState(0);

  const handleIntroButtonClick = () => {
    setShowIntroCard(false);
    setInitialQuestions(true);
  };

  const submitButtonClick = () => {
    setInitialQuestions(false);
    setDisplayPage(true);
  };

  const homeButtonClick = () => {
    setInitialQuestions(false);
    setDisplayPage(false);
    setShowIntroCard(true);
  };

  const navigate = useNavigate(); //Use this to navigate between the routes.

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

  const pageSize = 5;
  useEffect(() => {
    console.log("hello from useEffect!");
    if (selectedPlatforms.length > 0 || selectedGenres.length > 0) {
      const platformParams = selectedPlatforms
        //selectedPlatforms is from the ARRAY at the beginning (defined in the useState function).
        .map((option) => option.value)
        .join(","); //this converts everything in the array to a string
      const genreParams = selectedGenres
        .map((option) => option.value) //remember that the parameter after .map always refers to the items (or options) in the array. So doing option.value is mapping out all the VALUES (or ids) of what's in the array.
        .join(","); //So, platformParams will be a string that lists all the selected platform values, separated by commas.

      const apiURL = `https://api.rawg.io/api/games?key=${
        import.meta.env.VITE_REACT_APP_RAWG_API_KEY
      }&platforms=${platformParams}&genres=${genreParams}&page_size=${pageSize}&page=${pageNumber}&ordering=-metacritic`;
      console.log({
        apiURL,
        platformParams,
        genreParams,
      });

      const fetchData = async () => {
        try {
          const response = await fetch(apiURL);
          const data = await response.json();
          console.log(data); //you're waiting for the fetch to finish, and you're CONVERTING that fetch response into a Javascript object.
          setGames(data.results);
          setGamesCount(data.count);
        } catch (error) {
          console.error("Error fetching data:", error); //use console.error BECAUSE it shows the error in red in the log.
        }
      };
      fetchData();
    }
  }, [selectedPlatforms, selectedGenres, pageNumber]); //When one of these state variables changes, the useEffect kicks in!!

  //platforms
  useEffect(() => {
    fetchAndFormatData(
      `https://api.rawg.io/api/platforms?key=${
        import.meta.env.VITE_REACT_APP_RAWG_API_KEY
      }`,
      formatList
    ).then(setPlatformList);
  }, []);

  //genres
  useEffect(() => {
    fetchAndFormatData(
      `https://api.rawg.io/api/genres?key=${
        import.meta.env.VITE_REACT_APP_RAWG_API_KEY
      }`,
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

  // https://api.rawg.io/api/genres?key=${process.env.RAWG_API_KEY}

  return (
    <div>

      <div className={styles.container}>
        {showIntroCard && (
          <>
            <MiniCardIntro text1="Discover your next favourite game.">
              <div className={styles.titlecontainer}></div>
            </MiniCardIntro>
            <Button2
              label="Get Started"
              handleClick={handleIntroButtonClick}
            ></Button2>
          </>
        )}

        {initialQuestions && (
          <div className={styles.containerquestions}>
            {firstQuestions.map((question, i) => (
              <MiniCardQuestions
                key={question.id || i}
                text1={question.title}
                text2={question.questionText}
              >
                <FormSubmit
                  options={question.generateList}
                  selectedAnswers={question.selected}
                  handleChange={(selectedOption) =>
                    question.setSelected(selectedOption)
                  }
                ></FormSubmit>
              </MiniCardQuestions>
            ))}
            <ButtonSubmit
              label="Submit"
              handleClick={submitButtonClick}
            ></ButtonSubmit>
          </div>
        )}

        {displayPage && (
          <div className={styles.containerdisplay}>
            {games?.length > 0 ? (
              games.map((game, i) => (
                <MiniCardDisplay
                  key={i}
                  gameTitle={game.name}
                  gameRelease={game.released}
                  gameMetacritic={game.metacritic}
                  gameImage={game.background_image}
                  gameLength={game.playtime}
                  gamePlatforms={game.platforms.platform}
                ></MiniCardDisplay>
              ))
            ) : (
              <div>No games to show</div>
            )}
          </div>
        )}
        {displayPage && (
          <div>
            <ButtonPage
              disabled={pageNumber === 1 || !games}
              label="Previous Page"
              handleClick={() =>
                setPageNumber((currentPage) => currentPage - 1)
              }
              //what this means is that I am giving a function to setPageNumber. currentPage is referring to the CURRENT STATE of pageNumber. It's a built-in React thing
              //that knows that pageNumber is the ARGUMENT for currentPage. It's part of how useState works.
            ></ButtonPage>
            <ButtonPage
              label="Search Again"
              handleClick={homeButtonClick}
            ></ButtonPage>
            <ButtonPage
              disabled={
                games?.length < 5 ||
                !games ||
                gamesCount === pageSize * pageNumber
              }
              label="Next Page"
              handleClick={() =>
                setPageNumber((currentPage) => currentPage + 1)
              }
            ></ButtonPage>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainCard;
