import './App.css';
import React, { useState } from 'react';
import Team from './Team';
import Form from './Form';
import axios from './axios'

const teamList = {
  name:"" , 
  email:"" , 
  role:""
}

function App() {
  const [list, setList] = useState([]);
  const [formValues, setFormValues] = useState(teamList)

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]:inputValue})
  }
  const submitForm = () => {

    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    axios.post('fakeapi.com', newTeamMember)
      .then(res => {
        console.log(res);
        const dbList = res.data;
        setList([dbList, ...list]);
        setFormValues(teamList);
      })
      .catch(err => console.error(err))
  }

  


  return (
    <div className="container">
      <Form 
      value={formValues}
      update={updateForm}
      submit={submitForm}
      />
      {
        list.map( data => {
          return(
          <Team key={data.id} data={data} />
          )
        })
      }
    </div>
  );
}

export default App;
