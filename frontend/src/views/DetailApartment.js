import React, { Component } from 'react';
import { Button, Label } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { Icon } from 'semantic-ui-react'
import { Container, Row, Col } from 'react-grid-system';
import cover from './../assets/img/cover.png';
import slider1 from './../assets/img/slider1.png';
import slider2 from './../assets/img/slider2.png';
import slider3 from './../assets/img/slider3.png';
import slider4 from './../assets/img/slider4.png';
import slider5 from './../assets/img/slider5.png';
import slider6 from './../assets/img/slider6.png';
import Carousel from "react-multi-carousel";
import map from './../assets/img/map.png'
import "react-multi-carousel/lib/styles.css";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class DetailApartment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false,
        }
    }
    mapStyles = {
        width: '100%',
        height: '100%',
      };
    responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          paritialVisibilityGutter: 60
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          paritialVisibilityGutter: 50
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          paritialVisibilityGutter: 30
        }
      };

      hide = () => {
        this.setState({ visible: false });
    }
    show = () => {
        this.setState({ visible: true });
    }


    render() {
        return (
            <div className="detail-bid">
                <Row className="fix header-detail">
                    <Col xl={6} className="logo">LOGO</Col>
                    <Col xl={6}>
                    <ul className="header-menu">
                <li>Home</li>
                <li>Appartments</li>
                <li>Contact us</li>
                <li>Sign In</li>
                </ul>
                    </Col>
                </Row>
                <div className="img-cover">
                <img src={cover} className=""/>
                </div>
                <Carousel
    additionalTransfrom={0}
    arrows
    autoPlaySpeed={3000}
    centerMode={false}
    className=""
    containerClass="container-with-dots"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite={true}
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 4,
        partialVisibilityGutter: 40
      },
      
    }}
    showDots={false}
    sliderClass=""
    slidesToSlide={1}
    swipeable
  >
    <img src={slider1} className=""/>
    <img src={slider2} className=""/>
    <img src={slider3} className=""/>
    <img src={slider4} className=""/>
    <img src={slider3} className=""/>
    <img src={slider5} className=""/>
    <img src={slider1} className=""/>
  </Carousel>
                
                <div className="detail-container">
                {/* <div className="slider-container">
                <Carousel
                    ssr
                    partialVisbile
                    responsive={this.responsive}
                >
                    <img src={slider1} className="slide-img"/>
                    <img src={slider2} className="slide-img"/>
                    <img src={slider3} className="slide-img"/>
                    <img src={slider4} className="slide-img"/>
                    <img src={slider5} className="slide-img"/>
                    <img src={slider6} className="slide-img"/>
                </Carousel>
                </div> */}
                <Row className="detail-body fix">
                    <Col className="rm-col-padding" xl={8}>
                    <h1 className="detail-title">Lorem ipsum dolor sit amet, consectetur adipiscing</h1>
                    <p className="detail-parap">Sed ut perspiciatis unde omnis iste natus error sit volu
                        ptatem accusantium doloremque laudantium, totam rem ap
                        eriam, eaque ipsa quae ab illo inventore veritatis et quas
                        i architecto beatae vitae dicta sunt explicabo.
                    Nunc nec feugiat lectus. Curabitur at sollicitu
                    din odio. Ut vitae lectus non nunc elei
                    fend bibendum quis vitae est. Aenean quis libero ullamcorper, sodales ris
                    us vitae, euismod mi. Integer porttitor mauris urna, et auctor leo fermentum ac.
                    </p>
                    <p className="readermore">Readmore<Icon name="dropdown"></Icon></p>
                    </Col>
                    <Col className="rm-col-padding" xl={4}>
                    <div className="detail-price">
                        <h1 className="prices">$2000/month</h1>
                        <Button className="pink detail-bt">50% off for first month</Button>
                        <Button className="brown detail-bt contac-bt large">CONTACT US NOW </Button>
                    </div>
                    </Col>
                </Row>
                <div className="detail-rooms">
                <Row className="fix">
                    <Col className="rm-col-padding" xl={4}>
                        <div className="room">
                        <Row className="fix">
                            <Col className="rm-col-padding" xl={6}>
                                <h1 className="number">2</h1>
                                <p className="readermore romname">Floors</p>
                            </Col>
                            <Col xl={6}>
                                <Icon name="tv big iconroom grey"/>
                            </Col>
                        </Row>
                        </div>
                    </Col>
                    <Col className="rm-col-padding" xl={4}>
                    <div className="room">
                        <Row className="fix">
                            <Col className="rm-col-padding" xl={6}>
                                <h1 className="number">3</h1>
                                <p className="readermore romname">Berrooms</p>
                            </Col>
                            <Col xl={6}>
                                <Icon name="food big iconroom grey"/>
                            </Col>
                        </Row>
                        </div>
                    </Col>
                    <Col className="rm-col-padding" xl={4}>
                    <div className="room">
                        <Row className="fix">
                            <Col className="rm-col-padding" xl={6}>
                                <h1 className="number">1</h1>
                                <p className="readermore romname">Kitchen</p>
                            </Col>
                            <Col xl={6}>
                                <Icon name="tv big iconroom grey"/>
                            </Col>
                        </Row>
                        </div>
                    </Col>
                </Row>
                <Row className="fix under-room">
                    <Col className="rm-col-padding" xl={4}>
                        <div className="room">
                        <Row className="fix">
                            <Col className="rm-col-padding" xl={6}>
                                <h1 className="number">2</h1>
                                <p className="readermore romname">Floors</p>
                            </Col>
                            <Col xl={6}>
                                <Icon name="tv big iconroom grey"/>
                            </Col>
                        </Row>
                        </div>
                    </Col>
                    <Col className="rm-col-padding" xl={4}>
                    <div className="room">
                        <Row className="fix">
                            <Col className="rm-col-padding" xl={6}>
                                <h1 className="number">3</h1>
                                <p className="readermore romname">Berrooms</p>
                            </Col>
                            <Col xl={6}>
                                <Icon name="food big iconroom grey"/>
                            </Col>
                        </Row>
                        </div>
                    </Col>
                    <Col className="rm-col-padding" xl={4}>
                    <div className="room">
                        <Row className="fix">
                            <Col className="rm-col-padding" xl={6}>
                                <h1 className="number">1</h1>
                                <p className="readermore romname">Kitchen</p>
                            </Col>
                            <Col xl={6}>
                                <Icon name="tv big iconroom grey"/>
                            </Col>
                        </Row>
                        </div>
                    </Col>
                </Row>
                
                </div>
                <div className="furniture-body">
                    <h1 className="furniture-title">Furniture</h1>
                    <div className="list-furniture">
                        <Row className="fix">
                            <Col className="rm-col-padding" xl={3}>
                            <Icon name="check large brown"></Icon><label className="fur">Heater</label>
                            </Col>
                            <Col className="rm-col-padding" xl={3}>
                            <Icon name="check large brown"></Icon><label className="fur">Shower</label>
                            </Col>
                            <Col className="rm-col-padding" xl={3}>
                            <Icon name="check large brown"></Icon><label className="fur">Bed</label>
                            </Col>
                            <Col className="rm-col-padding" xl={3}>
                            <Icon name="x large "></Icon><label className="fur">TV</label>
                            </Col>
                        </Row>
                        <Row className="fix">
                            <Col className="rm-col-padding" xl={3}>
                            <Icon name="check large brown"></Icon><label className="fur">Televison</label>
                            </Col>
                            <Col className="rm-col-padding" xl={3}>
                            <Icon name="check large brown"></Icon><label className="fur">Lamp</label>
                            </Col>
                            <Col className="rm-col-padding" xl={3}>
                            <Icon name="x large"></Icon><label className="fur">Desk</label>
                            </Col>
                            <Col className="rm-col-padding" xl={3}>
                            <Icon name="check large brown"></Icon><label className="fur">Toilet</label>
                            </Col>
                        </Row>
                        <Row className="fix">
                            <Col className="rm-col-padding" xl={3}>
                            <Icon name="x large "></Icon><label className="fur">Wifi</label>
                            </Col>
                            <Col className="rm-col-padding" xl={3}>
                            <Icon name="check large brown"></Icon><label className="fur">Shower</label>
                            </Col>
                            <Col className="rm-col-padding" xl={3}>
                            <Icon name="x large"></Icon><label className="fur">Bed</label>
                            </Col>
                            <Col className="rm-col-padding" xl={3}>
                            <Icon name="check large brown"></Icon><label className="fur">Air conditionor</label>
                            </Col>
                        </Row>
                    </div>
                </div>
                <h1 className="furniture-title Gallerry">Gallerry</h1>
                <Row className="fix ">
                    <Col xl={3} className="gallary-but"><Button className="ui button medium ">ALL</Button></Col>
                    <Col xl={3} className="gallary-but"><Button className="ui button medium">LIVING</Button></Col>
                    <Col xl={3} className="gallary-but"><Button className="ui button medium">KITCHEN</Button></Col>
                    <Col xl={3} className="gallary-but"><Button className="ui button medium">DINNING</Button></Col>
                </Row>
                <Row className="fix  gallary-pic">
                    <Col xl={3} className="rm-col-padding pic-pd"><img src={slider1} className="all-img"/></Col>
                    <Col xl={3} className="rm-col-padding pic-pd"><img src={slider2} className="all-img"/></Col>
                    <Col xl={3} className="rm-col-padding pic-pd"><img src={slider3} className="all-img"/></Col>
                    <Col xl={3} className="rm-col-padding pic-pd"><img src={slider4} className="all-img"/></Col>
                </Row>
                <Row className="fix pic-mg">
                    <Col xl={3} className="rm-col-padding pic-pd"><img src={slider5} className="all-img"/></Col>
                    <Col xl={3} className="rm-col-padding pic-pd"><img src={slider4} className="all-img"/></Col>
                    <Col xl={3} className="rm-col-padding pic-pd"><img src={slider3} className="all-img"/></Col>
                    <Col xl={3} className="rm-col-padding pic-pd"><img src={slider2} className="all-img"/></Col>
                </Row>
                
                <Row className="fix pic-mg">
                    <Col xl={3} className="rm-col-padding pic-pd"><img src={slider1} className="all-img"/></Col>
                    <Col xl={3} className="rm-col-padding pic-pd"><img src={slider5} className="all-img"/></Col>
                    <Col xl={3} className="rm-col-padding pic-pd"><img src={slider3} className="all-img"/></Col>
                    <Col xl={3} className="rm-col-padding pic-pd"><img src={slider2} className="all-img"/></Col>
                </Row>
                <div className="furniture-body">
                    <h1 className="furniture-title">Services</h1>
                    <div className="list-furniture">
                        <Row className="fix">
                            <Col className="rm-col-padding" xl={3}>
                            <label className="fur ser">Internet</label>
                            </Col>
                            <Col className="rm-col-padding" xl={3}>
                            <label className="fur ser">Clean up</label>
                            </Col>
                            <Col className="rm-col-padding" xl={3}>
                            <label className="fur ser">Yoga </label>
                            </Col>
                            <Col className="rm-col-padding" xl={3}>
                            <label className="fur ser">Wifi</label>
                            </Col>
                        </Row>
                        <Row className="fix">
                            <Col className="rm-col-padding" xl={3}>
                            <label className="fur ser">Pool</label>
                            </Col>
                            <Col className="rm-col-padding" xl={3}>
                            <label className="fur ser">Washing</label>
                            </Col>
                            <Col className="rm-col-padding" xl={3}>
                            <label className="fur ser">Lift</label>
                            </Col>
                            <Col className="rm-col-padding" xl={3}>
                            <label className="fur ser">Bool</label>
                            </Col>
                        </Row>
                        <Row className="fix">
                            <Col className="rm-col-padding" xl={3}>
                            <label className="fur ser">Gym </label>
                            </Col>
                            <Col className="rm-col-padding" xl={3}>
                            <label className="fur ser">Parking lot</label>
                            </Col>
                            <Col className="rm-col-padding" xl={3}>
                            <label className="fur ser">Gym</label>
                            </Col>
                            <Col className="rm-col-padding" xl={3}>
                            <label className="fur ser">Security</label>
                            </Col>
                        </Row>
                        <Row className="fix">
                            <Col className="rm-col-padding" xl={3}>
                            <label className="fur ser">Gym </label>
                            </Col>
                            <Col className="rm-col-padding" xl={3}>
                            <label className="fur ser">Parking lot</label>
                            </Col>
                            <Col className="rm-col-padding" xl={3}>
                            <label className="fur ser">Gym</label>
                            </Col>
                            <Col className="rm-col-padding" xl={3}>
                            <label className="fur ser">Security</label>
                            </Col>
                        </Row>
                        <Button className="ui button medium ser-more" onClick={this.show}>More details</Button>
                    </div>
                </div>
                
                </div>
                
                <Row className="fix">
                    <Col xl={7} className="rm-col-padding   ">
                    <img src={map} className="map"/>
                    </Col>
                    <Col xl={5} className="rm-col-padding">
                        <div className="local-detail">
                        <h1 className="furniture-title">Location</h1>
                        <p className="del-adress">215 Vo Van Ngan Street, Binh Tho Ward, Thu Duc District, Ho Chi Minh City 70000, Vietnam.</p>
                        <p className="del-notes">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <Row className="fix">
                            <Col xl={6} className="col-map">
                            <Icon name="shopping cart large "></Icon><label className="pos">Market</label>
                            
                            </Col>
                            <Col xl={6} className="col-map">
                            <Icon name="plane large "></Icon><label className="pos">Airport</label>
                            
                            </Col>
                            
                        </Row>
                        <Row className="fix">
                            <Col xl={6} className="col-map">
                            <Icon name="bus large "></Icon><label className="pos">Bus stop</label>
                            
                            </Col>
                            <Col xl={6} className="col-map">
                            <Icon name="graduation cap large "></Icon><label className="pos">School</label>
                            
                            </Col>
                            
                        </Row>
                        
                        </div>
                    </Col>
                    
                </Row>
                <div className="detail-container">
                <h1 className="furniture-title  mg-top">Review</h1>
                <Row className="fix">
                    <Col xl={6} className="name-input rm-col-padding">
                        <label className="review-name">Name*</label>
                        <input className="review-input"></input>
                    </Col>
                    <Col xl={6} className="name-input rm-col-padding">
                        <label className="review-name">Email*</label>
                        <input className="review-input"></input>
                    </Col>
                    
                </Row>
                <div className="name-input">
                <label className="review-rate">Rating*</label>
                <Rater total={5} rating={0} />
                </div>
                <Row className="fix">
                    <Col xl={12} className="name-input rm-col-padding">
                        <label className="review-name">Review*</label>
                        <input className="review-int"></input>
                    </Col>
                </Row>
                <div className="related">
                <h1 className="realted-title">Related Appartments</h1>
                <Row className="fix">
                    <Col xl={3} className=" rm-col-padding pic-pd1">
                    <img src={slider5} className="all-img"/>
                    <p className="relate-desc">99m2 2 Bedroom aparment LAND81, tallest in VN</p>
                    <p className="related-local">Binh Thanh, Ho Chi Minh, Viet Nam</p>
                    </Col>
                    <Col xl={3} className=" rm-col-padding pic-pd1">
                    <img src={slider3} className="all-img"/>
                    <p className="relate-desc">99m2 2 Bedroom aparment LAND81, tallest in VN</p>
                    <p className="related-local">Binh Thanh, Ho Chi Minh, Viet Nam</p>
                    </Col>
                    <Col xl={3} className=" rm-col-padding pic-pd1">
                    <img src={slider4} className="all-img"/>
                    <p className="relate-desc">99m2 2 Bedroom aparment LAND81, tallest in VN</p>
                    <p className="related-local">Binh Thanh, Ho Chi Minh, Viet Nam</p>
                    </Col>
                    <Col xl={3} className=" rm-col-padding pic-pd1">
                    <img src={slider2} className="all-img"/>
                    <p className="relate-desc">99m2 2 Bedroom aparment LAND81, tallest in VN</p>
                    <p className="related-local">Binh Thanh, Ho Chi Minh, Viet Nam</p>
                    </Col>
                </Row>
                </div>
                </div>
                <div className="footer">
                <ul className="footer-menu">
                <li>Home</li>
                <li>Appartments</li>
                <li>Contact us</li>
                <li>Sign In</li>
                </ul>
                <p className="coppyright">2019 © BK Apartaments</p>
                </div>
                <Rodal visible={this.state.visible} onClose={this.hide.bind(this)} width={1000} height={550} className="">
                    <h1 className="furniture-title rodal-title">Services</h1>
                    <table className="table-rodal">
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Unit</th>
                        </tr>
                        <tr>
                            <td>Internet</td>
                            <td>High speed internet. Minimum of 50 Mbps.</td>
                            <td>$20</td>
                            <td>Month</td>
                        </tr>
                        <tr>
                            <td>Clean up</td>
                            <td>Hire staff to clean the apartment.</td>
                            <td>$10</td>
                            <td>Request</td>
                        </tr>
                        <tr>
                            <td>Internet</td>
                            <td>High speed internet. Minimum of 50 Mbps.</td>
                            <td>$20</td>
                            <td>Month</td>
                        </tr>
                        <tr>
                            <td>Security</td>
                            <td>Security guards to ensure security for the apartment.</td>
                            <td>Free</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Gym</td>
                            <td>Hire staff to clean the apartment.</td>
                            <td>$30</td>
                            <td>Month</td>
                        </tr>
                        <tr>
                            <td>Clean up</td>
                            <td>Hire staff to clean the apartment.</td>
                            <td>$10</td>
                            <td>Request</td>
                        </tr>
                        <tr>
                            <td>Internet</td>
                            <td>High speed internet. Minimum of 50 Mbps.</td>
                            <td>$20</td>
                            <td>Month</td>
                        </tr>
                    </table>
                        <Button className="ui button medium close-btn" onClick={this.hide}>Close</Button>
                </Rodal>  
                


                
                
            </div>
        );
    }
}

export default DetailApartment;