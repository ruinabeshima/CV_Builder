import "../styles/form.css"

function SubmitButton(prop){
  return (
    <div className="button-container">
          <button onClick={prop.submitForm} type="submit" id="submit-button">Submit</button>
    </div>
  ); 
}

export default SubmitButton