import React, { Component, Fragment, } from 'react';
import styled from 'styled-components';

/*
PROPS: onChange : function qui change le state correspondant a l'input
       type : type d'input (text,...)
       value : valeur du champ soit le state correpondant
       placeHolder : valeur dans le champs indiquant la signification de l'input
       required : true or false
       readonly : true or false
       
RETURN: un input controlé
*/

const Entry = styled.input`
        border: 1px solid grey;
        width :  ${props => (props.size)};
        padding : 3px;

    `;

class Input extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event.target.value)
    }

    

    render() {
        
        return (
            
            <Entry type={this.props.type}
                readOnly={this.props.readonly}
                value={this.props.value}
                onChange={this.handleChange}
                required={this.props.required}
                placeholder={this.props.placeHolder}
                size={this.props.size}
                 />
                
            
        );
    }
}
export default Input;