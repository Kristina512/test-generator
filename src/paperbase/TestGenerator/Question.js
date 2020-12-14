import React, {Component} from "react";
import {FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup} from "@material-ui/core";

// class Question extends Component {
//     state = {
//         questionData: {}
//     };
//
//     constructor(props) {
//         super(props);
//         this.state = {...props}
//     }
//
//     render() {
//         return <Paper>
//             <FormControl component="fieldset">
//                 <FormLabel component="legend" defaultValue={}>{this.state.questionData.question}</FormLabel>
//                 <RadioGroup defaultValue={this.state.questionData.answers[this.state.questionData.selectedAnswer - 1]}
//                             name="customized-radios">
//                     {this.state.questionData.answers.map(e =>
//                         <FormControlLabel value={e.value} control={<Radio/>} label={e.value}/>
//                     )}
//                 </RadioGroup>
//             </FormControl>
//         </Paper>
//     }
// }
//
// export default Question;

const Question = props => {
    return (<Paper>
            <FormControl component="fieldset">
                <FormLabel component="legend" >{props.question}</FormLabel>
                <RadioGroup defaultValue={props.answers.find(e => e.id === props.selectedAnswerId).id}
                            name="customized-radios">
                    {props.answers.map(e =>
                        <FormControlLabel value={e.id} control={<Radio/>} label={e.value}/>
                    )}
                </RadioGroup>
            </FormControl>
        </Paper>
    )
}

export default Question;