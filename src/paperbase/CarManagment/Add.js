import React, { Component } from "react";
import PropTypes from "prop-types";
import { Paper, Snackbar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AddForm from "./AddForm";
import axios from "axios";
import MuiAlert from "@material-ui/lab/Alert";

const styles = theme => ({
  paper: {
    maxWidth: 936,
    margin: "auto",
    overflow: "hidden"
  },
  searchBar: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
  },
  searchInput: {
    fontSize: theme.typography.fontSize
  },
  block: {
    display: "block"
  },
  addUser: {
    marginRight: theme.spacing(1)
  },
  contentWrapper: {
    margin: "40px 16px"
  }
});

const Alert = props => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carData: {
        manufacturer: "",
        model: "",
        fuelType: "",
        coupeType: "",
        horsePower: "",
        gearBoxType: "",
        colour: "",
        seatNumber: ""
      },
      notification: null,
      open: false,
      message: null
    };
  }

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };

  handleInput = event => {
    let carData = { ...this.state.carData };
    carData[event.target.name] = event.target.value;
    this.setState({ carData });
  };

  handleClear = () => {
    let newState = {
      carData: {
        manufacturer: "",
        model: "",
        fuelType: "",
        coupeType: "",
        horsePower: "",
        gearBoxType: "",
        colour: "",
        seatNumber: ""
      }
    };
    this.setState(newState);
  };

  handleSave = () => {
    let requestBody = { ...this.state.carData };
    requestBody.horsePower = parseInt(requestBody.horsePower);
    requestBody.seatNumber = parseInt(requestBody.seatNumber);
    axios
      .post("http://localhost:8080/apis/cars", requestBody, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(() => {
        this.setState({
          notification: "success",
          open: true,
          message: "Successfully saved car!"
        });
      })
      .catch(err => {
        this.setState({ notification: "error", open: true, message: "" + err });
      });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.paper}>
          <div className={classes.contentWrapper}>
            <AddForm
              handleInput={this.handleInput}
              handleClear={this.handleClear}
              handleSave={this.handleSave}
              {...this.state.carData}
            />
          </div>
        </Paper>
        <Snackbar
          open={this.state.open}
          autoHideDuration={4000}
          onClose={this.handleClose}
        >
          <Alert onClose={this.handleClose} severity={this.state.notification}>
            {this.state.message}
          </Alert>
        </Snackbar>
      </div>
    );
  }
}

Add.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Add);
