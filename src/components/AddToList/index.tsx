import React, {useState} from 'react';

const AddToList = () => {

  const [input, setInput] = useState({name:"", age: "", note: "", img: ""})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div></div>
  )
}