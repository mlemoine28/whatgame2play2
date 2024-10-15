import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function EnableScroll() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/game/")) {
      document.body.style.overflow = "auto"; // Enable scroll for DetailsPage
    } else {
      document.body.style.overflow = "hidden"; // Disable scroll for other routes
    }

    return () => {
      document.body.style.overflow = "hidden";
    };
  }, [location.pathname]); //This makes it so that after switching off this route, it reverts back to the default of overflow:hidden
}

export default EnableScroll;
