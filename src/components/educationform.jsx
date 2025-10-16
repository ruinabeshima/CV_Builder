import "../styles/form.css"

function Education(prop){
  return (
    <div className = "container" id="education-container">
      <form action="" onSubmit={prop.nextForm} id="education-form" className="form">

        {/* REQUIRED */}
        <div className="input-container">
          <label htmlFor="school-name">Place of Education*</label>
          <input type="text" id="school-name"/>
        </div>

        <div className="input-container">
          <label htmlFor="start-date">Start Date</label>
          <input type="month" id="start-date"/>
        </div>

        <div className="input-container">
          <label htmlFor="end-date">End Date</label>
          <input type="month" id="end-date"/>
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