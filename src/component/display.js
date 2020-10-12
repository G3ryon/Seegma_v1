

import React, { Component } from 'react';
import styled from 'styled-components';
import { postDeviceDayShow, postDeviceMonthShow } from '../service/API';
import Chart from './chart';
import DateSwitch from './dateSwitch';

/*
PROPS: device : id d'appareil client selectionné
       token : token pour les requetes API
       
RETURN: La partie affichage de graphique en fonction de la date

*/

const deco= styled.div`
text-decoration: none;
        `;

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            statDay: [],
            date: new Date().toISOString().split('T')[0],
            whichType: "date",
        }
        this.handleDate = this.handleDate.bind(this);
        this.handleWhichType = this.handleWhichType.bind(this);
        this.handleDateAction = this.handleDateAction.bind(this);
    }

    //life cycle
    componentDidUpdate(prevprops, prevstate) {
        if (this.state.whichType === "month" && this.state.whichType !== prevstate.whichType) {
            let date = new Date()
            let month = date.getUTCFullYear() + (date.getMonth() < 10 ? "-0" : "-") + (date.getMonth() + 1);
            this.setState({ date: month });
        }

        if (this.state.whichType === "date" && this.state.whichType !== prevstate.whichType) {
            let date = new Date().toISOString().split('T')[0];
            this.setState({ date: date });
        }

        if (prevprops.device !== this.props.device || prevstate.date !== this.state.date) {
            this.dateTypecCondition()
        }

    }

    componentDidMount() {
        if (this.props.device !== undefined) {
            this.dateTypecCondition()
        }
    }

    //others
    updateDay() {
        postDeviceDayShow(this.props.device, this.state.date, this.props.token)
            .then(result => this.handleStat(result))
            .then(this.setState({ isLoading: false }));
    }

    updateMonth() {
        postDeviceMonthShow(this.props.device, this.state.date, this.props.token)
            .then(result => this.handleStat(result))
            .then(this.setState({ isLoading: false }));
    }

    dateTypecCondition() {
        if (this.state.whichType === "date") {
            this.updateDay();
        }
        else if (this.state.whichType === "month") {
            this.updateMonth();
        }
    }
    handleDate(newDate) {
        this.setState({ date: newDate });
    }

    handleWhichType(type) {
        this.setState({ whichType: type });
    }

    handleStat(result) {
        this.setState({ statDay: result });
    }

    handleDateAction(operation) {
        let date = new Date(this.state.date)
        

        if (this.state.whichType === "month") {
            (operation === "addition" ? date.setMonth(date.getMonth() + 1): date.setMonth(date.getMonth() - 1));
            this.setState({date: date.toISOString().split('T')[0].match(/(^[0-9 -]{5})\w+/)[0]})
        }

        if (this.state.whichType === "date") {
            (operation === "addition" ? date.setDate(date.getDate() + 1): date.setDate(date.getDate() - 1));
            this.setState({date: date.toISOString().split('T')[0]})
        }
    }

    render() {


        return (
            <div>
                
                <DateSwitch date={this.state.date}
                    onChangeDate={this.handleDate}
                    type={this.state.whichType}
                    onChangeType={this.handleWhichType} 
                    action={this.handleDateAction}/>


                <Chart data={this.state.statDay} yTitle={"Consumption"} xTitle={this.state.whichType}></Chart>
                
            </div>
        );
    }

}
export default Display;