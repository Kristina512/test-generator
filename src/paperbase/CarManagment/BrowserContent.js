import React from "react";
import Axios from "axios";

class BrowserContent extends React.Component {
    state = {
        id: null,
        manufacture: null,
        model: null,
        fuelType: null,
        coupeType: null,
        horsePower: null,
        gearboxType: null,
        colour: null,
        seatNumber: null,
        manufactureDate: null,
        rightHandDirection: null,
      };
    
    getCar = () => {
        Axios.get('http://localhost:8080/Car', {
            params: {
                id: 1
            },
            headers: {'Content-Type': "application/json"}
        }).then(response => {
            console.log(response.data.manufacture);
            this.setState({...response.data});
        });
    }

    componentWillMount() {
        this.getCar();
    }

    componentDidMount() {
    }
  render() {
    return (<div>
        <h2>{this.state.manufacturer}</h2>
        <h3>{this.state.model}</h3>
    <p>{"Horse power: " + this.state.horsePower + " Fuel Type: " + this.state.fuelType}</p>
        
    </div>)
  }
}

export default BrowserContent;