// Component to show key board shorts cuts
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';

import { RoundedButton } from '../../shared/styles/main/index';

const Information = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='dark' onClick={handleShow} size='sm' className='mt-1 ml-2' as={RoundedButton}>
        <span className='mx-1'>i</span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Keyboard Shorcuts
            <Badge pill variant='success' className='ml-2'>
              Button : Shortcut
            </Badge>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
              {props.buttons.map((button, index) => (
                <Col xs={4} className='mt-1' key={index}>
                  <Badge pill variant='primary'>
                    {button.value.name}
                  </Badge>
                  <span className='mx-1'>:</span>
                  <Badge pill variant='dark'>
                    {button.keyEvent}
                  </Badge>
                </Col>
              ))}
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export { Information };
