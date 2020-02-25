import React from "react";
import { TextField, Grid, Button } from "@material-ui/core";

// TO-DO fix inline styles
const textFieldStyle = {
  margin: "4px 0px"
};

const AddForm = props => {
  return (
    <div>
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
            style={textFieldStyle}
          />
          <TextField
            id="model-text-field"
            label="Model"
            defaultValue=""
            variant="outlined"
            name="model"
            className="textField"
            style={textFieldStyle}
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
            style={textFieldStyle}
          />
          <TextField
            id="coupetype-text-field"
            label="Coupe Type"
            defaultValue=""
            variant="outlined"
            name="coupeType"
            className="textField"
            style={textFieldStyle}
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
            style={textFieldStyle}
          />
          <TextField
            id="gearbox-text-field"
            label="Gear Box Type"
            defaultValue=""
            variant="outlined"
            name="gearBox"
            className="textField"
            style={textFieldStyle}
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
            style={textFieldStyle}
          />
          <TextField
            id="seatnumber-text-field"
            label="Number of seats"
            type="number"
            defaultValue=""
            variant="outlined"
            name="seatNumber"
            className="textField"
            style={textFieldStyle}
          />
        </Grid>

        <Grid container item xs={12} justify="center" alignItems={"center"}>
          <Button
            size="large"
            variant="contained"
            color="primary"
            style={{ margin: "15px 30px" }}
          >
            Save
          </Button>
          <Button
            size="large"
            variant="contained"
            color="primary"
            style={{ margin: "15px 10px" }}
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddForm;
