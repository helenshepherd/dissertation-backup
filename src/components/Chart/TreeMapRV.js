import React, {useContext, useState} from 'react';
import './TreeMapRV.css';
import {Treemap} from 'react-vis';
import ParentContext from '../../store/parent-context';


const TreeMapRV = (props) =>  {
    const ctx = useContext(ParentContext);

    const myData = props.dataRV;
   
    const [selectedLeaf, setSelectedLeaf] = useState(['']);
    const [previousColor, setPreviousColor] = useState(['']);

    //  const leafClick = (leaf, event) => {
    //   leaf.data.style.border-width='6px';
    //   ctx.onItemClick(event.target.innerText);
    // };

    return (
      <div className="App">
        <Treemap
          mode={'circlePack'}
          // mode={'squarify'}
          title={'My New Treemap'}
          width={800}
          height={700}
          data={myData}
          colorType={'literal'}
          className={'treemap'}
          hideRootNode={true}
          onLeafClick={(leaf, event) => {
            setSelectedLeaf(leaf.data.id)
            console.log("leaf", leaf);
            ctx.onBubbleClick(leaf.data.id)//${leaf.parent.parent.title}
            if(leaf.data.title!=="Direct Investments" && leaf.data.title!=="Subfunds"){
              // selectedLeaf.data.style = {"border": "5px solid red"};
              ctx.onItemClick(leaf.data.id);
            };
          }}
          onLeafMouseOver = {(leaf, event) => {
            console.log(leaf)
            setPreviousColor(leaf.data.color)
            if(leaf.data.title!=="Direct Investments" && leaf.data.title!=="Subfunds"){
              leaf.data.color="white";
            }
          }}
          onLeafMouseOut = {(leaf, event) => {
            if(leaf.data.title!=="Direct Investments" && leaf.data.title!=="Subfunds"){
              leaf.data.color=previousColor;
            }
          }}   
           />
      </div>
    );
  }


export default TreeMapRV;