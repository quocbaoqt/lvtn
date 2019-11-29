import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import { Container, Row, Col } from 'react-grid-system';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { Icon } from 'semantic-ui-react'
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
export default class AddNewAppartment extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selectValueType: 'Chosen Type',
          selectValueRanking: 'Chosen Ranking',
          selectValueStatus: 'Chosen Status',
          selectNumberLiving: 'Chosen Number',
          selectNumberBed: 'Chosen Number',
          selectNumberToilet: 'Chosen Number',
          selectNumberDining: 'Chosen Number',
          selectNumberBath: 'Chosen Number',
          selectNumberKitchen: 'Chosen Number',
          seletValuecity: 'Chosen City',
          seletValueDis: 'Chosen Dis',
          apartmentName: '',
          price: '',
          address: '',
          localNotes: '',
          imgFile1: null,
          imgFile2: null,
          imgFile3: null,
          imgFile1Blob: null,
          imgFile2Blob: null,
          imgFile3Blob: null,
          vidFile1: null,
          vidFile2: null,
          vidFile1Blob: null,
          vidFile2Blob: null,
          visible: false,
          furnitureOptions : [
            { value: 'Bed', label: 'Bed' },
            { value: 'Air conditioner', label: 'Air conditioner' },
            { value: 'Refrigerator', label: 'Refrigerator' },
            { value: 'Closet', label: 'Closet' },
            { value: 'Televison', label: 'Televison' },
            { value: 'Bath', label: 'Bath' },
            { value: 'Sofa', label: 'Sofa' },
            { value: 'Lamp', label: 'Lamp' },
            { value: 'Mat', label: 'Mat' },
            { value: 'Chandeliers', label: 'Chandeliers' },
            { value: 'Mirror', label: 'Mirror' },
            { value: 'Shower', label: 'Shower' },
            { value: 'Towel', label: 'Towel' }
          ],
          listServices: [],
          serviceName: '',
          servicePrice: '',
          numServices: 1,
          furnitures: [],
        }
        this.inputOpenImgRef = React.createRef()
        this.inputOpenVidRef = React.createRef()
        this.animatedComponents = makeAnimated();
    }



    hide() {
        this.setState({ visible: false });
    }
    
    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    addNewService = () =>{
        let numServices = this.state.numServices;
        
        let newList = []
        while(numServices--){
            newList.push(
                <div key={numServices}>
                <Form.Group controlId={"formserviceName" + numServices} className="seres">
                    <Form.Label>Name: </Form.Label>
                    <Form.Control onChange={(event) => this.handleChange(event)} type="text" name="serviceName" placeholder="Enter Name" className="boder-class service-input" />
                </Form.Group>

                <Form.Group controlId={"formservicePrice" + numServices} className="seres-1">
                    <Form.Label>Price: </Form.Label>
                    <Form.Control onChange={(event) => this.handleChange(event)} type="text" name="servicePrice" placeholder="Enter Price" className="boder-class service-input" />
                </Form.Group>
                </div>
            )
        }
        return newList;
    }

    addservicePrice = async (e) => {
        e.preventDefault();
        // if(this.state.serviceName == "" || this.state.servicePrice == ""){
        //     alert("error")
        //     return
        // }
        // else{
            this.setState({ numServices: this.state.numServices + 1 });
            const serviceToAdd = {
                name: this.state.serviceName,
                price: this.state.servicePrice,
                
            }
            this.setState( await { 
                listServices: [...this.state.listServices, serviceToAdd]
            })
    
        
    }
    

    isFileChange = (event) => {
        if(this.state.imgFile1 == null && this.state.imgFile2 == null && this.state.imgFile3 == null){
            this.setState({
                imgFile1: URL.createObjectURL(event.target.files[0]),
                imgFile1Blob: event.target.files[0]
            });
        }
        else if(this.state.imgFile1 != null && this.state.imgFile2 == null && this.state.imgFile3 == null){
            this.setState({
                imgFile2: URL.createObjectURL(event.target.files[0]),
                imgFile2Blob: event.target.files[0]
            });
        }
        else if(this.state.imgFile1 != null && this.state.imgFile2 != null && this.state.imgFile3 == null){
            this.setState({
                imgFile3: URL.createObjectURL(event.target.files[0]),
                imgFile3Blob: event.target.files[0]
            });
        }
        
    }

    isVidChange = (event) => {
        if(this.state.vidFile1 == null && this.state.vidFile2 == null){
            this.setState({
                vidFile1: URL.createObjectURL(event.target.files[0]),
                vidFile1Blob: event.target.files[0]
            });
        }
        else if(this.state.vidFile1 != null && this.state.vidFile2 == null){
            this.setState({
                vidFile2: URL.createObjectURL(event.target.files[0]),
                vidFile2Blob: event.target.files[0]
            });
        }
    }

    // getBase64 = (file, onLoadCallback) => {

    //     return new Promise( (resolve, reject) => {
    //         var reader = new FileReader();
    //         reader.readAsDataURL(file);
    //         reader.onload = () => {
    //             resolve(reader.result);
    //         };
    //         reader.onerror = reject;
    //     });
    // } 
    
    onChangeMutilFurniture = (option) => {
        this.setState({furnitures:option});

    }

    handleSubmit= async () =>  {
        this.setState({ visible: true });
        let furnitures = [];
        for (const furnitureItem of this.state.furnitures){
            furnitures.push(furnitureItem.value)
        }
        let data = new FormData();  
        if(this.state.imgFile1Blob != null){
            data.append("photos",this.state.imgFile1Blob,"hinh1.jpg")
        }
        else if(this.state.imgFile2Blob != null){
            data.append("photos",this.state.imgFile2Blob,"hinh2.jpg")
        }
        else if(this.state.imgFile3Blob != null){
            data.append("photos",this.state.imgFile3Blob,"hinh3.jpg")
        }
        if(this.state.vidFile1Blob != null){
            data.append("videos",this.state.vidFile1Blob,"clip1.mp4")
        }
        else if(this.state.vidFile2Blob != null){
            data.append("videos",this.state.vidFile2Blob,"clip2.mp4")
        }


        data.append('services',JSON.stringify(this.state.listServices))
        data.append('type',this.state.selectValueType);
        data.append('ranking', this.state.selectValueRanking);
        data.append('status', this.state.selectValueStatus);
        data.append('living_rooms', this.state.selectNumberLiving);
        data.append('toilets', this.state.selectNumberToilet);
        data.append('dining_rooms', this.state.selectNumberDining);
        data.append('bath_rooms', this.state.selectNumberBath);
        data.append('kitchen', this.state.selectNumberKitchen);
        data.append('district',this.state.seletValueDis);
        data.append('title', this.state.apartmentName);
        data.append('price', this.state.price);
        data.append('address', this.state.address);
        data.append('notes', this.state.localNotes);
        data.append('furnitures', furnitures);
        let jsonFile = {
            method: 'POST',
            img: data.getAll('photos'),
            vid: data.getAll('videos'),
            body: JSON.stringify(Object.fromEntries(data)),
        }  
        
        fetch("thiendeptrai",jsonFile)
        console.log(jsonFile.body)
      }
    

    showOpenImgDlg = () => {
        this.inputOpenImgRef.current.click()
    }
    showOpenVidDlg = () => {
        this.inputOpenVidRef.current.click()
    }

    render() {
        
        return (
            <div className="application">
                <Container>
                    <Row>
                        <Col xl={8}><Form>
                            <Form.Group controlId="">
                                <Form.Control required onChange={this.handleChange} type="text" name="apartmentName" required className="apartment-name boder-class" placeholder="Apartment Name"/>
                            </Form.Group>

                            <Form.Group controlId="">
                                <Row>
                                    <Col xl={6}>
                                        <select className="apartment-type boder-class boder-class customSelect" 
                                            onChange={(e) =>{this.setState({selectValueType: e.target.value})}}
                                        >
                                            <option value="1 " >Condominium </option>
                                            <option value="2">Stuido</option>
                                            <option  value="3">Duplexhouse</option>
                                            <option value="4 ">Penthouse </option>
                                            <option selected value="5  ">Apartment  </option>
                                        </select>
                                    </Col>
                                    <Col xl={6}>
                                        <select className="apartment-ranking boder-class customSelect"
                                            onChange={(e) =>{this.setState({selectValueRanking: e.target.value})}}
                                        >
                                            <option value="1"> Premium Apartment</option>
                                            <option value="2">Standard Basic</option>
                                            <option selected value="3">Standard Advanced</option>
                                            <option value="4">Premier</option>
                                            <option value="5">Complex</option>
                                            <option value="6">Economic Advanced</option>    
                                        </select>
                                    </Col>
                                </Row>
                            </Form.Group>

                            <Form.Group className="margin-ne">
                                <Row>
                                    <Col xl={6}>
                                        <Form.Control onChange={this.handleChange} type="" name="price" required className="apartment-price boder-class" placeholder="Input price:           VNĐ/month"/>
                                    </Col>
                                    <Col xl={6}>
                                        <select className="apartment-status boder-class customSelect"
                                            onChange={(e) =>{this.setState({selectValueStatus: e.target.value})}}
                                        >
                                            <option value="1" >On Renting</option>
                                            <option value="2">For Rent</option>
                                        </select>
                                    </Col>
                                </Row>
                            </Form.Group>

                            <Form.Label className="big-lable">Localtion:</Form.Label>
                            <div className="apartment-localtion boder-class">
                                <Row className="fix local-top">
                                    <Col xl={6}>
                                        <Form.Group>
                                            <Form.Label>City:  </Form.Label>
                                
                                            <select className="apartment-city boder-class customSelect"
                                                onChange={(e) =>{this.setState({seletValuecity: e.target.value})}}
                                            >
                                                <option selected value="Ho Chi Minh City">Ho Chi Minh City</option>
                                                <option value="Ha noi">Ha noi</option>
                                                <option  value="Hai phong">Hai phong</option>
                                                <option value="Da Nang">Da Nang</option>
                                                <option value="Can tho">Can tho</option>
                                                <option value="Vung Tau">Vung Tau</option>
                                            </select>
                                        </Form.Group>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Group>
                                            <Form.Label >District:  </Form.Label>
                                            <select className="apartment-dis boder-class customSelect"
                                                onChange={(e) =>{this.setState({seletValueDis: e.target.value})}}
                                            >
                                                <option selected value="Quận 1">Quận 1</option>
                                                <option value="Quận 2">Quận 2</option>
                                                <option value="Quận 3">Quận 3</option>
                                                <option value="Quận 4">Quận 4</option>
                                                <option value="Quận 5">Quận 5</option>
                                                <option value="Quận 6">Quận 6</option>
                                                <option value="Quận 7">Quận 7</option>
                                                <option value="Quận 8">Quận 8</option>
                                                <option value="Quận 9">Quận 9</option>
                                                <option value="Quận 10">Quận 10</option>
                                                <option value="Quận 11">Quận 11</option>
                                                <option value="Quận 12">Quận 12</option>
                                                <option value="Quận Thủ Đức">Quận Thủ Đức</option>
                                                <option value="	Quận Gò Vấp">Quận Gò Vấp</option>
                                                <option value="Quận Bình Thạnh">Quận Bình Thạnh</option>
                                                <option value="	Quận Tân Bình">	Quận Tân Bình</option>
                                                <option value="	Quận Phú Nhuận">Quận Phú Nhuận</option>

                                            </select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="fix addrest">
                                <Form.Label >Address:  </Form.Label>
                                <Form.Control onChange={this.handleChange} type="" name="address" required className="apartment-address boder-class" />
                                </Row>
                                <Row className="fix addrest local-bot">
                                <Form.Label>Notes:  </Form.Label>
                                <textarea  onChange={this.handleChange} name="localNotes" className="apartment-localNote boder-class"></textarea>
                                </Row>
                                
                            </div>

                            <Form.Label className="big-lable">Rooms:</Form.Label>
                            <div className="apartment-rooms boder-class">
                                <Row className="fix roomet">
                                    <Col xl={4}>
                                        <Form.Group >
                                            <Form.Label>Living Room: </Form.Label>
                                            
                                            <select className="apartment-room-child boder-class customSelect"
                                                onChange={(e) =>{this.setState({selectNumberLiving: e.target.value})}}
                                            >
                                                <option selected value="1">1</option>
                                                <option value="2">2</option>
                                                <option  value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                        </Form.Group>
                                    </Col>
                                    <Col xl={4}>
                                        <Form.Group >
                                            <Form.Label>BedRoom: </Form.Label>
                                            
                                            <select className="apartment-room-child boder-class customSelect" 
                                                onChange={(e) =>{this.setState({selectNumberBed: e.target.value})}}
                                            >
                                                <option selected value="1">1</option>
                                                <option value="2">2</option>
                                                <option  value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                        </Form.Group>
                                    </Col>
                                    <Col xl={4}>
                                        <Form.Group>
                                            <Form.Label>Toilet: </Form.Label>
                                            {/* <Form.Control onChange={(event) => this.handleChange(event)} type="email" name="email" required /> */}
                                            <select className="apartment-room-child boder-class customSelect"
                                                onChange={(e) =>{this.setState({selectNumberToilet: e.target.value})}}
                                            >
                                                <option selected value="1">1</option>
                                                <option value="2">2</option>
                                                <option  value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="fix roomet-bot">
                                    <Col xl={4}>
                                        <Form.Group>
                                            <Form.Label>Dining Room: </Form.Label>
                                            {/* <Form.Control onChange={(event) => this.handleChange(event)} type="email" name="email" required /> */}
                                            <select className="apartment-room-child boder-class customSelect"
                                                onChange={(e) =>{this.setState({selectNumberDining: e.target.value})}}
                                            >
                                                <option selected value="1">1</option>
                                                <option value="2">2</option>
                                                <option  value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                        </Form.Group>
                                    </Col>
                                    <Col xl={4}>
                                        <Form.Group >
                                            <Form.Label>Bath Room: </Form.Label>
                                            {/* <Form.Control onChange={(event) => this.handleChange(event)} type="email" name="email" required /> */}
                                            <select className="apartment-room-child boder-class customSelect"
                                                onChange={(e) =>{this.setState({selectNumberBath: e.target.value})}}
                                            >
                                                <option selected value="1">1</option>
                                                <option value="2">2</option>
                                                <option  value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                        </Form.Group>
                                    </Col>
                                    <Col xl={4}>
                                        <Form.Group>
                                            <Form.Label>Kitchen: </Form.Label>
                                            {/* <Form.Control onChange={(event) => this.handleChange(event)} type="email" name="email" required /> */}
                                            <select className="apartment-room-child boder-class customSelect"
                                                onChange={(e) =>{this.setState({selectNumberKitchen: e.target.value})}}
                                            >
                                                <option selected value="1">1</option>
                                                <option value="2">2</option>
                                                <option  value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </div>




                            <Form.Group className="fur">
                                <Form.Label className="big-lable">Furniture: </Form.Label>
                                <Select
                                closeMenuOnSelect={false}
                                components={this.animatedComponents}
                                defaultValue={[this.state.furnitureOptions[4]]}
                                isMulti
                                options={this.state.furnitureOptions}
                                onChange={option => this.onChangeMutilFurniture(option)}
                                />
                            </Form.Group>

                            <Form.Label className="big-lable">Services:</Form.Label>
                            <div className="service boder-class">
                                <Row className="fix">
                                <Col xl={9}>
                            {
                                this.addNewService()
                            }
                                </Col>
                                <Col xl={3}>
                                <button   className="service-buton ui button tiny" onClick={this.addservicePrice} variant="link">Add more service</button>
                                </Col>
                           
                                
                                </Row>
                                
                            
                            </div>
                            


                            

                            

                            <Form.Group>
                                <Row className="fix last-row">
                                <Form.Label  className="big-lable">Other Description: </Form.Label>
                                <textarea className="description" onChange={this.handleChange} name="description"></textarea>
                                </Row>
                                
                            </Form.Group>
                            
                        </Form></Col>
                        <Col xl={4} >
                            <Row className="fix"> 
                                <div className="public-div">
                                <div className="boder-bot">
                                <Form.Label>Public</Form.Label>
                                <Icon disabled name='dropdown' className="large dropdown-but " />
                                </div>
                                <Row className="fix">
                                <button   className="save-buton ui button tiny" >Save Draft</button>
                                <button   className="pre-buton ui button tiny" >Preview</button>
                                </Row>
                                <Button primary
                                onClick={() => this.handleSubmit()}
                                type="submit"
                                className="btn-submit btnSubmit PubButton"
                                >Public</Button>
                                
                                </div>
                            </Row>
                            <Row className="fix">
                            <Form.Group className="Img-div">
                                
                                <div className="boder-bot">
                                <Form.Label>Apartment Image </Form.Label>
                                <Icon disabled name='dropdown' className="large dropdown-but " />
                                </div>

                                <div>
                                <Row className="fix">
                                        <Col xl={4} className="rm-padding">
                                        <img name="img1" id="1" src={this.state.imgFile1} className="img-child"/>
                                        </Col>
                                        <Col xl={4} className="rm-padding">
                                        <img name="img2" id="2" src={this.state.imgFile2} className="img-child"/>    
                                        </Col>
                                        <Col xl={4} className="rm-padding">
                                        <img name="img3" id="3" src={this.state.imgFile3} className="img-child"/>      
                                        </Col>
                                    </Row>  
                                </div>
                                <input ref={this.inputOpenImgRef} onChange={(event) => this.isFileChange(event)} type="file" style={{ display: "none" }} required />
                                <Button primary className="ImgButton" onClick={this.showOpenImgDlg}>Add</Button>
                                          
                                

                            </Form.Group>
                            </Row>
                            <Row className="fix">
                            <Form.Group className="Img-div">
                                
                                <div className="boder-bot">
                                <Form.Label>Apartment Video </Form.Label>
                                <Icon disabled name='dropdown' className="large dropdown-but " />
                                </div>
                                <div>
                                <Row className="fix">
                                        <Col xl={6}>
                                        <video type="video/mp4" id="1" src={this.state.vidFile1} className="img-child" controls/>
                                        </Col>
                                        <Col xl={6}>
                                        <video type="video/mp4" id="2" src={this.state.vidFile2} className="img-child" controls/>    
                                        </Col>
                                    </Row>  
                                </div>
                                <input ref={this.inputOpenVidRef} onChange={(event) => this.isVidChange(event)} type="file" style={{ display: "none" }} required />
                                <Button primary className="ImgButton" onClick={this.showOpenVidDlg}>Add</Button>
                                          
                                

                            </Form.Group>
                            
                            </Row>
                        </Col>
                    </Row>

                </Container>
                <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
                    <Icon name="check circle" className="green massive success-icon"/>
                    <p className="suc-tit">Success</p>
                    <p className="suc-alert">Your Appartment has been posted</p>
                    <Button className="suc-but green" onClick={this.hide.bind(this)}>OK</Button>
                </Rodal>                        
            </div>
        )
    }
}


