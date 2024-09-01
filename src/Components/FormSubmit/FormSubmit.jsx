import React from "react";
import Select from "react-select";
import styles from "./FormSubmit.module.css";
import { useState } from "react";

function FormSubmit({ options, placeholder = "select an option" }) {
  const [selectedAnswers, setSelectedAnswers] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedAnswers(selectedOption);
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
