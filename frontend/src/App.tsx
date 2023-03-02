import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import ReservationCard from './components/ReservationCard';
import { Form, Button } from 'react-bootstrap';

interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}
function App() {

  const [reservationNameInput, setRervationNameInput] = useState("")
  const form = useSelector((state: RootState) => state.form.value)
  const reservation = useSelector((state: RootState) => state.reservations.value)
  const [people, setPeople] = useState<IState['people']>([]);

  return (
    <>
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      {form.map(name => {
        <AddToList name={name}/>
      })}
      {reservation.map(name => {
        return <ReservationCard name={name}/>
      })}
    </>
  );
}

export default App;

// Let's say we need to create a function
// that should divide number `a` by number `b`
// and return a round answer.
// export function divide(a: number, b:number): number {
//   // Sure, we cannot divide by 0,
//   // so in this case we will throw an error.
//   if(b === 0) {
//     throw new Error("You can't divide by zero.")
//   }
//   // If everything is okay, we will return
//   // a round division result.
//   return Math.round(a/b);
// }

// export function label(name: string) {
//   return `${name.toUpperCase()}`
// }