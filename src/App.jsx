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

  const nextForm = (event) => {
    event.preventDefault()
    setForm(form + 1);
  };

  return (
    <>
      <Title />
      
      {form === 1 && (
        <>
          <General nextForm = {nextForm} />
          <NextButton nextForm = {nextForm} />
        </>
      )}
      {form === 2 && (
        <>
          <General />
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
