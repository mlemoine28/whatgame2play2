import React from "react";

export default function MiniCardDisplay({
  gameTitle,
  gameRelease,
  gameMetacritic,
  gameImage,
  gameLength,
  gamePlatforms,
  gameAchievements,
  gameTrailers,
  gameDescription,
  gameStore,
  gamePublisher,
}) {
  // Return the JSX you want to display
  return (
    <div>
      <h2>{gameTitle || "Title not available"}</h2>
      <p>Release Date: {gameRelease || "Data not available"}</p>
      <p>Metacritic Score: {gameMetacritic || "Data not available"}</p>
      <img src={gameImage || "placeholder.jpg"} alt={gameTitle || "No Image"} />
      <p>Length: {gameLength || "Data not available"}</p>
      <p>Platforms: {gamePlatforms || "Data not available"}</p>
      <p>Achievements: {gameAchievements || "Data not available"}</p>
      <p>Description: {gameDescription || "Data not available"}</p>
      <p>Publisher: {gamePublisher || "Data not available"}</p>
      <p>Store Link: {gameStore || "No store available"}</p>
      <p>Trailer: {gameTrailers || "No trailers available"}</p>
      {/* Add any other fields similarly */}
    </div>
  );
}
