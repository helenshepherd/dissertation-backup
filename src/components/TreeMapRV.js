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
          // colorRange={['#00b9bc','#19c0c2','#32c7c9','#4cced0','#66d5d6','#7fdcdd','#99e3e4','#b2eaea','#ccf1f1','#e5f8f8','#ffffff']}
          // colorType={'category'}      
           />
      </div>
    );
  }


export default TreeMapRV;