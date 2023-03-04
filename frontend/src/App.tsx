import React, { useState } from 'react';
import './App.css';
// import { useSelector, useDispatch } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
// import { RootState } from './app/store';
import { Form, Button, Row, Col } from 'react-bootstrap';

interface FormData {
  firstName: string,
  age: number,
  email: string,
}

function App() {
  const { control, handleSubmit, formState:{errors} } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      age:0,
      email: "",
    },
  });

  const formSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Form noValidate onSubmit={handleSubmit(formSubmit)}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label>First name</Form.Label>
          <Controller 
            name="firstName" 
            control={control} 
            rules={{required:true}} 
            render={({field}) => (
              <Form.Control 
                isInvalid={errors.firstName ? true: undefined} 
                type="text" {...field} 
                placeholder="First name"
              />
            )}
          />
          <Form.Control.Feedback type="invalid">
            First name is required.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Age</Form.Label>
          <Controller
            name="age"
            control={control}
            rules={{max:30, min: 20}}
            render={({field}) => (
              <Form.Control 
                isInvalid={errors.age  ? true: undefined}
                type="text" 
                {...field} 
              />
            )}
          />
          {errors.age?.type === "min" && (
            <Form.Control.Feedback type="invalid">
              Minimum age is 20.
            </Form.Control.Feedback>
          )}
          {errors.age?.type === "max" && (
            <Form.Control.Feedback type="invalid">
              Maximum age is 30
            </Form.Control.Feedback>
          )}
          
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Email</Form.Label>
          <Controller
            name="email"
            control={control}
            rules={{
              pattern: 
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            }}
            render={({ field }) =>(
              <Form.Control
                isInvalid={errors.email ? true: undefined}
                type="text"
                {...field}
              />
            )}
          />
          {errors.email?.type === "pattern" && (
            <Form.Control.Feedback type="invalid">
              Must enter a valid email
            </Form.Control.Feedback>
          )}
        </Form.Group>
      </Row>
      <Button type="submit">Submit Form</Button>
    </Form>
  );
}

export default App;

