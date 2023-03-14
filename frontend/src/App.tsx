import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { Routes, Route, Router } from 'react-router-dom'
import UserForm from './components/UserForm'
import axios from 'axios';
import AllItems from './components/AllItems';
import ItemsLoadingComponent from './components/ItemsLoadingComponent';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

interface Items {
  price: number,
  name: string,
  description: string,
  category: string,
  quantity: number,
  image: string,
  created: Date,
  updated: Date,
}

interface AppState {
  [
    loading: boolean,
    items: Items | null
  ]
}

function App() {

  const nav = useSelector((state: RootState) => state.nav.value);
  const ItemsLoading = ItemsLoadingComponent(AllItems)
  const [appState, setAppState] = useState<AppState>([
    loading: false,
    items: null
  ]);
  useEffect(() => {
    setAppState({ loading: true });
    axios.get('http://127.0.0.1:8000/api/item')
  })

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

