import logo from '../logo_seegma.png';
import React from 'react';
import styled, { keyframes } from 'styled-components';
export default function Loading(){
    const rotate =  keyframes`
    from {
      transform: rotate(0deg);
    }
  
    to {
      transform: rotate(360deg);
    }
  `;
    const Img = styled.img`
            padding: 1rem;
            display: block;
            width:30%;
            height:auto;
            animation: ${rotate} 1s linear infinite;
        `;
        const Loading = styled.div`
        height:50vh;
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    return(
        <Loading>
            <Img src={logo} alt="seegma_logo"></Img>
            
        </Loading>
    )
}