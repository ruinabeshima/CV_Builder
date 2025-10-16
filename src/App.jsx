import General from './components/generalform'
import Education from './components/educationform'
import Title from './components/title'
import NextButton from './components/nextbutton'
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
    </>
  )
}

export default App
