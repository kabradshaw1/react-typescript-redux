import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { constants } from 'http2';

const AddToList = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data: React.FormEvent<HTMLFormElement>) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Button type='submit'>Submit</Button>
      </Form.Group>
    </Form>
  )
}


  // const [input, setInput] = useState({name:"", age: "", note: "", img: ""})

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInput({
  //     ...input,
  //     [e.target.name]: e.target.value
  //   })
  // }