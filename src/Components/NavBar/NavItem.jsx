import React from "react";
import styles from "./Navbar.module.css";

function NavItem({ label, handleClick }) {
 return (
   <button className={styles.NavBarButton} onClick={handleClick}>
     {label}
   </button>
 );
}

export default NavItem;
