import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {useForm} from 'react-hook-form';
import { RootState } from './app/store';
import { Form, Button } from 'react-bootstrap';

function App() {
  const {register} = useForm()

  return (
    <div>
      <input {...register("userName")} placeholder="username" />
    </div>
  );
}

export default App;

