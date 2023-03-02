import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './app/store';
import ReservationCard from './components/ReservationCard';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { addReservation } from './features/reservationSlice';

interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

// type Reservation {

// }

function App() {
  // This is entended to compare how easy it is to use the react-hook-form vs doing it with regular typescript
  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const form = useSelector((state: RootState) => state.form.value)
  
  const [people, setPeople] = useState<IState['people']>([]);

  // This is using the method that Laith Academy used
  const [reservationNameInput, setReservationNameInput] = useState("")

  const reservation = useSelector((state: RootState) => state.reservations.value)

  const dispatch = useDispatch()
  const handleAddReservations = () => {
    if(!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("")
  }

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
      <Form>
        <Form.Group controlId='reservation' onSubmit={}>
          <Form.Label>Add Reservation</Form.Label>
          <Form.Control type='text' placeholder='Enter Name' onChange={(e) => setReservationNameInput(e.target.value)}/>
        </Form.Group>
        <Button type='submit' onClick={handleAddReservations}>Submit</Button>
      </Form>
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