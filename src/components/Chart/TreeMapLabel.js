import React, { useContext } from 'react';
import ParentContext from '../../store/parent-context';


const TreeMapLabel = (props) => {

  const ctx = useContext(ParentContext);
  let currentValues = ctx.parent;

  const titleClickHandler = (event) => {
    let clickedTitle = event.target.innerText;
    let titleIndex = currentValues.indexOf(clickedTitle);
    let newValues = currentValues.slice(0,(titleIndex+1));
    ctx.onTitleClick(newValues);
  };
  const currentParent=props.currentParent;
  let currentParentIndex = ctx.parent.indexOf(currentParent);
  let currentParentList = ctx.parent.slice(0, (currentParentIndex+1));

  let content = [];
  for (let item in currentParentList){
    content.push(<div style={{display:'inline'}}><h2 style={{display:'inline'}} onClick={titleClickHandler}>{ctx.parent[item]}</h2><p  style={{display:'inline'}}>  >  </p></div>)
  }

  return content;
};

export default TreeMapLabel;
