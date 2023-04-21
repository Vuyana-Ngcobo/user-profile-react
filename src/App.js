import React, { useState } from "react";
import axios from 'axios'

function UserForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log("Name:", name);
    //console.log("Surname:", surname);
    //console.log("Age:", age);
    const user = {
      "FirstName": name,
      "LastName": surname,
      "Age": age
    };

    axios.post(`https://localhost:44374/api/PersonalInformation`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  };

  return (
    <form onSubmit={handleSubmit}>
      <h>Personal Information</h>
      <br></br>
      <br></br>
      <br></br>

      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br></br>

      <label>
        Surname:
        <input type="text" value={surname} onChange={handleSurnameChange} />
      </label>
      <br></br>

      <label>
        Age:
        <input type="number" value={age} onChange={handleAgeChange} />
      </label>
      <br></br>
      <br></br>
      

      <button type="submit">Submit</button>
      <button type="view">View</button>

    </form>
  );
}

export default UserForm;
