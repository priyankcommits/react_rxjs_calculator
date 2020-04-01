// Home Container Component
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'; 
import React from 'react';
import Row from 'react-bootstrap/Row';

import  { calculatorButtons } from '../../shared/constants/index';
import { BoxStyle, HomeStyle } from '../../shared/styles/main/index';
import { ButtonLayout, History, Information, InputBox, OutputBox } from '../../components/index';

const Home = () => {

  return (
    <Container as={HomeStyle}>
      <Row className='mt-1'>
        <h3>Calculator using React Hooks + RxJS</h3>
        <Information buttons={calculatorButtons} />
      </Row>
      <Row className='mt-3'>
        <Col md={8}>
          <BoxStyle className='p-1'>
            <Row>
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
          </BoxStyle>
        </Col>
      </Row>
    </Container>
  );
}

export { Home };
