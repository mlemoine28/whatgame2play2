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
  menuPortalTarget={document.body} // ← this is key
  styles={{
    control: (base) => ({
      ...base,
      backgroundColor: "#345",
      color: "blue",
      borderColor: "#555",
      zIndex: 2, // This can help but the portal is the key
    }),
    menuPortal: (base) => ({
      ...base,
      zIndex: 9999, // ← this is what ensures it overlays everything
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#345",
      color: "white",
    }),
    singleValue: (base) => ({
      ...base,
      color: "green",
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: "green",
      color: "white",
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: "white",
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
      color: "grey",
    }),
  }}
/>
    </div>
  );
}

export default FormSubmit;
