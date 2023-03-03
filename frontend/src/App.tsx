import React, { useState } from 'react';
import './App.css';
// import { useSelector, useDispatch } from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
// import { RootState } from './app/store';
import { Form, Button, Row, Col} from 'react-bootstrap';

interface FormData {
  firstName: string
}

function App() {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      firstName: "",
    },
  });

  const formSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Form noValidate onSubmit={handleSubmit(formSubmit)}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Controller name="firstName" control={control} render={({field}) => (<Form.Control type="text" {...field} placeholder="First name"/>)}/>
        </Form.Group>
      </Row>
      <Button type="submit">Submit Form</Button>
    </Form>
  );
}

export default App;

