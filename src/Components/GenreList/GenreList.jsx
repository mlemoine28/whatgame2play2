import React from "react";

const GenreList = () => {
  const genre = [
    "RPG",
    "Action",
    "Simulation",
    "Strategy",
    "MMORPG",
    "FPS",
    "Puzzle",
    "Platform",
  ];

  return (
    <div>
      <ul>
        {genre.map((genre, i) => (
          <li key={genre}>
            The #{i} genre I've listed is {genre}.
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
