import React, { Component } from "react";
import PropTypes from "prop-types";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AddForm from "./AddForm";

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

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      manufacturer: "",
      model: "",
      fuelType: "",
      coupeType: "",
      horsePower: "",
      gearBoxType: "",
      colour: "",
      seatNumber: ""
    };
  }

  handleInput = event => {
    let newState = { ...this.state[event.target.name] };
    newState = event.target.value;
    this.setState({ [event.target.name]: newState });
  };

  handleClear = () => {
    let newState = {
      manufacturer: "",
      model: "",
      fuelType: "",
      coupeType: "",
      horsePower: "",
      gearBoxType: "",
      colour: "",
      seatNumber: ""
    };
    this.setState(newState);
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.paper}>
        <div className={classes.contentWrapper}>
          <AddForm
            handleInput={this.handleInput}
            handleClear={this.handleClear}
            {...this.state}
          />
        </div>
      </Paper>
    );
  }
}

Add.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Add);
