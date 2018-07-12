import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class CustomReactTable extends Component {
    state = {};

    render() {
        const data = this.props.neo;

        const columns = [
            {
                Header: "Name",
                accessor: "name" // String-based value accessors!
            },
            {
                Header: "NEO Ref Id",
                accessor: "neo_reference_id",
                Cell: props => <span className="number">{props.value}</span> // Custom cell components!
            },
            {
                id: "Nasa_jpl_url", // Required because our accessor is not a string
                Header: "NASA JPL URL",
                accessor: d => (
                    <a href={d.nasa_jpl_url} target="_blank">
                        {d.name}
                    </a>
                ) // Custom value accessors!
            },
            {
                id: "absolute-magnitude",
                Header: "Absolute Magnatude", // Custom header components!
                accessor: d => (
                    <a href={d.nasa_jpl_url} target="_blank">
                        {d.name}
                    </a>
                )
            }
        ];
        return <ReactTable data={data} columns={columns} />;
    }
}

export default CustomReactTable;
