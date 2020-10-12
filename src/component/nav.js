import {ListItem, SwipeableDrawer} from '@material-ui/core';
import React, { Component } from 'react';
import RedirectButton from './redirectButton';
import GlobalView from './globalview';
import styled from 'styled-components';
import Button from './redirectButton';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory
  } from "react-router-dom";
import Loading from './loading';

/*
PROPS: onRedirection : fonction de redirection pour un button
       toDisconnect : fonction de deconnexion
       
RETURN: Navigation via le drawer
*/

const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
            `;

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            draw: false,
            push:false,
        }
       
        
    }
       
    render() {
        
        const link = {global:"/",loading:"/loading"}
            
        
        
        let i = 0;
        let allLink = [];
        for(var key in link){
           allLink.push(<Button key={i} link={link[key]} name={key} ></Button>);
           i++
        }

        return (
            <SwipeableDrawer
                open={this.state.draw}
                onClose={() => this.setState({ draw: false })}
                onOpen={() => this.setState({ draw: true })}
            >
                <Title>Seegma</Title>

                {allLink}

                <ListItem button key={"disco"} onClick={() => this.props.toDisconnect()}>Disconnect</ListItem>
            
            </SwipeableDrawer>
        );
    }
}
export default Nav;