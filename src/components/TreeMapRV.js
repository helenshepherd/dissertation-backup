import React, { Component } from 'react';
import './TreeMapRV.css';
import {Treemap} from 'react-vis';

class TreeMapRV extends Component {
  render() {
    const myData = {
      "title": "analytics",
      "color": "transparent",
      "children": [
       {
        "title": "Direct Investments (Top Layer)",
        "color": "orange",
        "children": [
         {"title": "Industrials", "color": "#ff0000", "size": 43.1},
         {"title": "Financials", "color": "#ff0000", "size": 46.9},
         {"title": "Consumer Goods", "color": "#ff0000", "size": 42.5},
         {"title": "Consumer Services", "color": "#ff0000", "size": 35.9},
         {"title": "Technology", "color": "#ff0000", "size": 48.9},
         {"title": "Heathcare", "color": "#ff0000", "size": 42.2},
         {"title": "Basic Materials", "color": "#ff0000", "size": 32.4},
         {"title": "Utilities", "color": "#ff0000", "size": 31.8},
         {"title": "Oil & Gas", "color": "#ff0000", "size": 32.03},
         {"title": "Telecoms", "color": "#ff0000", "size": 32.63}
        ]
       },
       {
        "title": "Subfunds",
        "color": "orange",
        "children": [
         {"title": "Fund 1", "color": "#ff0000", "size": 3},
         {"title": "Fund 2", "color": "#ff0000", "size": 4},
         {"title": "Fund 3", "color": "#ff0000", "size": 2},
         {"title": "Fund 4", "color": "#ff0000", "size": 2},

        ]
       }
      ]
     }
    return (
      <div className="App">
        <Treemap
          mode={'circlePack'}
          mode={'squarify'}
          title={'My New Treemap'}
          width={800}
          height={1000}
          data={myData}
          colorType={'literal'}
          className={'treemap'}
          />
      </div>
    );
  }
}

export default TreeMapRV;