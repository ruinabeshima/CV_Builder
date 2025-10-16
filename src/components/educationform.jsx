import "../styles/form.css"

function Education(prop){
  return (
    <div className = "container" id="education-container">
      <p class="form-title">EDUCATION</p>
      <form action="" onSubmit={prop.nextForm} id="education-form" className="form">

        {/* REQUIRED */}
        <div className="input-container">
          <label htmlFor="school-name">Place of Education*</label>
          <input type="text" id="school-name"/>
        </div>

        <div className="input-container">
          <label htmlFor="education-start-date">Start Date</label>
          <input type="month" id="education-start-date"/>
        </div>

        <div className="input-container">
          <label htmlFor="education-end-date">End Date</label>
          <input type="month" id="education-end-date"/>
        </div>

        <div className="input-container">
          <label htmlFor="school-description">Honors and Awards, Other Information</label>
          <textarea id="school-description" />
        </div>
      </form>
    </div>
  );
}

export default Education