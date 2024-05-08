import React from 'react'
import { Col } from 'react-bootstrap';

const DeviceItem = ({device}) => {
  return (
    <Col md={3}>
       <div>{device.name}</div>
    </Col>
  )
}

export default DeviceItem;