// Component to display all claculator buttons from constants file
// Publishes button clicks to InputBox
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';

import { buttonEvent$ } from '../../shared/events/index';

const ButtonLayout = (props) => {
  
  const publishButtonEvent = (value, type) => {
    buttonEvent$.next({value, type});
  }

  useEffect(() => {
    let buttonHandlers = [];
    props.buttons.forEach(button => {
      let buttonEventHandler = (event) => {
        if (event.key === button.keyEvent) {
          buttonEvent$.next({value: button.value, type: button.type});
        }
      };
      document.addEventListener('keyup', buttonEventHandler);
      buttonHandlers.push(buttonEventHandler);
    });
    return () => {
      buttonHandlers.forEach(buttonHandler => {
        document.removeEventListener('keyup', buttonHandler);
      });
    }
  }, [props]);

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

export { ButtonLayout };
