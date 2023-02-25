import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Container from 'react-bootstrap/Container'
import List from './components/List';

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
interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}
function App() {

  const [people, setPeople] = useState<IState['people']>([]);

  people.map(person => {
    person.name
  })

  return (
    <Container>
      <h1>People Invited to my Party</h1>
      <List people={people}/>
    </Container>
  );
}

export default App;
