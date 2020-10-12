import { ListItem} from '@material-ui/core';
import React from 'react';
/*
PROPS: keys : id pour le rendering
       onRedirection : fonction de redirection ou a executer lors du onClick 
       name : nom du button
       
RETURN: Button tile

*/
export default function RedirectButton(props){

    return(
        <ListItem button key={props.keys} onClick={() => props.onRedirection(props.redirection)}>{props.name}</ListItem>
    )
}