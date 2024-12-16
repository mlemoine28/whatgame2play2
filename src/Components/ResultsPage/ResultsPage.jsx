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
import { usePlaylist } from "../../assets/Contexts/PlaylistContext.jsx";

function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const homeButtonClick = () => {
    navigate("/questions");
  };

  const [gamesCount, setGamesCount] = useState(0);
  const [games, setGames] = useState([]);

  const [loading, setLoading] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [clicked, setClicked] = useState(false);
  const { playlistButtonClick } = usePlaylist();

  const queryParams = new URLSearchParams(location.search);

  const platformParams = queryParams.get("platform");
  const genreParams = queryParams.get("genre");
  const tagParams = queryParams.get("tag");
  const pageParams = queryParams.get("page");

  const [pageNumber, setPageNumber] = useState(
    () => parseInt(pageParams, 10) || 1
  );

  const pageSize = 5;

  useEffect(() => {
    let apiURL;
    if (tagParams) {
      apiURL = `https://api.rawg.io/api/games?key=${
        import.meta.env.VITE_REACT_APP_RAWG_API_KEY
      }&platforms=${platformParams}&genres=${genreParams}&tags=${tagParams}&page_size=${pageSize}&page=${pageNumber}&ordering=-metacritic`;
      console.log({
        apiURL,
        platformParams,
        genreParams,
        tagParams,
      });
    } else {
      apiURL = `https://api.rawg.io/api/games?key=${
        import.meta.env.VITE_REACT_APP_RAWG_API_KEY
      }&platforms=${platformParams}&genres=${genreParams}&page_size=${pageSize}&page=${pageNumber}&ordering=-metacritic`;
      console.log({
        apiURL,
        platformParams,
        genreParams,
      });
    }

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
  }, [platformParams, genreParams, tagParams, pageParams]); //When one of these state variables changes, the useEffect kicks in!!

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const pageParams = queryParams.get("page");
    if (pageParams) {
      setPageNumber(parseInt(pageParams, 10));
    } else {
      setPageNumber(1); // Default to page 1 if no parameter exists
    }
  }, [location.search]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("page", pageNumber);
    navigate(`${location.pathname}?${queryParams.toString()}`, {
      replace: true,
    });
  }, [pageNumber, location.pathname, navigate]);

  const handleMoreDetails = (game) => {
    console.log("More Details button clicked for game:", game);
    navigate(`/game/${game.id}`, { state: { game } });
  };

  const totalPages = Math.ceil(gamesCount / pageSize);
  const maxDisplayedPages = 25;

  return (
    <div>
      <div className={styles.pagination}>
        {loading
          ? null
          : (() => {
              let items = [];

              items.push(
                <Pagination.Item
                  key={1}
                  active={pageNumber === 1}
                  onClick={() => setPageNumber(1)}
                >
                  1
                </Pagination.Item>
              );

              const pagesToShow = Math.min(
                totalPages - 2,
                maxDisplayedPages - 2
              );

              for (let page = 2; page <= totalPages - 1; page++) {
                if (items.length < pagesToShow + 2) {
                  items.push(
                    <Pagination.Item
                      key={page}
                      active={page === pageNumber}
                      onClick={() => setPageNumber(page)}
                    >
                      {page}
                    </Pagination.Item>
                  );
                }
              }

              return (
                <div>
                  <Pagination data-bs-theme="dark">{items}</Pagination>
                </div>
              );
            })()}
      </div>

      <div className={styles.containerdisplay} style={{ paddingTop: "3rem" }}>
        <div className={styles.containerdisplay} style={{ paddingTop: "0rem" }}>
          {loading ? (
            <div className={styles.bottomContainer}>
              <Spinner animation="border" role="status" variant="info">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : games?.length > 0 ? (
            games.map((game, i) => (
              <div key={i}>
                <MiniCardDisplay
                  detailedGame={game}
                  handleMoreDetails={() => handleMoreDetails(game)}
                />
              </div>
            ))
          ) : (
            <div>No games to show</div>
          )}

          <br />
        </div>
      </div>
      <div className={styles.buttoncontainer}>
        {loading ? null : (
          <div className={styles.buttoncontainer}>
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
              disabled={pageNumber === 25 || !games}
              label="Next Page"
              handleClick={() =>
                setPageNumber((currentPage) => currentPage + 1)
              }
            />
          </div>
        )}
      </div>
      <div className={styles.resultsBottom}></div>
    </div>
  );
}

export default ResultsPage;
