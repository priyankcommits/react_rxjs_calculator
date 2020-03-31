// Main Container Component
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'; 
import React from 'react';
import Row from 'react-bootstrap/Row';

import ButtonLayout from './components/ButtonLayout';
import History from './components/History';
import Information from './components/Information';
import InputBox from './components/InputBox';
import OutputBox from './components/OutputBox';
import calculatorButtons from './constants';
import { AppStyled, BoxStyled } from './styles';

function App() {

  return (
    <Container as={AppStyled}>
      <Row className='mt-2'>
        <h3>Calculator using React Hooks + RxJS</h3>
        <Information buttons={calculatorButtons} />
      </Row>
      <Row className='mt-3'>
        <Col md={6} lg={8}>
          <BoxStyled>
            <Row className='m-1'>
              <Col xs={1}>
                <History />
              </Col>
              <Col md={6}>
                <InputBox />
              </Col>
              <Col md={5}>
                <OutputBox />
              </Col>
              <Col md={12}>
                <ButtonLayout buttons={calculatorButtons} />
              </Col>
            </Row>
          </BoxStyled>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
