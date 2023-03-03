import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
import { RootState } from './app/store';
import { Form, Button, Row, Col} from 'react-bootstrap';

type Inputs = {
  firstName: string,
}

function App() {
  const { register, control, handleSubmit} = useForm({
    defaultValues: {
      firstName: ""
    }
  })

  const formSubmit = (data: SubmitHandler<FieldValues>) => {

  }
  return (
    <Form>
      <Row className="mb-3" onSubmit={handleSubmit(formSubmit)}>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Controller name="firstName" control={control}/>
          <Form.Control
            type="text"
            placeholder="First name"
          />
        </Form.Group>
      </Row>
    </Form>
  );
}

export default App;

