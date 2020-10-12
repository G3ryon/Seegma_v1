import { ListItem } from '@material-ui/core';
import React from 'react';
import { useHistory } from "react-router-dom";

export default function Button(props) {
  const history = useHistory();

  function handleClick() {
    history.push(props.link);
  }

  return (
      
    <ListItem button key={props.keys} onClick={() => handleClick()}>{props.name}</ListItem>
    
  );
}