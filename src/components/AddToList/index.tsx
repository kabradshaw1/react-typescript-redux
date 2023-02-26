import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap';

const AddToList = () => {

  // const [input, setInput] = useState({name:"", age: "", note: "", img: ""})

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInput({
  //     ...input,
  //     [e.target.name]: e.target.value
  //   })
  // }
  
  return (
    <Form onSubmit={handleChange}>
      <Form.Group>
        <Button type='submit'>Submit</Button>
      </Form.Group>
    </Form>
  )
}