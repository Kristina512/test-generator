import React from "react";
import { TextField, Grid } from "@material-ui/core";

const AddForm = props => {
  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justify="flex-end"
      alignItems="center"
    >
      <Grid item xs={5}>
        <TextField
          id="manufacturer-text-field"
          label="Manufacturer"
          defaultValue=""
          variant="outlined"
        />
      </Grid>
      <Grid item xs={5}>
        <TextField
          id="model-text-field"
          label="Model"
          defaultValue=""
          variant="outlined"
        />
      </Grid>
      <Grid item xs={5}>
        <TextField
          id="fueltype-text-field"
          label="Fuel Type"
          defaultValue=""
          variant="outlined"
        />
      </Grid>
      <Grid item xs={5}>
        <TextField
          id="coupetype-text-field"
          label="Coupe Type"
          defaultValue=""
          variant="outlined"
        />
      </Grid>
      <Grid item xs={5}>
        <TextField
          id="horsepower-text-field"
          label="Horse Power"
          type="number"
          defaultValue=""
          variant="outlined"
        />
      </Grid>
      <Grid item xs={5}>
        <TextField
          id="gearbox-text-field"
          label="Gear Box Type"
          defaultValue=""
          variant="outlined"
        />
      </Grid>
      <Grid item xs={5}>
        <TextField
          id="color-text-field"
          label="Color"
          defaultValue=""
          variant="outlined"
        />
      </Grid>
      <Grid item xs={5}>
        <TextField
          id="seatnumber-text-field"
          label="Number of seats"
          defaultValue=""
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
};

export default AddForm;
