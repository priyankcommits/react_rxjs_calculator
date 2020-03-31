import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Row from 'react-bootstrap/Row';

import { buttonEvent$ } from '../events';

function ButtonLayout(props) {
  
  const publishButtonEvent = (value, type) => {
    buttonEvent$.next({value, type});
  }

  return (
    <div>
      <Row className='mt-2'>
        {props.buttons.map((button, index) => (
          <Col key={index} xs={2} className='my-1'>
            <Button className='w-100' variant={button.color} onClick={() => publishButtonEvent(button.value, button.type)}>
              {button.value.name}
            </Button>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ButtonLayout;
