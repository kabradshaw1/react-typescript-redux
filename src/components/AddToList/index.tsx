import React, {useState} from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


type Input = {
  example: string,
  exampleRequired: string
}

const AddToList = () => {

  
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = data => console.log(data);

  console.log(watch('example'));

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control defaultValue='test' {...register('example')}/>
        <Form.Label>Age</Form.Label>
        <Form.Control {...register('exampleRequired', { required: true})}/>
        {errors.exampleRequired && <span>This field is required</span>}
        <Button type='submit'>Submit</Button>
      </Form.Group>
    </Form>
  )
}

export default AddToList;


  // const [input, setInput] = useState({name:"", age: "", note: "", img: ""})

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInput({
  //     ...input,
  //     [e.target.name]: e.target.value
  //   })
  // }