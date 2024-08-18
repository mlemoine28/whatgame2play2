import React from "react";
import Form from "react-bootstrap/Form";

function FormSubmit() {
  return (
    <Form.Select aria-label="Default select example">
      <option>See list of genres </option>
      <option value="1">Action-Adventure</option>
      <option value="2">RPG</option>
      <option value="3">Shooter</option>
      <option value="4">Platformer</option>
      <option value="5">Sandbox</option>
      <option value="6">Simulation</option>
      <option value="7">Fighting</option>
    </Form.Select>
  );
}

export default FormSubmit;
