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
        "title": "cluster",
        "color": "orange",
        "children": [
         {"title": "AgglomerativeCluster", "color": "#ff0000", "size": 3938},
         {"title": "CommunityStructure", "color": "#ff0000", "size": 3812},
         {"title": "HierarchicalCluster", "color": "#ff0000", "size": 6714},
         {"title": "MergeEdge", "color": "#ff0000", "size": 743}
        ]
       },
       {
        "title": "",
        "color": "orange",
        "children": [
         {"title": "BetweennessCentrality", "color": "#ff0000", "size": 3534},
         {"title": "LinkDistance", "color": "#ff0000", "size": 5731},
         {"title": "MaxFlowMinCut", "color": "#ff0000", "size": 7840},
         {"title": "ShortestPaths", "color": "#ff0000", "size": 5914},
         {"title": "SpanningTree", "color": "#ff0000", "size": 3416}
        ]
       },
       {
        "title": "optimization",
        "color": "orange",
        "children": [
         {"title": "AspectRatioBanker", "color": "#ff0000", "size": 7074}
        ]
       }
      ]
     }
    return (
      <div className="App">
        <Treemap
          mode={'circlePack'}
          // mode={'squarify'}
          title={'My New Treemap'}
          width={1200}
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