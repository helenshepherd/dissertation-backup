import React from 'react';
import './TreeMapRV.css';
import {Treemap} from 'react-vis';

const TreeMapRV = (props) =>  {

    const myData = props.dataRV;
    console.log("myData")
    console.log(myData)
      
    return (
      <div className="App">
        <Treemap
          // mode={'circlePack'}
          mode={'squarify'}
          title={'My New Treemap'}
          width={800}
          height={600}
          data={myData}
          colorType={'literal'}
          className={'treemap'}
          />
      </div>
    );
  }


export default TreeMapRV;