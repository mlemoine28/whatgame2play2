import React from "react";

const GameList = () => {
  const games = ["Witcher", "Halo", "Uncharted", "Warcraft"];

  return (
    <div>
      <ul>
        {games.map((game, i) => (
          <li key={game}>
            The #{i} game I've listed is {game}.
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
