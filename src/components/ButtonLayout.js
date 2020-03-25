import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Row from 'react-bootstrap/Row';

import numberEvent$ from '../events';

function ButtonLayout() {
  
  const publishNumberEvent = value => {
    numberEvent$.next(value);
  }
  
  console.log('Rendering Button Layout');
  return (
    <Row>
      <Col xs={2}>
        <Button className='w-100' variant='secondary'>sin</Button>
      </Col>
      <Col xs={2}>
        <Button className='w-100' variant='secondary'>ln</Button>
      </Col>
      <Col xs={2}>
        <Button onClick={() => publishNumberEvent(7)}  className='w-100' variant='light'>7</Button>
      </Col>
      <Col xs={2}>
        <Button onClick={() => publishNumberEvent(8)}  className='w-100' variant='light'>8</Button>
      </Col>
      <Col xs={2}>
        <Button onClick={() => publishNumberEvent(9)}  className='w-100' variant='light'>9</Button>
      </Col>
      <Col xs={2}>
        <Button className='w-100' variant='primary'>/</Button>
      </Col>
    </Row>
  );
}

export default ButtonLayout;
