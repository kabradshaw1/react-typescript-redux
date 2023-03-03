import React, { useState } from 'react';
import './App.css';
// import List from './components/List';
// import AddToList from './components/AddToList';
import { useSelector, useDispatch } from 'react-redux';
import { addReservation } from './features/reservationSlice';
import { RootState } from './app/store';
import ReservationCard from './components/ReservationCard';

import { Form, Button } from 'react-bootstrap';

// import { useForm } from 'react-hook-form'; 


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
  // const { register, handleSubmit, watch, formState: { errors } } = useForm()

  // const form = useSelector((state: RootState) => state.form.value)
  
  // const [people, setPeople] = useState<IState['people']>([]);

  // This is using the method that Laith Academy used
  const dispatch = useDispatch();

  const [reservationNameInput, setReservationNameInput] = useState("");

  const reservation = useSelector((state: RootState) => state.reservations.value);

  const handleAddReservations = () => {
    if(!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("")
  };

  return (
    <div>
      {reservation.map((name, index) => {
        return <ReservationCard name={name} index={index}/>
      })}
           <div>
            <input
              value={reservationNameInput}
              onChange={(e) => {
                setReservationNameInput(e.target.value);
              }}
            />
            <button onClick={handleAddReservations}>Add</button>
          </div>
    </div>
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
{/* <h1>People Invited to my Party</h1>
<List people={people}/>
{form.map(name => {
  <AddToList name={name}/>
})} */}