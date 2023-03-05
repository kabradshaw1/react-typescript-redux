import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Form, Button, Row, Col } from 'react-bootstrap';
import User from '../../types'

export default function UserForm() {
  const { register, control, handleSubmit, formState:{errors} } = useForm<User>({
    defaultValues: {
      firstName: "",
      age:0,
      email: "",
    },
  });

  const formSubmit = (data: User) => {
    console.log(data);
  };

  return (
    <Form noValidate onSubmit={handleSubmit(formSubmit)}>
      <Row className="mb-3">
        <Form.Group as={Col} md="3">
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
        <Form.Group as={Col} md="3">
          <Form.Label>Age</Form.Label>
          <Controller
            name="age"
            control={control}
            rules={{max:30, min: 20}}
            render={({field}) => (
              <Form.Control 
                isInvalid={errors.age ? true: undefined}
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
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="3">
          <Form.Label>Email</Form.Label>
          <Controller
            name="email"
            control={control}
            rules={{
              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              required: true,
            }}
            render={({field}) => (
              <Form.Control 
                isInvalid={errors.email ? true: undefined}
                type="email" 
                {...field} 
              />
            )}
          />
          {errors.email?.type === "pattern" && (
            <Form.Control.Feedback type="invalid">
              You must enter a valid email.
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>Gender</Form.Label>
          <Form.Select {...register('gender')}>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Button type="submit">Submit Form</Button>
    </Form>
  );
}
