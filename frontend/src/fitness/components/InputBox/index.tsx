import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axiosInstance from '../../../utils/axios';

type Input = {
  qty: number
}

const InputBox: React.FC = (prop) => {

  const [loading, setLoading] = useState(false)

  const validationSchema = Yup.object().shape({
    qty: Yup.number().required('Must input a value.')
  });

  const { register, handleSubmit, formState:{errors} } = useForm<Input>(
    {resolver: yupResolver(validationSchema)}
  );

  const formSubmit: SubmitHandler<Input> = qty => {
    setLoading(true);
    axiosInstance
      .post(`fitness/${prop}/`, qty)
      .then(res => {
        console.log(res);
        setLoading(false);
      })
  };

  return (
    <Form noValidate onSubmit={handleSubmit(formSubmit)}>
      <Form.Label><h3>Data Input</h3></Form.Label>
      <Form.Control type='number' {...register('qty')} className={`form-control ${errors.qty ? 'is-invalid' : ""}`}/>
      <Form.Control.Feedback className="invalid-feedback">{errors.qty?.message}</Form.Control.Feedback>
      <Button type="submit" disabled={loading}>Submit Form</Button>
    </Form>
  )
}

export default InputBox;