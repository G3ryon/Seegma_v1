import React, { Component } from 'react';
import styled from 'styled-components';

const Drop = styled.select`
        background-color: #2c3e50;
        height : 3vh;
        color : white;
        margin : 5px
        `;

       

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onSelect(event.target.value)
    }

    render() {
        let allOption = [];
        let i = 1;
        for (let option in this.props.optionDic) {

            allOption.push(<option key={i} value={option}>{this.props.optionDic[option]}</option>);
            i++
        }

        return (
            
            <Drop hidden={this.props.hid} value={this.props.value} onChange={this.handleChange}>
                <option  key={0} hidden={true} value={"default"}>Click here</option>
                    {allOption}
            </Drop>
            
        );
    }
}
export default DropDown;