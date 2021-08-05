import React, { useContext } from 'react';
import ParentContext from '../../store/parent-context';


const TreeMapLabel = (props) => {

  const ctx = useContext(ParentContext);
  let currentValues = ctx.parent;

  const titleClickHandler = (event) => {
    let clickedTitle = event.target.innerText;
    let titleIndex = 0;
    for(let i=0; i<currentValues.length; i++){
      if (currentValues[i].title===clickedTitle){
        titleIndex = i;
      }
    }
    console.log("titleINdex", titleIndex);
    // let titleIndex = currentValues.indexOf(clickedTitle);
    let newValues = currentValues.slice(0,(titleIndex+1));
    console.log("newValues", newValues)
    ctx.onTitleClick(newValues);

  };
  const currentParent=props.currentParent;
  // let currentParentIndex = ctx.parent.indexOf(currentParent);
  let currentParentIndex = 0;
  for(let i=0; i<ctx.parent.length; i++){
    if (ctx.parent[i].id===currentParent){
      currentParentIndex = i;
    }
  }
  let currentParentList = [];
  for(let i=0; i<(currentParentIndex+1); i++){
    currentParentList.push(ctx.parent[i].title)
  }
  // let currentParentList = ctx.parent.slice(0, (currentParentIndex+1));

  let content = [];
  for (let item in currentParentList){
    content.push(<div style={{display:'inline'}}><h2 style={{display:'inline'}} onClick={titleClickHandler}>{currentParentList[item]}</h2><p  style={{display:'inline'}}>  >  </p></div>)
  }

  return content;
};

export default TreeMapLabel;
