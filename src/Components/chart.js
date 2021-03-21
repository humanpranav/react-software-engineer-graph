import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data };
  }

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.data}
          options={{
            title: {
              display: true,
              text: "Software Engineering Jobs in Millions",
              fontSize: 25,
            },
            legend: {
              display: false,

              position: "right",
            },
          }}
        />
      </div>
    );
  }
}

export default Chart;
