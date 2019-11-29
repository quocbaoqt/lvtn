import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import 'semantic-ui-css/semantic.min.css'
import { Checkbox } from 'semantic-ui-react'
import avatar from './../../assets/img/avatar.jpg'
import { Icon } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
class AllApartment extends Component {
    render() {
        return (
            <div className="fullbody">
                <Row className="fix">
                <Button.Group className="group-but">
    <Button className="white-button">All</Button>
    <Button>Draft</Button>
    <Button>Active</Button>
  </Button.Group>
  <Button.Group className="group-but1">
    <Button className="white-button"><Icon disabled name='list'className="large"/></Button>
    <Button><Icon disabled name='th list'className="large"/></Button>
    
  </Button.Group>
                </Row>
                <Row className="fix ">
    
                <div className="header-all">
                <Checkbox className="header-checkbox"/>
                <Icon disabled name='image'className="header-icon large"/>
                
                </div>
                <p className="header-title">Title</p>
                <p className="header-area">Area</p>
                <p className="header-date">Last modified</p>
                </Row>
                <Row className="fix">
                    <div className="body-all">
                    <Row className="fix">
                    <Checkbox className="check-box"/>
                    <div className="img-container">
                    <img src={avatar} className="all-img"/>
                    
                    </div>
                    <p className="all-title">Căn hộ The EastGate Bình Dương</p>
                    <p className="all-area">Khu A</p>
                    <p className="all-date">29/10/2019</p>
                    <div className="all-buton">
                    <Button 
                                
                                className="green"
                                >Edit <Icon disabled name='pencil' className="icon-but" /></Button>
                    <Icon disabled name='ellipsis vertical' className="all-icon" />
                    </div>
                    
                    </Row>
                    <Row className="fix">
                    <div>
                        
                    </div>
                    <Checkbox className="check-box"/>
                    <div className="img-container">
                    <img src={avatar} className="all-img"/>
                    
                    </div>
                    <p className="all-title">Căn hộ The EastGate Bình Dương</p>
                    <p className="all-area">Khu B</p>
                    <p className="all-date">12/12/2019</p>
                    <div className="all-buton">
                    <Button 
                                
                                className="green"
                                >Edit <Icon disabled name='pencil' className="icon-but" /></Button>
                    <Icon disabled name='ellipsis vertical' className="all-icon" />
                    </div>
                    
                    </Row>
                    <Row className="fix">
                    <Checkbox className="check-box"/>
                    <div className="img-container">
                    <img src={avatar} className="all-img"/>
                    
                    </div>
                    <p className="all-title">Căn hộ The EastGate Bình Dương</p>
                    <p className="all-area">Khu C</p>
                    <p className="all-date">09/06/2019</p>
                    <div className="all-buton">
                    <Button 
                                
                                className="green"
                                >Edit <Icon disabled name='pencil' className="icon-but" /></Button>
                    <Icon disabled name='ellipsis vertical' className="all-icon" />
                    </div>
                    
                    </Row>
                    <Row className="fix">
                    <Checkbox className="check-box"/>
                    <div className="img-container">
                    <img src={avatar} className="all-img"/>
                    
                    </div>
                    <p className="all-title">Căn hộ The EastGate Bình Dương</p>
                    <p className="all-area">Khu D</p>
                    <p className="all-date">25/08/2019</p>
                    <div className="all-buton">
                    <Button 
                                
                                className="green"
                                >Edit <Icon disabled name='pencil' className="icon-but" /></Button>
                    <Icon disabled name='ellipsis vertical' className="all-icon" />
                    </div>
                    
                    </Row>
                    <Row className="fix">
                    <Checkbox className="check-box"/>
                    <div className="img-container">
                    <img src={avatar} className="all-img"/>
                    
                    </div>
                    <p className="all-title">Căn hộ The EastGate Bình Dương</p>
                    <p className="all-area">Khu A</p>
                    <p className="all-date">09/01/2019</p>
                    <div className="all-buton">
                    <Button 
                                
                                className="green"
                                >Edit <Icon disabled name='pencil' className="icon-but" /></Button>
                    <Icon disabled name='ellipsis vertical' className="all-icon" />
                    </div>
                    
                    </Row>
                    <Row className="fix">
                    <Checkbox className="check-box"/>
                    <div className="img-container">
                    <img src={avatar} className="all-img"/>
                    
                    </div>
                    <p className="all-title">Căn hộ The EastGate Bình Dương</p>
                    <p className="all-area">Khu B</p>
                    <p className="all-date">30/05/2019</p>
                    <div className="all-buton">
                    <Button 
                                
                                className="green"
                                >Edit <Icon disabled name='pencil' className="icon-but" /></Button>
                    <Icon disabled name='ellipsis vertical' className="all-icon" />
                    </div>
                    
                    </Row>
                    <Row className="fix">
                    <Checkbox className="check-box"/>
                    <div className="img-container">
                    <img src={avatar} className="all-img"/>
                    
                    </div>
                    <p className="all-title">Căn hộ The EastGate Bình Dương</p>
                    <p className="all-area">Khu B</p>
                    <p className="all-date">05/04/2019</p>
                    <div className="all-buton">
                    <Button 
                                
                                className="green"
                                >Edit <Icon disabled name='pencil' className="icon-but" /></Button>
                    <Icon disabled name='ellipsis vertical' className="all-icon" />
                    </div>
                    
                    </Row>
                    <Row className="fix">
                    <Checkbox className="check-box"/>
                    <div className="img-container">
                    <img src={avatar} className="all-img"/>
                    
                    </div>
                    <p className="all-title">Căn hộ The EastGate Bình Dương</p>
                    <p className="all-area">Khu D</p>
                    <p className="all-date">09/03/2019</p>
                    <div className="all-buton">
                    <Button 
                                
                                className="green"
                                >Edit <Icon disabled name='pencil' className="icon-but" /></Button>
                    <Icon disabled name='ellipsis vertical' className="all-icon" />
                    </div>
                    
                    </Row>
                    
                
                    
                    </div>
                </Row>
            </div>
        );
    }
}

export default AllApartment;