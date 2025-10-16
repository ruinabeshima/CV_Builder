import "../styles/form.css"

function NextButton(prop){
  return (
    <div className="button-container">
          <button onClick={prop.nextForm} type="submit">Next</button>
    </div>
  );
}

export default NextButton