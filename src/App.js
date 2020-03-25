import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'; 
import React from 'react';
import Row from 'react-bootstrap/Row';

import './App.css';
import ButtonLayout from './components/ButtonLayout';
import InputBox from './components/InputBox';

function App() {

  console.log('Rendering App')
  return (
    <Container>
      <Row className='mt-2'>
        <h3>Calculator using React Hooks + RxJS</h3>
      </Row>
      <Row className='mt-2'>
        <Col xs={3}>
          <InputBox />
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col xs={6}>
          <ButtonLayout />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
