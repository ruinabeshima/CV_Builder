import "../styles/form.css"

function General(props) {

  return (
    <div className = "container" id="general-container">
      <p class="form-title">GENERAL</p>
      <form action="" onSubmit={props.nextForm} id="general-form" className="form">

        {/* REQUIRED */}
        <div className="input-container">
          <label htmlFor="first-name">First Name*</label>
          <input type="text" id="first-name" value={props.firstName} onChange={props.handleFirstName}/>
        </div>

        <div className="input-container">
          <label htmlFor="middle-name">Middle Name</label>
          <input type="text" id="middle-name" value={props.middleName} onChange={props.handleMiddleName}/>
        </div>

        {/* REQUIRED */}
        <div className="input-container">
          <label htmlFor="last-name">Last Name*</label>
          <input type="text" id="last-name" value={props.lastName} onChange={props.handleLastName}/>
        </div>

        {/* REQUIRED */}
        <div className="input-container">
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" value={props.email} onChange={props.handleEmail}/>
        </div>

        {/* REQUIRED */}
        <div className="input-container">
          <label htmlFor="phone-number">Phone Number*</label>
          <input type="tel" id="phone-number" value={props.number} onChange={props.handleNumber}/>
        </div>

        
      </form>
    </div>
  );
}

export default General;
