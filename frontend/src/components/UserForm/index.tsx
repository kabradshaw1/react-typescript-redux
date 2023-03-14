import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Form, Button, Row, Col } from 'react-bootstrap';
import User from '../../types'
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/slices/userSlice'
import axios from 'axios';

export default function UserForm() {

  const { register, control, handleSubmit, formState:{errors} } = useForm<User>({});

  const displatch = useDispatch();

  const formSubmit = async (data: User) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/create`, {})
    // displatch(addUser(data))
    // console.log(data);

  };

  return (
    <Form noValidate onSubmit={handleSubmit(formSubmit)}>
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
            <Form.Label>Password</Form.Label>
            <Form.Control {...register('password')} type='password'/>
          </Form.Group>
      </Row>
      <Button type="submit">Submit Form</Button>
    </Form>
  );
}
