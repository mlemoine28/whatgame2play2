import React from "react";
import Select from "react-select";

function FormSubmit({ options, placeholder = "select an option" }) {
  return (
  
    <Select className="bg-primary .text-danger" options={options} placeholder={placeholder} isSearchable></Select>
  
  );
}

export default FormSubmit;
