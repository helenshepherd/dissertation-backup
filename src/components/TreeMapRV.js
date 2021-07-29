import React, {useContext} from 'react';
import './TreeMapRV.css';
import {Treemap} from 'react-vis';
import ParentContext from '../store/parent-context';


const TreeMapRV = (props) =>  {
    const ctx = useContext(ParentContext);

    const myData = props.dataRV;

    const leafClick = (leafNode, event) => {
      console.log("innerText")
      console.log(event.target.innerText)
      ctx.onItemClick(event.target.innerText);
    };
    
    return (
      <div className="App">
        <Treemap
          mode={'circlePack'}
          // mode={'squarify'}
          title={'My New Treemap'}
          width={800}
          height={800}
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