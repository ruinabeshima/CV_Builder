import General from './components/generalform'
import Education from './components/educationform'
import Title from './components/title'
import {NextButton,  BackButton, SubmitButton } from './components/formbutton'
import Experience from './components/experienceform'
import Resume from './components/resume'
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
  const [companyName, setCompanyName] = useState("")
  const [companyStartDate, setCompanyStartDate] = useState("")
  const [companyEndDate, setCompanyEndDate] = useState("")
  const [responsibilities, setReponsibilities] = useState("")

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

  const handleCompanyName = (event) => {
    setCompanyName(event.target.value)
  }

  const handleCompanyStartDate = (event) => {
    setCompanyStartDate(event.target.value)
  }

  const handleCompanyEndDate = (event) => {
    setCompanyEndDate(event.target.value)
  }

  const handleResponsibilities = (event) => {
    setReponsibilities(event.target.value)
  }


  const submitForm = (event) => {
    event.preventDefault()
  };
  
  const nextForm = (event) => {
    event.preventDefault()
    setForm(form + 1);
  };

  const prevForm = (event) => {
    event.preventDefault()
    setForm(form - 1);
  }
  
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
          <Education nextForm = {nextForm} schoolName = {schoolName} handleSchoolName = {handleSchoolName} schoolStartDate = {schoolStartDate} handleSchoolStartDate = {handleSchoolStartDate} schoolEndDate = {schoolEndDate} 
          handleSchoolEndDate = {handleSchoolEndDate} schoolDescription = {schoolDescription} handleSchoolDescription = {handleSchoolDescription} />

          <BackButton nextForm = {nextForm} prevForm = {prevForm}/>
        </>
      )}
      {form === 3 && (
        <>
          <Experience nextForm = {nextForm} companyName = {companyName} handleCompanyName = {handleCompanyName} companyStartDate = {companyStartDate} handleCompanyStartDate = {handleCompanyStartDate} companyEndDate = {companyEndDate} handleCompanyEndDate = {handleCompanyEndDate} responsibilities = {responsibilities} handleReponsibilities = {handleResponsibilities}/>
          
          <SubmitButton submitForm = {submitForm} prevForm = {prevForm}/>
        </>
      )}


    </>
  )
}

export default App
