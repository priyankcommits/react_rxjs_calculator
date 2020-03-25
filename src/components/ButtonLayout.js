import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Row from 'react-bootstrap/Row';

import calculatorButtons from '../constants';
import numberEvent$ from '../events';

function ButtonLayout() {
  
  const publishButtonEvent = (value, type) => {
    numberEvent$.next({value, type});
  }

  let chunkedCalculatorButtons = [];
  for(let i = 0; i < calculatorButtons.length; i += 6)
    chunkedCalculatorButtons.push(calculatorButtons.slice(i, i + 6));

  console.log('Rendering Button Layout');
  return (
    <div>
      {chunkedCalculatorButtons.map((chunk, index) => (
        <Row key={index} className='mt-2'>
          {chunk.map((button, buttonIndex) => (
            <Col key={buttonIndex} xs={2}>
              <Button className='w-100' variant={button.color} onClick={() => publishButtonEvent(button.value, button.type)}>
                {button.value}
              </Button>
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
}

export default ButtonLayout;
