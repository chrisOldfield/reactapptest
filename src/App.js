import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button/Button";
import axios from "axios";
import v4 from "uuid/v4";
import CustomReactTable from "./Table/Table";

const API_KEY = "DEMO_KEY";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            neoBrowseData: {
                near_earth_objects: [{ name: "" }]
            }
        };
    }

    componentDidMount() {
        // Now that this component mounted, grab the browse data
        axios(`https://api.nasa.gov/neo/rest/v1/neo/browse/?api_key=${API_KEY}`)
            .then(response => {
                console.log(response.data);
                // Set the state so we can use this data later
                this.setState({ neoBrowseData: response.data });
            })
            .catch(err => {
                console.log(`Some error happened`, err);
            });
    }
    render() {
        const { near_earth_objects } = this.state.neoBrowseData;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                {/*<Button />*/}
                {/*<ul>
                    {near_earth_objects.map(neo => (
                        <li key={v4()}>Name: {neo.name}</li>
                    ))}
                </ul>*/}
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to
                    reload.
                </p>
                <CustomReactTable neo={near_earth_objects} />
            </div>
        );
    }
}

export default App;
