import "../styles/form.css"

function Experience(prop){
  return (    
  <div className = "container" id="experience-container">
    <p class="form-title">PRACTICAL EXPERIENCE</p>
    <form action="" onSubmit={prop.nextForm} id="experience-form" className="form">

        {/* REQUIRED */}
        <div className="input-container">
          <label htmlFor="company-name">Company Name*</label>
          <input type="text" id="company-name"/>
        </div>

        <div className="input-container">
          <label htmlFor="company-start-date">Company Start Date</label>
          <input type="month" id="company-start-date"/>
        </div>

        <div className="input-container">
          <label htmlFor="company-end-date">Company End Date</label>
          <input type="month" id="company-end-date"/>
        </div>

        <div className="input-container">
          <label htmlFor="responsibilites">Responsibilities / Description</label>
          <textarea id="responsibilities" />
        </div>
      </form>
    </div>
  );
}

export default Experience