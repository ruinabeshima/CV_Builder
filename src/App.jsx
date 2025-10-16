import General from './components/generalform'
import Education from './components/educationform'
import Title from './components/title'
import NextButton from './components/nextbutton'
import Experience from './components/experienceform'
import "./index.css"
import "./App.css"
import { useState } from 'react'

function App() {("general")
  const [form, setForm] = useState(1);

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleFirstName = (event) => {
    setFirstName(event.target.value)
  }

  const handleMiddleName = (event) => {
    setMiddleName(event.target.value)
  }

  const handleLastName = (event) => {
    setLastName(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleNumber = (event) => {
    setNumber(event.target.value)
  }

  const nextForm = (event) => {
    event.preventDefault()
    setForm(form + 1);
  };

  return (
    <>
      <Title />
      
      {form === 1 && (
        <>
          <General nextForm = {nextForm} firstName={firstName} middleName = {middleName} lastName = {lastName} email = {email} number = {number} handleFirstName = {handleFirstName} handleMiddleName = {handleMiddleName} handleLastName = {handleLastName} handleEmail = {handleEmail} handleNumber = {handleNumber}/>
          <NextButton nextForm = {nextForm} />
        </>
      )}
      {form === 2 && (
        <>
          <General firstName={firstName} middleName = {middleName} lastName = {lastName} email = {email} number = {number} handleFirstName = {handleFirstName} handleMiddleName = {handleMiddleName} handleLastName = {handleLastName} handleEmail = {handleEmail} handleNumber = {handleNumber}/>
          <Education nextForm = {nextForm} />
          <NextButton nextForm = {nextForm} />
        </>
      )}
      {form === 3 && (
        <>
          <General />
          <Education nextForm = {nextForm} />
          <Experience nextForm = {nextForm} />
          <NextButton nextForm = {nextForm} />
        </>
      )}
    </>
  )
}

export default App
