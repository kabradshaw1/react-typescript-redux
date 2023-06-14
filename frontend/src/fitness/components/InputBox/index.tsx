import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axiosInstance from '../../../utils/axios';

type Input = {
  data: number
}

const InputBox: React.FC = () => {

  const [loading, setLoading] = useState(false)

  const validationSchema = Yup.object().shape({
    data: Yup.string().required('Must input a value.')
  })

  const { register, handleSubmit, formState:{errors} } = useForm<Input>(
    {resolver: yupResolver(validationSchema)}
  );

  const formSubmit: SubmitHandler<Input> = data => {

  };

  return (
    <Form>
      <Form.Label><h3></h3></Form.Label>
    </Form>
  )
}

export default InputBox;