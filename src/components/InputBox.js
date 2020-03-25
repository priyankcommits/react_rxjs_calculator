import Form from 'react-bootstrap/Form';
import React, { useEffect, useRef } from 'react';
import Row from 'react-bootstrap/Row';

import numberEvent$ from '../events';

function InputBox() {

  const inputValueRef = useRef(0);

  const changeInputValue = value => {
    inputValueRef.current.value =  `${inputValueRef.current.value}${value}`;
  }

  useEffect(() => {
    numberEvent$.subscribe(number => {
      changeInputValue(number)
    });
    return () => numberEvent$.unsubscribe();
  }, []);

  console.log('Rendering InputBox')
  return (
    <Row>
      <Form.Control className='mx-3' size="md" type="text" ref={inputValueRef} value={inputValueRef.current.value} />
    </Row>
  )
}

export default InputBox;