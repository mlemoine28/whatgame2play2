import React from "react";
import { useEffect, useState } from "react";
import FormSubmit from "../../Components/FormSubmit/FormSubmit";
import styles from "../MiniCard/MiniCard.module.css";
import MiniCardDisplay from "../MiniCard/MiniCardDisplay.jsx";
import ButtonPage from "../../Components/Button/ButtonPage";
import ButtonSubmit from "../../Components/Button/ButtonSubmit.jsx";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const homeButtonClick = () => {
    navigate("/questions");
  };
  const [gamesCount, setGamesCount] = useState(0);
  const [games, setGames] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const { selectedPlatforms, selectedGenres, genreParams, platformParams } =
    location.state;
  const pageSize = 5;

  useEffect(() => {
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
  }, [selectedPlatforms, selectedGenres, pageNumber]); //When one of these state variables changes, the useEffect kicks in!!

  return (
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
          />
        ))
      ) : (
        <div>No games to show</div>
      )}

      <div>
        <ButtonPage
          disabled={pageNumber === 1 || !games}
          label="Previous Page"
          handleClick={() => setPageNumber((currentPage) => currentPage - 1)}
          //what this means is that I am giving a function to setPageNumber. currentPage is referring to the CURRENT STATE of pageNumber. It's a built-in React thing
          //that knows that pageNumber is the ARGUMENT for currentPage. It's part of how useState works.
        />
        <ButtonPage label="Search Again" handleClick={homeButtonClick} />
        <ButtonPage
          disabled={
            games?.length < 5 || !games || gamesCount === pageSize * pageNumber
          }
          label="Next Page"
          handleClick={() => setPageNumber((currentPage) => currentPage + 1)}
        />
      </div>
    </div>
  );
}

export default ResultsPage;
