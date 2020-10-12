import React, { Component } from 'react';
import Login from './component/login';
import Nav from './component/nav';
import './App.css';
import GlobalView from './component/globalview';
import { authentification } from './service/API';
import styled from 'styled-components';


/*
PROPS: /
       
RETURN: Application

*/
const Appli= styled.div`
        
        height: 100vh;
        background-color: white;
        background-size: cover;
        background-repeat: 
        overflow: auto;
        
    `;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      route: <p>404</p>,
      token: undefined,
    }
    this.handleSignin = this.handleSignin.bind(this);
    this.handleDisconnect = this.handleDisconnect.bind(this);
    this.handleRooting = this.handleRooting.bind(this);
  }
  
  handleSignin(login, password) {
    authentification(login, password)
      .then(response => {
        if (typeof response === "string") {

          this.setState({ isLoggedIn: true, token: response, route :<GlobalView token={response} />});
        }
      });
  }

  handleDisconnect() {
    this.setState({
      isLoggedIn: false,
      token: undefined,
    });

  }

  handleRooting(link) {
    this.setState({ route: link });
  }

  render() {
    const Application = styled.div`
        
        position : relative;
    `;

    if (this.state.isLoggedIn) {
      return (
        <Appli>
        <div className="App">
          <Nav toDisconnect={this.handleDisconnect} onRedirection={this.handleRooting} token={this.state.token}></Nav>
          
          {this.state.route}
        </div></Appli>
      );
    }
    else {
      return (
        <Application className="App">
          <Login onSignin={this.handleSignin}></Login>
        </Application>
      );
    }
  }


}

export default App;
