import styled from 'styled-components';
import React, { Component } from 'react';
import logo from '../logo_seegma.png';
import Input from './input';
import {Grid, Row, Col} from "./style";
/*
PROPS: onSignIn(login,password) : function d'authentification
       
RETURN: Module de login

*/

const Img = styled.img`
            padding: 1rem;
            width: 90%;
            height: auto;
        `;

const Cadre = styled.div`
            
            position : absolute;
            top:50%;
            left: 50%;
            margin: 0;
            background-color: hsl(0deg 0% 100% / 48%);
            transform: translate(-50%, 50%);
            padding : 6px;
        `;
const Sign = styled.button`
        padding: 10px 15px;
    `;

const Margin = styled.div`
        margin-top: 6px
`;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "jujubeberhot",
            login: "juju_beber",
        }
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handlePassword(text) {
        this.setState({ password: text });
    }

    handleLogin(text) {
        this.setState({ login: text });
    }

    render() {


        return (
            <Cadre >
                <Img src={logo} alt="seegma_logo"></Img>
                <Row>
                   <Col size={1}>  
                   <Input size={"60%"} type={"text"} required={true} readonly={false} value={this.state.login} onChange={this.handleLogin} placeHolder={"Login"}></Input>
                </Col>
                </Row>
                <Row>
                <Col size={1}>
                    <Input  size={"60%"} type={"password"} required={true} readonly={false} value={this.state.password} onChange={this.handlePassword} placeHolder={"Password"}></Input>
                    </Col>
                </Row>
                <Row>
                <Col size={1}>
                <Sign onClick={() => this.props.onSignin(this.state.login, this.state.password)}>Sign-In</Sign>
                </Col>
                </Row>
            </Cadre>
        );
    }
}
export default Login;