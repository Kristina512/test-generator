import React, { Component } from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";
import Question from "./Question";

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

class Generator extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { classes } = this.props;

        return <div>
            <Paper className={classes.paper}>
                <div className={classes.contentWrapper}>
                    {/*TO-DO
                     1 - Read questions from file
                     2 - Generate random tests
                     3 - Add option to chose number of questions
                     4 - Add option to chose test topic
                     5 - Submit answers and get results
                     */}
                    <Question question={"Коя година е създадена българия"} answers={["681", "1276", "736", "Вчера"]}/>
                    <br/>
                    <Question question={"Коя година е създадена българия"} answers={["681", "1276", "736", "Вчера"]}/>
                    <br/>
                    <Question question={"Коя година е създадена българия"} answers={["681", "1276", "736", "Вчера"]}/>
                    <br/>
                    <Question question={"Коя година е създадена българия"} answers={["681", "1276", "736", "Вчера"]}/>
                    <br/>
                    <Question question={"Коя година е създадена българия"} answers={["681", "1276", "736", "Вчера"]}/>
                </div>
            </Paper>
        </div>
    }
}

Generator.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Generator);