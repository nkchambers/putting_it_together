import React, {Component} from "react";

class PersonCardComponent extends Component {
    constructor(props) {
        super(props)
        console.log(this);

        //Create State
        this.state = {
            age: this.props.age
        }
    }

    increaseAge = () => {
        console.log("clicked!");
        this.setState({
            age: this.state.age + 1
        });
    }

    render() {
        return (
            <fieldset>
                <legend>PersonCardComponent.jsx</legend>
                <div>
                    <h1>{ this.props.lastName },  { this.props.firstName }</h1>
                    <h3>Age: { this.state.age }</h3>
                    <h3>Hair Color: { this.props.hairColor }</h3>
                    <button onClick={() => this.increaseAge()}>Birthday Button for { this.props.firstName }</button>
                </div>
            </fieldset>
        );

    }
}

export default PersonCardComponent;