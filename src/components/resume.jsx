import "../styles/resume.css"

function Resume(props){
  return (
    <div className = "resume">
      <div className="resume-general">
        <p>Name: {props.firstName}{props.middleName}{props.lastName}</p>
      </div>
    </div>
  );
}

export default Resume