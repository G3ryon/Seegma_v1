import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import styled from 'styled-components';
import fond from './seegma.jpg';
import { BrowserRouter } from 'react-router-dom';



const Application = styled.div`
        
        height: 100vh;
        no-repeat;background-image: url(${fond});
        background-size: cover;
        overflow: auto;
        position : relative;
    `;

ReactDOM.render(
    <BrowserRouter>
    <Application >
      <App/>
    </Application>
    </BrowserRouter>
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
