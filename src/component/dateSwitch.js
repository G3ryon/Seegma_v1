import React, { Component } from 'react';
import Input from './input';
import RadioButtons from './radioButtons';
import { Grid, Row, Col } from "./style";
/*
PROPS: onChangeType: Fonction renvoyant le changement de type de date (mensuelle,..)
       type: Type mensuelle,...
       onChangeDate: Fonction renvoyant le changement de date
       date: Date selectionnée
       action: Function transmisse à button pour être executé
       size : taille du champ input
       
RETURN: composant comprenant la gestion de la selection d'une date

*/

class DateSwitch extends Component {


    render() {


        return (
            <div>
                <RadioButtons

                    onChangeOption={this.props.onChangeType}
                    types={["date", "month",]}
                    value={this.props.type}

                />
                <Grid>
                    <Row>
                        <Col size={1}>
                            <button onClick={() => this.props.action("soustraction")}>-</button>
                        </Col>
                        <Col size={2} width={"auto"}>
                            <Input type={this.props.type}
                                onChange={this.props.onChangeDate}
                                value={this.props.date}
                                readonly={false}
                                required={false}
                                size={"90%"}
                            /></Col>
                        <Col size={3}>
                            <button onClick={() => this.props.action("addition")}>+</button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );


    }
}
export default DateSwitch;