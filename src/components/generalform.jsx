import "../styles/form.css"

function General(prop) {


  return (
    <div className = "container" id="general-container">
      <form action="" onSubmit={prop.nextForm} id="general-form" className="form">

        {/* REQUIRED */}
        <div className="input-container">
          <label htmlFor="first-name">First Name*</label>
          <input type="text" id="first-name"/>
        </div>

        <div className="input-container">
          <label htmlFor="middle-name">Middle Name</label>
          <input type="text" id="middle-name"/>
        </div>

        {/* REQUIRED */}
        <div className="input-container">
          <label htmlFor="last-name">Last Name*</label>
          <input type="text" id="last-name"/>
        </div>

        {/* REQUIRED */}
        <div className="input-container">
          <label htmlFor="email">Email*</label>
          <input type="email" id="email"/>
        </div>

        {/* REQUIRED */}
        <div className="input-container">
          <label htmlFor="phone-number">Phone Number*</label>
          <input type="tel" id="phone-number"/>
        </div>

        <div className="button-container">
          <button type="submit">Next</button>
        </div>

        
      </form>
    </div>
  );
}

export default General;
