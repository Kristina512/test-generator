import React from "react";
import { TextField, Grid, Button, Box } from "@material-ui/core";

const AddForm = props => {
  return (
    <div className="addForm" style={styles}>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-end"
        alignItems="center"
      >
        <Grid container item xs={12} spacing={3} justify="space-evenly">
          <TextField
            id="manufacturer-text-field"
            label="Manufacturer"
            defaultValue=""
            variant="outlined"
            name="manufacturer"
            className="textField"
          />
          <TextField
            id="model-text-field"
            label="Model"
            defaultValue=""
            variant="outlined"
            name="model"
            className="textField"
          />
        </Grid>
        <Grid container item xs={12} spacing={3} justify="space-evenly">
          <TextField
            id="fueltype-text-field"
            label="Fuel Type"
            defaultValue=""
            variant="outlined"
            name="fuelType"
            className="textField"
          />
          <TextField
            id="coupetype-text-field"
            label="Coupe Type"
            defaultValue=""
            variant="outlined"
            name="coupeType"
            className="textField"
          />
        </Grid>
        <Grid container item xs={12} spacing={3} justify="space-evenly">
          <TextField
            id="horsepower-text-field"
            label="Horse Power"
            type="number"
            defaultValue=""
            variant="outlined"
            name="horsePower"
            className="textField"
          />
          <TextField
            id="gearbox-text-field"
            label="Gear Box Type"
            defaultValue=""
            variant="outlined"
            name="gearBox"
            className="textField"
          />
        </Grid>
        <Grid container item xs={12} spacing={3} justify="space-evenly">
          <TextField
            id="color-text-field"
            label="Color"
            defaultValue=""
            variant="outlined"
            name="color"
            className="textField"
          />
          <TextField
            id="seatnumber-text-field"
            label="Number of seats"
            type="number"
            defaultValue=""
            variant="outlined"
            name="seatNumber"
            className="textField"
          />
        </Grid>
      </Grid>
      <Box m={3}>
        <Button
          size="large"
          variant="contained"
          color="primary"
          style={{ marginLeft: "15.3%", marginRight: "10px" }}
        >
          Save
        </Button>
        <Button size="large" variant="contained" color="primary">
          Clear
        </Button>
      </Box>
    </div>
  );
};

export default AddForm;
