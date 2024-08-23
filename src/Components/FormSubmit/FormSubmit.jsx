import React from "react";
import Select from "react-select";
import styles from "./FormSubmit.module.css"

function FormSubmit({ options, placeholder = "select an option" }) {
  return (
    <div className={styles.formstyle}>
  
    <Select options={options} placeholder={placeholder} isSearchable></Select>
  </div>
  );
}

export default FormSubmit;
