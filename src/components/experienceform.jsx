import "../styles/form.css"

function Experience(props){
  return (    
  <div className = "container" id="experience-container">
    <p class="form-title">PRACTICAL EXPERIENCE</p>
    <form action="" onSubmit={props.nextForm} id="experience-form" className="form">

        {/* REQUIRED */}
        <div className="input-container">
          <label htmlFor="company-name">Company Name*</label>
          <input type="text" id="company-name" value = {props.companyName} onChange={props.handleCompanyName}/>
        </div>

        <div className="input-container">
          <label htmlFor="company-start-date">Company Start Date</label>
          <input type="month" id="company-start-date" value={props.companyStartDate} onChange={props.handleCompanyStartDate}/>
        </div>

        <div className="input-container">
          <label htmlFor="company-end-date">Company End Date</label>
          <input type="month" id="company-end-date" value={props.companyEndDate} onChange={props.handleCompanyEndDate}/>
        </div>

        <div className="input-container">
          <label htmlFor="responsibilites">Responsibilities / Description</label>
          <textarea id="responsibilities" value={props.responsibilities} onChange={props.handleReponsibilities}/>
        </div>
      </form>
    </div>
  );
}

export default Experience