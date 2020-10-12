import {SwipeableDrawer} from '@material-ui/core';
import React, { Component } from 'react';
import RedirectButton from './redirectButton';
import GlobalView from './globalview';
import styled from 'styled-components';

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

class Nav1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            draw: false,
        }
       
        
    }

       
    render() {
        
        const link = { //test react routeur
            global : ["Vue Global",this.props.onRedirection,<GlobalView token={this.props.token}></GlobalView>],
            disconnect : ["Disconnect",this.props.toDisconnect,""],
        }
        
        let i = 0;
        let allLink = [];
        for(var key in link){
           allLink.push(<RedirectButton key={i} onRedirection={link[key][1]} name={link[key][0]} redirection={link[key][2]}></RedirectButton>);
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
                
                
            </SwipeableDrawer>
        );
    }
}
export default Nav1;