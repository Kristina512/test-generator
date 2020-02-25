import React from "react";
import { TextField, Grid, Button } from "@material-ui/core";

// TO-DO fix inline styles
const textFieldStyle = {
  margin: "1% 0%"
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
            variant="outlined"
            name="manufacturer"
            className="textField"
            style={textFieldStyle}
            onChange={event => props.handleInput(event)}
            value={props.manufacturer}
          />
          <TextField
            id="model-text-field"
            label="Model"
            variant="outlined"
            name="model"
            className="textField"
            style={textFieldStyle}
            onChange={event => props.handleInput(event)}
            value={props.model}
          />
        </Grid>
        <Grid container item xs={12} spacing={3} justify="space-evenly">
          <TextField
            id="fueltype-text-field"
            label="Fuel Type"
            variant="outlined"
            name="fuelType"
            className="textField"
            style={textFieldStyle}
            onChange={event => props.handleInput(event)}
            value={props.fuelType}
          />
          <TextField
            id="coupetype-text-field"
            label="Coupe Type"
            variant="outlined"
            name="coupeType"
            className="textField"
            style={textFieldStyle}
            onChange={event => props.handleInput(event)}
            value={props.coupeType}
          />
        </Grid>
        <Grid container item xs={12} spacing={3} justify="space-evenly">
          <TextField
            id="horsepower-text-field"
            label="Horse Power"
            type="number"
            variant="outlined"
            name="horsePower"
            className="textField"
            style={textFieldStyle}
            onChange={event => props.handleInput(event)}
            value={props.horsePower}
          />
          <TextField
            id="gearbox-text-field"
            label="Gear Box Type"
            variant="outlined"
            name="gearBoxType"
            className="textField"
            style={textFieldStyle}
            onChange={event => props.handleInput(event)}
            value={props.gearBoxType}
          />
        </Grid>
        <Grid container item xs={12} spacing={3} justify="space-evenly">
          <TextField
            id="color-text-field"
            label="Color"
            variant="outlined"
            name="colour"
            className="textField"
            style={textFieldStyle}
            onChange={event => props.handleInput(event)}
            value={props.colour}
          />
          <TextField
            id="seatnumber-text-field"
            label="Number of seats"
            type="number"
            variant="outlined"
            name="seatNumber"
            className="textField"
            style={textFieldStyle}
            onChange={event => props.handleInput(event)}
            value={props.seatNumber}
          />
        </Grid>

        <Grid container item xs={12} justify="center" alignItems={"center"}>
          <Button
            size="large"
            variant="contained"
            color="primary"
            style={{ margin: "15px 30px" }}
            onClick={() => props.handleSave()}
          >
            Save
          </Button>
          <Button
            size="large"
            variant="contained"
            color="primary"
            style={{ margin: "15px 10px" }}
            onClick={() => props.handleClear()}
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddForm;
