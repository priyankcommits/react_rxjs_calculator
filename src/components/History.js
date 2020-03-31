// Component to show result history
// Listens to output box for results and Publishes to Inputbox for history selection
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import React, { useState, useReducer, useEffect } from 'react';
import { skip } from 'rxjs/operators';

import { resultEvent$, resultSelectionEvent$ } from '../events';

const initialState = {
  entries: [],
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'add':
      return {entries: [...state.entries, action.value]};
    case 'delete':
      let tempStateEntries = [...state.entries];
      tempStateEntries.splice(action.index, 1);
      return {entries: [...tempStateEntries]};
    default:
      return {...state};
  }
}

function History() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [results, setResults] = useReducer(reducer, initialState);

  const selectEntry = (value) => {
    resultSelectionEvent$.next(value);
    handleClose();
  }

  const deleteEntry = (entryIndex) => {
    setResults({index: entryIndex, type: 'delete'});
  }

  useEffect(() => {
    resultEvent$.pipe(skip(1)).subscribe(data => {
      setResults({value: data, type: 'add'});
    });
    return () => {
      resultEvent$.unsubscribe();
    }
  }, []);

  return (
    <>
      <Button variant='dark' onClick={handleShow} size='sm' className='mt-1'>
        h
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Results History
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {results.entries.map((result, index) => (
              <ListGroup.Item key={index}>
                {result.input} : {result.value}
                <Button variant='primary' size='sm' className='ml-2' onClick={() => selectEntry(result.value)}>Select</Button>
                <Button variant='danger' size='sm' className='ml-2' onClick={() => deleteEntry(index)}>Delete</Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default History;