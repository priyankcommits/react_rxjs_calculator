import Form from 'react-bootstrap/Form';
import React, { useEffect, useRef } from 'react';
import Row from 'react-bootstrap/Row';

import numberEvent$ from '../events';

function InputBox() {

  const inputValueRef = useRef("0");

  const changeInputValue = value => {
    inputValueRef.current.value =  "0";
  }

  useEffect(() => {
    numberEvent$.subscribe(({value, type}) => {
      console.log(value, type);
    });
    return () => numberEvent$.unsubscribe();
  }, []);

  console.log('Rendering InputBox')
  return (
    <Row>
      <Form.Control className='mx-3' size="md" type="text" ref={inputValueRef}/>
    </Row>
  )
}

export default InputBox;