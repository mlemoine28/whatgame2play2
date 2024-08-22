import React from "react";
import Select from "react-select";

const genres = [
  { value: "Action-Adventure", label: "Action-Adventure" },
  { value: "RPG", label: "RPG" },
  { value: "Shooter", label: "Shooter" },
  { value: "Platformer", label: "Platformer" },
  { value: "Sandbox", label: "Sandbox" },
  { value: "Simulation", label: "Simulation" },
  { value: "Fighting", label: "Fighting" },
];

function FormSubmit() {
  return (
    <Select
      options={genres}
      placeholder="Click to see list of genres"
      isSearchable
    ></Select>
  );
}

export default FormSubmit;
