
import React, { Component } from 'react';
import { getInstallations} from '../service/API';
import Display from './display';
import DropDown from './dropDown';
import Header from './header';
import Loading from './loading';
import Button from './redirectButton';
import styled from 'styled-components';
import {Grid, Row, Col} from "./style";
/*
PROPS: token : token pour l'API
       
RETURN: Vue Global

*/



class GlobalView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            installationsDic: {},
            installation: "default",
            device: undefined,
            response: new Map(),
            isLoading: true,
        }
        this.handleLoading = this.handleLoading.bind(this);
        this.handleDevice = this.handleDevice.bind(this);
        this.handleInstallation = this.handleInstallation.bind(this);
        this.handleInstallationDic = this.handleInstallationDic.bind(this);

    }
    componentDidMount() {
        this.setState({ response: getInstallations(this.handleLoading, this.handleInstallationDic, this.props.token) });
        
    }

    handleInstallationDic(installDic) {
        this.setState({ installationsDic: installDic });
    }

    handleLoading() {
        this.setState({ isLoading: false });

    }

    handleInstallation(install) {
        this.setState({ installation: install });
        this.handleDevice(undefined);
    }

    handleDevice(dev) {
        this.setState({ device: dev });
    }

    render() {



        if (this.state.isLoading) {
            return (
                <Loading></Loading>
            );
        } else {
            this.set = true;
            this.devDic = {};
            if (this.state.installation !== "default") {
                this.set = false;
                let devList = this.state.response.get(this.state.installation);

                for (let dev in devList) {
                    this.devDic[devList[dev]["id"]] = [devList[dev]["description"]]
                }
            }

            if (Object.keys(this.devDic).length === 0) {
                this.set = true;

            }
            
            
            return(
                <div><Header title={"Vue Global"}/>
            <Grid>
                <Row>
                <Col size={1}><DropDown hid={false} value={this.state.installation} optionDic={this.state.installationsDic} onSelect={this.handleInstallation}></DropDown></Col>
                
                <Col size={2}><DropDown hid={this.set} value={this.state.device} optionDic={this.devDic} onSelect={this.handleDevice}></DropDown></Col>
                
                </Row>
            </Grid> 
            {this.state.device !== undefined  && <Display device={this.state.device} token={this.props.token}></Display>}
            </div>);
        }

    }
}
export default GlobalView;