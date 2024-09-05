import React from "react";
import Select from "react-select";
import styles from "./FormSubmit.module.css";
import { useState } from "react";

function FormSubmit({ options, placeholder = "select an option" }) {
  const [selectedAnswers, setSelectedAnswers] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedAnswers(selectedOption); //this is updating the state. When you select an option, onChange occurs in the <select>. OnChange triggers handleChange! The way <select> works, the selected option is passed as an argument to HandleChange.
  };

  return (
    <div className={styles.formstyle}>
      <Select
        value={selectedAnswers}
        onChange={handleChange}
        options={options}
        placeholder={placeholder}
        isSearchable
        isMulti={true}
      ></Select>
    </div>
  );
}

export default FormSubmit;
