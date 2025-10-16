import "../styles/form.css"

function Education(props){
  return (
    <div className = "container" id="education-container">
      <p class="form-title">EDUCATION</p>
      <form action="" onSubmit={props.nextForm} id="education-form" className="form">

        {/* REQUIRED */}
        <div className="input-container">
          <label htmlFor="school-name">Place of Education*</label>
          <input type="text" id="school-name" value={props.schoolName} onChange={props.handleSchoolName}/>
        </div>

        <div className="input-container">
          <label htmlFor="education-start-date">Start Date</label>
          <input type="month" id="education-start-date" value={props.schoolStartDate} onChange={props.handleSchoolStartDate}/>
        </div>

        <div className="input-container">
          <label htmlFor="education-end-date">End Date</label>
          <input type="month" id="education-end-date" value={props.schoolEndDate} onChange={props.handleSchoolEndDate}/>
        </div>

        <div className="input-container">
          <label htmlFor="school-description">Honors and Awards, Other Information</label>
          <textarea id="school-description" value={props.schoolDescription} onChange={props.handleSchoolDescription}/>
        </div>
      </form>
    </div>
  );
}

export default Education