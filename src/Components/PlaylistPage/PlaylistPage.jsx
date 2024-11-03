import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PlaylistPage() {
 const navigate = useNavigate();
  const handleIntroButtonClick = () => {
    navigate("/questions");
  };

}

export default PlaylistPage;