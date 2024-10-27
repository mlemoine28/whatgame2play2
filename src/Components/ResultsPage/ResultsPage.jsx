import React from "react";
import { useEffect, useState } from "react";
import FormSubmit from "../../Components/FormSubmit/FormSubmit";
import styles from "../Cards/MiniCard.module.css";
import MiniCardDisplay from "../Cards/MiniCardDisplay.jsx";
import ButtonPage from "../../Components/Button/ButtonPage";
import ButtonSubmit from "../../Components/Button/ButtonSubmit.jsx";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ButtonDetails from "../Button/ButtonDetails.jsx";
import ButtonList from "../Button/ButtonList.jsx";
import { Spinner } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";

function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const homeButtonClick = () => {
    navigate("/questions");
  };
  const [gamesCount, setGamesCount] = useState(0);
  const [games, setGames] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  const {
    selectedPlatforms,
    selectedGenres,
    genreParams,
    platformParams,
    tagParams,
  } = location.state;
  const pageSize = 5;

  useEffect(() => {
    const apiURL = `https://api.rawg.io/api/games?key=${
      import.meta.env.VITE_REACT_APP_RAWG_API_KEY
    }&platforms=${platformParams}&genres=${genreParams}&tags=${tagParams}&page_size=${pageSize}&page=${pageNumber}&ordering=-metacritic`;
    console.log({
      apiURL,
      platformParams,
      genreParams,
      tagParams,
    });

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data); //you're waiting for the fetch to finish, and you're CONVERTING that fetch response into a Javascript object.
        setGames(data.results);
        setGamesCount(data.count);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error); //use console.error BECAUSE it shows the error in red in the log.
      }
    };
    fetchData();
  }, [selectedPlatforms, selectedGenres, pageNumber]); //When one of these state variables changes, the useEffect kicks in!!

  const handleMoreDetails = (game) => {
    console.log("More Details button clicked for game:", game);
    navigate(`/game/${game.id}`, { state: { game } });
  };
  return (
    <div className={styles.containerdisplay}>
      {loading ? (
        <div>
          <Spinner animation="border" role="status" variant="info">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : games?.length > 0 ? (
        games.map((game, i) => (
          <div key={i}>
            <MiniCardDisplay
              gameTitle={game.name}
              gameRelease={game.released}
              gameMetacritic={game.metacritic}
              gameImage={game.background_image}
              gameLength={game.playtime}
              handleMoreDetails={() => handleMoreDetails(game)}
            />
          </div>
        ))
      ) : (
        <div>No games to show</div>
      )}
      <Pagination>
        <Pagination.First onClick={() => setPageNumber(1)} />
        <Pagination.Prev
          onClick={() => setPageNumber((currentPage) => currentPage - 1)}
        />
        <Pagination.Item onClick={() => setPageNumber(1)}>{1}</Pagination.Item>
        <Pagination.Item onClick={() => setPageNumber(2)}>{2}</Pagination.Item>
        <Pagination.Item onClick={() => setPageNumber(3)}>{3}</Pagination.Item>
        <Pagination.Item onClick={() => setPageNumber(4)}>{4}</Pagination.Item>
        <Pagination.Item onClick={() => setPageNumber(5)}>{5}</Pagination.Item>
        <Pagination.Item onClick={() => setPageNumber(6)}>{6}</Pagination.Item>
        <Pagination.Item onClick={() => setPageNumber(7)}>{7}</Pagination.Item>
        <Pagination.Item onClick={() => setPageNumber(8)}>{8}</Pagination.Item>
        <Pagination.Item onClick={() => setPageNumber(9)}>{9}</Pagination.Item>
        <Pagination.Item onClick={() => setPageNumber(10)}>
          {10}
        </Pagination.Item>
        <Pagination.Item onClick={() => setPageNumber(11)}>
          {11}
        </Pagination.Item>
        <Pagination.Item onClick={() => setPageNumber(12)}>
          {12}
        </Pagination.Item>
        <Pagination.Item onClick={() => setPageNumber(13)}>
          {13}
        </Pagination.Item>
        <Pagination.Item onClick={() => setPageNumber(14)}>
          {14}
        </Pagination.Item>
        <Pagination.Item onClick={() => setPageNumber(15)}>
          {15}
        </Pagination.Item>

        <Pagination.Next
          onClick={() => setPageNumber((currentPage) => currentPage + 1)}
        />
        <Pagination.Last />
      </Pagination>
      <br />

      <div className={styles.buttoncontainer}>
        {loading ? null : (
          <div>
            <ButtonPage
              disabled={pageNumber === 1 || !games}
              label="Previous Page"
              handleClick={() =>
                setPageNumber((currentPage) => currentPage - 1)
              }
              //what this means is that I am giving a function to setPageNumber. currentPage is referring to the CURRENT STATE of pageNumber. It's a built-in React thing
              //that knows that pageNumber is the ARGUMENT for currentPage. It's part of how useState works.
            />
            <ButtonPage label="Search Again" handleClick={homeButtonClick} />
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
            />
          </div>
        )}
      </div>

      <div className={styles.bottomContainer}></div>
    </div>
  );
}

export default ResultsPage;
