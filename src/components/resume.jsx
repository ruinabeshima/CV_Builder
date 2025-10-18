import "../styles/resume.css"

export function Resume(props){
  return (
    <div className = "resume">
      <div className="resume-general">
        <p className="resume-section-title">General Information</p>
        <p>Name: {props.firstName}{props.middleName}{props.lastName}</p>
        <p>Email: {props.email}</p>
        <p>Phone Number: {props.number}</p>
      </div>
      <div className="resume-education">
        <p className="resume-section-title">Education</p>
        <p><strong>School: {props.schoolName}</strong></p>
        <p>Start Date: {props.schoolStartDate}</p>
        <p>End Date: {props.schoolEndDate}</p>
        <p>Information: {props.schoolDescription}</p>
      </div>
      <div className="resume-experience">
        <p className="resume-section-title">Practical Experience</p>
        <p>Company Name: {props.companyName}</p>
        <p>Start Date: {props.companyStartDate}</p>
        <p>End Date: {props.companyEndDate}</p>
        <p>Description: {props.responsibilities}</p>
      </div>
    </div>
  );
}
