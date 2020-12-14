import React, {Component} from "react";
import {Paper} from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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


class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const arr = [
            <h1 style={{ left: '20%', top: '10%' }}> Contacts </h1>, <br />,
            'Phone numbers:', <br />,
            <a style={{ top: '30%', color: "#f54242" }} > +359 52342590 </a>, <br />,
            <a style={{ top: '40%', color: "#f54242" }}> +359 873452312 </a>, <br />, <br />,
            'Email adress:', <br />,
            <a style={{ top: '40%', color: "#f54242" }}> info.test@gmail.com </a>, <br />,
            <img src="/facebook.png" />,
            <img src="/instagram.png"/>,
            <img style={{top:'100%'}} src="/twitter.png"/>
            
        ];
        
        
        return (
            <div>
                <p style={{ textAlign: 'center', alignSelf:'center'}}>  {arr} </p>  
                <input type="button" className="MuiPaper-rounded"
                    style={{ width: '150px', height: '30px',
                        position: 'absolute', left: '60%', top: '90%', transform: 'translate(-50%,-50%)',
                        backgroundImage: `%PUBLIC_URL%/facebook.png`
                    }} value="Send" />
                



                <h1 style={{ color: "#f54242",textAlign: 'center', alignSelf: 'center', position: 'absolute', left: '53%' ,top: '47%' }}> Got a question? </h1>
                <input Textfield name="outlined-basic" className="MuiPaper-rounded" style={{
                     
                    position: 'absolute', width: '250px', height: '40px', left: '60%', top: '61%', transform: 'translate(-50%,-50%)'
                }} placeholder={"Your name"} label="Outlined" variant="outlined" />
                <input Textfield email="outlined-basic" className="MuiPaper-rounded" style={{

                    position: 'absolute', width: '250px', height: '40px', left: '60%', top: '69%',transform: 'translate(-50%,-50%)'
                }} placeholder={"Your email"} label="Outlined" variant="outlined" />

                <input Textfield text="outlined-basic" className="MuiPaper-rounded" style={{

                    position: 'absolute', left: '60%', top: '80%', width: '250px', height: '90px', transform: 'translate(-50%,-50%)'
                }} placeholder={"Type in your question here...."} label="Outlined" variant="outlined" />

                


            </div>
        );
       
        
    }
}

Contacts.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contacts);
