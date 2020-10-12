import React, { Component } from 'react';
import styled, {css} from 'styled-components';
/*
PROPS: onChangeOption : fonction changeant le state de la valeur
       types : array des valeurs devant etre affiché par le component
       value : Valeur selectionnée

       
RETURN: Module de login

*/

const Label = styled.label`
  background : ${props => props.checked ? "#282c34" : "#2c3e50"  };
  display: block;

  color:white;
  text-align:center;
  width:144px;
  height: 32px;
  padding:7px;


`;

const Input = styled.input`
        width : 0px;
        height: 0px;
        
`;

const Grid = styled.div`
        display : flex;
        justify-content: center;
        height : 50px;

        
        

`;
const Row = styled.div`
        display : flex;
        
        
`;
const Col = styled.div`
        flex: ${(props) => props.size};
        text-align: center;
       
     
        


`;
class RadioButtons extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.onChangeOption(event.target.value)
    }

    render() {
        let options =[];
        let i = 1;
        this.props.types.forEach(element => {
            options.push(<Col size={i}><Label checked={this.props.value === element} ><Input key={i} readOnly type="radio" value={element}
            checked={this.props.value === element} 
            onClick={this.handleClick}></Input>{element}</Label></Col>);
            i++;
        });

        return (
            <Grid>
                
            <Row>{options}</Row>
            </Grid>
        );
    }
}
export default RadioButtons;

