import React, { Component } from "react";

import "./App.css";
import Chart from "./Components/chart";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
  }
  componentWillMount() {
    this.getData();
  }

  getData() {
    // Ajax calls here
    this.setState({
      data: {
        years: ["2018", "2019", "2023", "2024", "2040"],
        datasets: [
          {
            label: "Employment ",
            data: [23.9, 26.4, 27.7, 28.7, 45],
            backgroundColor: [
              "#993333",
              "#339933",
              "#194C19",
              "#194C4C",
              "#4C194C",
            ],
          },
        ],
      },
    });
  }

  render() {
    return (
      <div>
        <Chart
          data={this.state.data}
          location="San Francisco"
          legendPosition="bottom"
        />
      </div>
    );
  }
}

export default App;
