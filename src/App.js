import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import mexico from './mexicoHigh.svg'
import AmCharts from "@amcharts/amcharts3-react";


class App extends Component {
  render() {
    const config = {
      "type": "map",
      "theme": "light",
      "colorSteps": 10,
      "dataProvider": {
          "mapURL": mexico,
          "getAreasFromMap": true,
          "areas": [
            {
              "id":"MX-AGU",
              "color":"#000000"
            }
]
      },
      "areasSettings": {
          "autoZoom": true,
          "selectedColor": "#CC0000",
          "selectable": true
      },
      "legend": {
        "backgroundColor": "#fff",
        "backgroundAlpha": 0.7,
        "align": "left",
        "data": [{
          "title": "One",
          "color": "#3366CC"
        }, {
          "title": "Two",
          "color": "#FFCC33"
        }]
      },
      "listeners": [{
          "event": "descriptionClosed",
          "method": function(event) {
            console.log(event.mapObject.id)
              
          }
      }]
  };



    return (
      <div className="App">
                <AmCharts.React style={{ width: "100%", height: "500px" }} options={config} />

      </div>
    );
  }
}

export default App;
