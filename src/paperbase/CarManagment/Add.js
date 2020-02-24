import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { Paper, TextField } from "@material-ui/core";
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
      manufacturer: null,
      model: null,
      fuelType: null,
      coupeType: null,
      horsePower: null,
      gearboxType: null,
      colour: null,
      seatNumber: null
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.paper}>
        <div className={classes.contentWrapper}>
          <Typography color="textSecondary" align="center">
            <AddForm />
          </Typography>
        </div>
      </Paper>
    );
  }
}

Add.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Add);
