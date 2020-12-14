import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import {Button, Paper} from "@material-ui/core";
import {historyQuestions} from "./tests/History";
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

var shuffle = require('shuffle-array');



class Generator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfQuestions: 2,
            questions: historyQuestions,
            showQuestions: null
        };
    }
    getRandomTest() {
        var shuffled = shuffle(this.state.questions);
        this.setState({questions: shuffled});
        var sliced = shuffled.slice(0, this.state.numberOfQuestions);
        sliced.forEach(e => {
            shuffle(e.answers);
        })
        this.setState({showQuestions: sliced});
        this.forceUpdate()
    }
    render() {
        const {classes} = this.props;

        return <div>
            <Paper className={classes.paper}>
                <div className={classes.contentWrapper}>
                    <Button variant="contained" color="primary" onClick={() => this.getRandomTest()}>
                        Generate
                    </Button>
                    {
                        this.state.showQuestions != null ? shuffle(this.state.showQuestions.map(e => (
                            <Question question={e.question} selectedAnswerId={e.selectedAnswerId} answers={e.answers}/>))) : null
                    }
                    {/*TO-DO
                     1 - Read questions from file
                     2 - Generate random tests
                     3 - Add option to chose number of questions
                     4 - Add option to chose test topic
                     5 - Submit answers and get results
                     */}
                </div>
            </Paper>
        </div>
    }
}

Generator.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Generator);