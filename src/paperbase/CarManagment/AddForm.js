import React from "react";
import { TextField, Grid, Button} from "@material-ui/core";

// TO-DO fix inline styles

const AddForm = props => {
  return (
    <div className="addForm">
      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-end"
        alignItems="center"
      >
        <Grid container item xs={12} spacing={3} justify="space-evenly" >
          <TextField
            id="manufacturer-text-field"
            label="Manufacturer"
            defaultValue=""
            variant="outlined"
            name="manufacturer"
            className="textField"
            style={{margin: "4px 0px"}}
          />
          <TextField
            id="model-text-field"
            label="Model"
            defaultValue=""
            variant="outlined"
            name="model"
            className="textField"
            style={{margin: "4px 0px"}}
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
            style={{margin: "4px 0px"}}
          />
          <TextField
            id="coupetype-text-field"
            label="Coupe Type"
            defaultValue=""
            variant="outlined"
            name="coupeType"
            className="textField"
            style={{margin: "4px 0px"}}
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
            style={{margin: "4px 0px"}}
          />
          <TextField
            id="gearbox-text-field"
            label="Gear Box Type"
            defaultValue=""
            variant="outlined"
            name="gearBox"
            className="textField"
            style={{margin: "4px 0px"}}
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
            style={{margin: "4px 0px"}}
          />
          <TextField
            id="seatnumber-text-field"
            label="Number of seats"
            type="number"
            defaultValue=""
            variant="outlined"
            name="seatNumber"
            className="textField"
            style={{margin: "4px 0px"}}
          />
        </Grid>

        <Grid container item xs={12} justify="center" alignItems={"center"}>
        <Button
          size="large"
          variant="contained"
          color="primary"
          style={{margin: "0px 30px"}}
        >
          Save
        </Button>
        <Button size="large" variant="contained" color="primary" style={{margin: "0px 10px"}}>
          Clear
        </Button>
        </Grid>
      </Grid>


    </div>
  );
};

export default AddForm;
