import React, { useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import UserForm from './components/UserForm'



function App() {
  return (
    <UserForm/>
  )
}

export default App;

