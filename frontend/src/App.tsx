import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { Routes, Route, Router } from 'react-router-dom'
import UserForm from './components/UserForm'
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


function App() {

  const nav = useSelector((state: RootState) => state.nav.value);

  return (
    <>
      <Header/>
      {/* <Routes> */}
        <UserForm/>
      {/* </Routes> */}
    </>
  )
}

export default App;

