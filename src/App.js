import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'; 
import React from 'react';
import Row from 'react-bootstrap/Row';

import ButtonLayout from './components/ButtonLayout';
import InputBox from './components/InputBox';
import OutputBox from './components/OutputBox';
import { AppStyled } from './styles';

function App() {

  console.log('Rendering App')
  return (
    <Container as={AppStyled}>
      <Row className='mt-2'>
        <h3>Calculator using React Hooks + RxJS</h3>
      </Row>
      <Row className='mt-2'>
        <Col md={3}>
          <InputBox />
        </Col>
        <Col md={3}>
          <OutputBox />
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col md={6}>
          <ButtonLayout />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
