import React from "react";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button2 from "../Button/ButtonIntro.jsx";
import FormSubmit from "../FormSubmit/FormSubmit.jsx";
import Form from "react-bootstrap/Form";
import GamingConsoles from "../../assets/GamingConsolesPic.jpg";
import ButtonHome from "../Button/ButtonHome.jsx";
import MiniCardIntro from "../Cards/MiniCardIntro.jsx";
import MiniCardQuestions from "../Cards/MiniCardQuestions.jsx";
import styles from "../Cards/MiniCard.module.css";
import MiniCardDisplay from "../Cards/MiniCardDisplay.jsx";
import ButtonPage from "../Button/ButtonPage.jsx";
import ButtonSubmit from "../Button/ButtonSubmit.jsx";
import ButtonList from "../Button/ButtonList.jsx";
import { useNavigate } from "react-router-dom";

function QuestionsPage() {
  const navigate = useNavigate();
  const [genreList, setGenreList] = useState([]);
  const [platformList, setPlatformList] = useState([]);
  const [tagList, setTagList] = useState([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [genre, setGenre] = useState("");
  const [platform, setPlatform] = useState("");

  //Use this to navigate between the routes.

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

  //tags
  useEffect(() => {
    fetchAndFormatData(
      `https://api.rawg.io/api/tags?page_size=40&key=${
        import.meta.env.VITE_REACT_APP_RAWG_API_KEY
      }`,
      formatList
    ).then(setTagList);
  }, []);

  const submitButtonClick = () => {
    if (selectedPlatforms.length > 0 && selectedGenres.length > 0) {
      const queryParams = new URLSearchParams();
      const platformParams = selectedPlatforms
        //selectedPlatforms is from the ARRAY at the beginning (defined in the useState function).
        .map((option) => option.value)
        .join(","); //this converts everything in the array to a string
      queryParams.set("platform", platformParams); // Set the platform parameter

      const genreParams = selectedGenres
        .map((option) => option.value) //remember that the parameter after .map always refers to the items (or options) in the array. So doing option.value is mapping out all the VALUES (or ids) of what's in the array.
        .join(",");
      queryParams.set("genre", genreParams); // Set the genre parameter

      //So, platformParams will be a string that lists all the selected platform values, separated by commas.

      if (selectedTags.length > 0) {
        const tagParams = selectedTags.map((option) => option.value).join(",");
        queryParams.set("tag", tagParams); // Set the tag parameter
      }
      // Navigate to /games with the query parameters
      navigate(`/games?${queryParams.toString()}`);
    }
  };

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
    {
      id: 3,
      title: "Tags (optional)",
      questionText: "What tags or features are you looking for?",
      generateList: tagList,
      selected: selectedTags,
      setSelected: setSelectedTags,
    },
  ];

  // https://api.rawg.io/api/genres?key=${process.env.RAWG_API_KEY}

  return (
    <div>
      <div className={styles.container}>
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
          <ButtonPage
            disabled={
              selectedPlatforms.length === 0 || selectedGenres.length === 0
            }
            label="Submit"
            handleClick={submitButtonClick}
          ></ButtonPage>
        </div>
      </div>
    </div>
  );
}

export default QuestionsPage;
