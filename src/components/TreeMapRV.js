import React, {useContext} from 'react';
import './TreeMapRV.css';
import {Treemap} from 'react-vis';
import ParentContext from '../store/parent-context';


const TreeMapRV = (props) =>  {
    const ctx = useContext(ParentContext);

    const myData = props.dataRV;
    console.log("myData")
    console.log(myData)

    const leafClick = (leafNode, event) => {
      ctx.onItemClick(event.target.firstChild.nodeValue);
      console.log("evnet");
      console.log(event);
    };
      
    return (
      <div className="App">
        <Treemap
          mode={'circlePack'}
          // mode={'squarify'}
          title={'My New Treemap'}
          width={800}
          height={600}
          data={myData}
          colorType={'literal'}
          className={'treemap'}
          hideRootNode={true}
          onLeafClick={leafClick}
          />
      </div>
    );
  }


export default TreeMapRV;