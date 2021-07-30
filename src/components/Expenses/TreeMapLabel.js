import React, { useContext } from 'react';
import ParentContext from '../../store/parent-context';


const TreeMapLabel = (props) => {

  const ctx = useContext(ParentContext);
  let currentValues = ctx.parent;
  console.log("currentValues");
  console.log(currentValues);


  const titleClickHandler = (event) => {
    console.log(event);
    let clickedTitle = event.target.innerText;
    console.log("clickedTitle");
    console.log(clickedTitle);
    let titleIndex = currentValues.indexOf(clickedTitle);
    let newValues = currentValues.slice(0,(titleIndex+1));
    ctx.onTitleClick(newValues);
  };
  const currentParent=props.currentParent;
  let currentParentIndex = ctx.parent.indexOf(currentParent);
  let currentParentList = ctx.parent.slice(0, (currentParentIndex+1));

  let content = [];
  for (let item in currentParentList){
    content.push(<h2 onClick={titleClickHandler}>{ctx.parent[item]}</h2>)
  }

  return content;
};

export default TreeMapLabel;
