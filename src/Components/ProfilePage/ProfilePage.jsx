import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import NavItem from "../NavBar/NavItem";

function ProfilePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams(); // Assuming you have a route like /profile/:id

  const backToHomeClick = () => {
    navigate("/whatgame2play2");
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <p>User ID: {id}</p>
      <NavItem label="Back to Home" handleClick={backToHomeClick} />
    </div>
  );
}

export default ProfilePage;