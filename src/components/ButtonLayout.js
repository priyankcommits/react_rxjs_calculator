import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Row from 'react-bootstrap/Row';

function ButtonLayout() {
  console.log('Rendering Button Layout');
  return (
    <Row>
      <Col xs={6}>
        <Row>
          <Col xs={2}>
            <Button className='w-100' variant='secondary'>sin</Button>
          </Col>
          <Col xs={2}>
            <Button className='w-100' variant='secondary'>ln</Button>
          </Col>
          <Col xs={2}>
            <Button className='w-100' variant='light'>7</Button>
          </Col>
          <Col xs={2}>
            <Button className='w-100' variant='light'>8</Button>
          </Col>
          <Col xs={2}>
            <Button className='w-100' variant='light'>9</Button>
          </Col>
          <Col xs={2}>
            <Button className='w-100' variant='primary'>/</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default ButtonLayout;
