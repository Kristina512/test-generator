import React, {Component} from "react";
import {FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup} from "@material-ui/core";

class Question extends Component {
    state = {
        question: null,
        answers: [],
        selectedAnswer: null,
        correctAnswer: null
    };

    constructor(props) {
        super(props);
        this.state = {...props}
    }

    render() {
        return <Paper>
            <FormControl component="fieldset">
                <FormLabel component="legend">{this.state.question}</FormLabel>
                <RadioGroup defaultValue={this.state.answers[0]}  name="customized-radios">
                    {this.state.answers.map(e =>
                        <FormControlLabel value={e} control={<Radio />} label={e} />
                    )}
                </RadioGroup>
            </FormControl>
        </Paper>
    }
}

export default Question;