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
                    <RadioGroup
                                name="customized-radios" onChange={(event => props.onChange(props.id, event.target.value))}>
                        {props.answers.map(e =>
                            <FormControlLabel key={e.id} value={e.value} control={<Radio/>} label={e.value}/>
                        )}
                    </RadioGroup>
                </FormControl>
            </CardContent>

        </Card>
    )
}

export default Question;