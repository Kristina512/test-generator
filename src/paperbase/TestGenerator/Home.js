import React, {Component} from "react";
import {Paper} from "@material-ui/core";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";

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


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.paper}>
                <div className={classes.contentWrapper}>
                    {/* Add more to the page here*/}
                </div>
            </Paper>)
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
