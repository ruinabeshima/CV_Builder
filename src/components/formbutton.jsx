import "../styles/form.css"

export function NextButton(props){
  return (
    <div className="button-container">
          <button onClick={props.nextForm} type="submit">Next</button>
    </div>
  );
}

export function BackButton(props){
  return (
      <div className="button-container">
        <button onClick={props.prevForm} type="submit">Back</button>
        <button onClick={props.nextForm} type="submit">Next</button> 
      </div>
  );
}

export function SubmitButton(props){
  return (
    <div className="button-container">
      <button onClick={props.prevForm} type="submit">Back</button>
      <button onClick={props.submitForm} type="submit" id="submit-button">Submit</button>
    </div>
  );

}
