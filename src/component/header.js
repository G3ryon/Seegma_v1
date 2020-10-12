import React, { Component } from 'react';
import styled from 'styled-components';

/*
PROPS: title : titre de la page
       
RETURN: Application

*/
const Head = styled.header`
            background-color: #2c3e50;
            height : 4vh;
            text-align : center; 
            color: white;
        `;

class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <Head>
                {this.props.title}
            </Head>
        );
    }
}
export default Header;