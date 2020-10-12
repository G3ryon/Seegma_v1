import React, { Component } from 'react';
import Login from './component/login';
import Nav from './component/nav';
import './App.css';
import GlobalView from './component/globalview';
import { authentification } from './service/API';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Loading from './component/loading';


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
    const Application = styled.div`
        
        position : relative;
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

          this.setState({ isLoggedIn: true, token: response});

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
    if(this.state.isLoggedIn){
      return(
        <Appli>
        <Router>    
          <Switch>
            <Route exact path="/">
              <Nav toDisconnect={this.handleDisconnect}  token={this.state.token}></Nav>
              <GlobalView token={this.state.token}></GlobalView>
            </Route>
            <Route path="/loading">
            <Nav toDisconnect={this.handleDisconnect}  token={this.state.token}></Nav>
              <Loading></Loading>
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </Appli>
        
      );
    }else{
      return(
     
      <Router>    
        <Switch>
          <Route exact path='/'>
            <Application>
            <Login onSignin={this.handleSignin}></Login>
            </Application>
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
      
    );//si no match alors il redirect la
    }
    
  }


}

export default App;
