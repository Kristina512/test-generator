import React from "react";
import {
    Card,
    CardContent,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const Question = props => {
    return (<Card>
            <CardContent>
                <FormControl component="fieldset">
                    <FormLabel component="legend">
                    <Typography gutterBottom variant="h5" component="h2">{props.question}</Typography>
                    </FormLabel>
                    <RadioGroup defaultValue={props.answers.find(e => e.id === props.selectedAnswerId).id}
                                name="customized-radios">
                        {props.answers.map(e =>
                            <FormControlLabel key={e.id} value={e.id} control={<Radio/>} label={e.value}/>
                        )}
                    </RadioGroup>
                </FormControl>
            </CardContent>

        </Card>
    )
}

export default Question;