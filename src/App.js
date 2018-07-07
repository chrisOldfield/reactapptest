import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";

const API_KEY = "DEMO_KEY";
class App extends Component {
    neoBrowseData = {};

    componentDidMount() {
        // Now that this component mounted, grab the browse data
        fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse/?api_key=${API_KEY}`)
            .then(data => {
                console.log(data);
                // Set the state so we can use this data later
                this.setState({ neoBrowseData: data });
            })
            .catch(err => {
                console.log(`Some error happened`, err);
            });
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Button />
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to
                    reload.
                </p>
            </div>
        );
    }
}

export default App;
