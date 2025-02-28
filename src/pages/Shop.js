import React from 'react';
import {Button, Col, Container, Form} from 'react-bootstrap';
import Row from "react-bootstrap/Row";
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';


const Shop = () => {
  return (
   <Container>
      <Row className='mt-2' >
         <Col md={3}>
            <TypeBar />
         </Col>
         <Col md={9}>
             <BrandBar />
             <DeviceList/>
         </Col>
      </Row>
   </Container>
  )
}

export default Shop