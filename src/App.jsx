import General from './components/generalform'
import Education from './components/educationform'
import Title from './components/title'
import "./index.css"
import "./App.css"
import { useState } from 'react'

function App() {("general")
  const [form, setForm] = useState(1);

  const nextForm = (event) => {
    event.preventDefault()
    setForm(form + 1);
  };

  const prevForm = (event) => {
    event.preventDefault()
    setForm(form - 1);
  };

  return (
    <>
      <Title />
      
      {form === 1 && (
        <General nextForm = {nextForm} />
      )}
      {form === 2 && (
        <Education nextForm = {nextForm} prevForm = {prevForm}/>
      )}
    </>
  )
}

export default App
