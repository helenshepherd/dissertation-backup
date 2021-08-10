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
    
    const [chartIsVisible, setChartIsVisible] = useState(true);
    
    const cssClasses = ['treemap', chartIsVisible ? 'treemapVisible' : 'treemapInvisible']

    const showChart = () => {
      setChartIsVisible(true);
    }

    const hideChart = () => {
      setChartIsVisible(false);
    }

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
          className={cssClasses.join(' ')}
          hideRootNode={true}
          onLeafClick={(leaf, event) => {
            hideChart();
            // setSelectedLeaf(leaf.data.id)
            ctx.onBubbleClick(leaf.data.id)//${leaf.parent.parent.title}
            
            if(leaf.parent.data.title==="Subfunds"){
              // selectedLeaf.data.style = {"border": "5px solid red"};
              ctx.onItemClick({title: leaf.data.title, id: leaf.data.id});
              console.log("hidden props")
            };
            if(leaf.parent.data.title==="Direct Investments"){
              ctx.onIndustryClick(leaf.data.id);
            }
            // showChart();
          }}
          onLeafMouseOver = {(leaf, event) => {
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