import React from "react";
import Select from "react-select";
import styles from "./FormSubmit.module.css";
import { useState } from "react";

function FormSubmit({
  options,
  placeholder = "select an option",
  selectedAnswers,
  handleChange,
}) {
  // const [selectedAnswers, setSelectedAnswers] = useState(null);

  // const handleChange = (selectedOption) => {
  //   setSelectedAnswers(selectedOption); //this is updating the state. When you select an option, onChange occurs in the <select>. OnChange triggers handleChange! The way <select> works, the selected option is passed as an argument to HandleChange.
  // };

  // console.log(selectedAnswers)

  return (
    <div className={styles.formstyle}>
      <Select
  value={selectedAnswers}
  onChange={handleChange}
  options={options}
  placeholder={placeholder}
  isSearchable
  isMulti={true}
  styles={{
    control: (base) => ({
      ...base,
      backgroundColor: "#345", // Dark background for the select box
      color: "blue", // Text color
      borderColor: "#555", // Border color
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#345", // Dark background for the options menu
      color: "white",
    }),
    singleValue: (base) => ({
      ...base,
      color: "green", // Selected option color
    }),

    multiValue: (base) => ({
      ...base,
      backgroundColor: "green", // Dark background for selected items
      color: "white",
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: "white", // Text color for selected item labels
    }),
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      backgroundColor: isSelected ? "green" : isFocused ? "green" : "#345",
      color: "white",
      "&:hover": {
        backgroundColor: "green",
      },
    }),
    placeholder: (base) => ({
      ...base,
      color: "grey", // Lighter color for placeholder text
    }),
  }}
/>
    </div>
  );
}

export default FormSubmit;
