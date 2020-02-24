import React from "react";
import { TextField } from "@material-ui/core";

const AddForm = props => {
  return (
    <form>
      <TextField
        id="manufacturer-text-field"
        label="Manufacturer"
        defaultValue=""
        variant="outlined"
      />
    </form>
  );
};

export default AddForm;
