import React, { Component } from 'react';
import product1 from '../../imagees/lenovo1.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'
export default class productdetails extends Component {

    constructor(){
        super();
        this.state={
            plus:1,
            minus:1
        }
    }
 adding(){
     this.setState({plus:this.state.plus+1})
 }
    minus(){
        this.setState({plus:this.state.plus-1&&!this.state.plus<0})
    }
    render() {
        return (
            <div >
                <div className="text-center">
                    <h2>Product Details</h2>
                </div>
                <br>
                </br>
                <br></br>
        <Container fluid>
  <Row>
    <Col md={6} className="text-center">
       
  <img
    // width={64}
    // height={64}
    className="mr-5"
    src={product1}
    alt="Generic placeholder"
  />
<div className="fixed=bottom">
    <div className="row">
        <div className="col-12">
        <Card style={{ width: '5rem', height:'5rem' }}>
  <Card.Body>
  <img
    width={50}
    height={50}
    className="mr-5"
    src={product1}
    alt="Generic placeholder"
  />
  </Card.Body>
</Card>

        </div>
      
    </div>



</div>

 

  </Col>
    <Col md={4} className="text-left">
    <Form>
  <Row>
    <Col>
     <h4>Lenovo laptop IDeal pad</h4>
    </Col>
   
  
  </Row>
  <br></br>
  <Row>
    <Col>
  <p>Price:₹100000</p>
  <p>You saved:₹100000</p>
    </Col>
   
  
  </Row>
  <Row>
      <Col>
    <Button size="sm" onClick={()=>this.minus()}>-</Button>
    <input style={{width:'50px'}} value={this.state.plus}/>
    <Button size="sm" onClick={()=>this.adding()}>+</Button>
 
      </Col>
     
      <div className="fixed=bottom">
    <div className="row">
        <div className="col-12 text-center" >
            <br></br>
            <br></br>
            <br></br>
       <Button href="/CustomerDetails">Add to Cart</Button>

        </div>
      
    </div>



</div>

  </Row>
</Form>
    </Col>
  </Row>
  
</Container>
            </div>
        )
    }
}
