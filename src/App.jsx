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
  const [schoolName, setSchoolName] = useState("")
  const [schoolStartDate, setSchoolStartDate] = useState("")
  const [schoolEndDate, setSchoolEndDate] = useState("")
  const [schoolDescription, setSchoolDescription] = useState("")

  const handleFirstName = (event) => {
    setFirstName(event.target.value)
  };

  const handleMiddleName = (event) => {
    setMiddleName(event.target.value)
  };

  const handleLastName = (event) => {
    setLastName(event.target.value)
  };

  const handleEmail = (event) => {
    setEmail(event.target.value)
  };

  const handleNumber = (event) => {
    setNumber(event.target.value)
  };

  const nextForm = (event) => {
    event.preventDefault()
    setForm(form + 1);
  };

  const handleSchoolName = (event) => {
    setSchoolName(event.target.value)
  };

  const handleSchoolStartDate = (event) => {
    setSchoolStartDate(event.target.value)
  };

  const handleSchoolEndDate = (event) => {
    setSchoolEndDate(event.target.value)
  };

  const handleSchoolDescription = (event) => {
    setSchoolDescription(event.target.value)
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

          <Education nextForm = {nextForm} schoolName = {schoolName} handleSchoolName = {handleSchoolName} schoolStartDate = {schoolStartDate} handleSchoolStartDate = {handleSchoolStartDate} schoolEndDate = {schoolEndDate} 
          handleSchoolEndDate = {handleSchoolEndDate} schoolDescription = {schoolDescription} handleSchoolDescription = {handleSchoolDescription} />
          <NextButton nextForm = {nextForm} />
        </>
      )}
      {form === 3 && (
        <>
          <General firstName={firstName} middleName = {middleName} lastName = {lastName} email = {email} number = {number} handleFirstName = {handleFirstName} handleMiddleName = {handleMiddleName} handleLastName = {handleLastName} handleEmail = {handleEmail} handleNumber = {handleNumber}/>
          
          <Education nextForm = {nextForm}  schoolName = {schoolName} handleSchoolName = {handleSchoolName} schoolStartDate = {schoolStartDate} handleSchoolStartDate = {handleSchoolStartDate} schoolEndDate = {schoolEndDate} 
          handleSchoolEndDate = {handleSchoolEndDate} schoolDescription = {schoolDescription} handleSchoolDescription = {handleSchoolDescription}/>
          <Experience nextForm = {nextForm} />
          <NextButton nextForm = {nextForm} />
        </>
      )}
    </>
  )
}

export default App
