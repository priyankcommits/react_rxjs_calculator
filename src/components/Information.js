// Component to show key board shorts cuts
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';

function Information(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='dark' onClick={handleShow} size='sm' className='m-1 ml-3'>
        i
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Keyboard Shorcuts
            <Badge variant='secondary' className='ml-2'>
              <h6>
                Button : Shortcut
              </h6>
            </Badge>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
              {props.buttons.map((button, index) => (
                <Col xs={4} className='my-1' key={index}>
                  <Badge variant='secondary'>
                    <h5>
                      {button.value.name} : {button.keyEvent}
                    </h5>
                  </Badge>
                </Col>
              ))}
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Information;
