import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, Paper, TextField} from "@material-ui/core";
import {historyQuestions} from "./tests/History";
import Question from "./Question";
import Grid from "@material-ui/core/Grid";
import SettingsIcon from '@material-ui/icons/Settings';

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

    onRadioChange(qId, aValue) {
        const questionsData = this.state.showQuestions;
        let t = questionsData.find(e => e.id === qId);
        const answer = t.answers.find(e => e.value === aValue)
        t.selectedAnswerId = answer.id;
        this.setState({showQuestions: questionsData});
    }

    render() {
        const {classes} = this.props;

        return <div>
            <Paper className={classes.paper}>
                <div className={classes.contentWrapper}>
                    <Grid container direction="row" alignItems="center" justify="center">
                        <TextField
                            onChange={event => {
                                this.setState({numberOfQuestions: event.target.value});
                            }}
                            value={this.state.numberOfQuestions}
                            id="standard-number"
                            label="Number of questions"
                            type="number"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{marginLeft: "2em", marginRight: "2em"}}
                        />
                        <Button style={{marginLeft: "2em", marginRight: "2em"}} endIcon={<SettingsIcon/>}
                                variant="contained" color="primary" onClick={() => this.getRandomTest()}>
                            GENERATE
                        </Button>
                    </Grid>


                    {
                        this.state.showQuestions != null ? this.state.showQuestions.map(e => (
                            <Box my={5} key={e.id}><Question id={e.id} key={e.id} question={e.question} selectedAnswerId={e.selectedAnswerId}
                                                  answers={e.answers} onChange={(qId, aValue) => this.onRadioChange(qId, aValue)}/></Box>)) : null
                    }
                    {/*TO-DO
                     1 - Read questions from file X
                     2 - Generate random tests X
                     3 - Add option to chose number of questions X
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