import "../styles/form.css"

function General(prop) {


  return (
    <div className = "container" id="general-container">
      <form action="" onSubmit={prop.nextForm} id="general-form" className="form">

        <div className="input-container">
          <label htmlFor="first-name">First Name*</label>
          <input type="text" id="first-name" required/>
        </div>

        <div className="input-container">
          <label htmlFor="middle-name">Middle Name</label>
          <input type="text" id="middle-name"/>
        </div>

        <div className="input-container">
          <label htmlFor="last-name">Last Name*</label>
          <input type="text" id="last-name" required/>
        </div>

        <div className="input-container">
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" required/>
        </div>

        <div className="input-container">
          <label htmlFor="phone-number">Phone Number*</label>
          <input type="tel" id="phone-number" required/>
        </div>

        <div className="button-container">
          <button type="submit">Next</button>
        </div>

        
      </form>
    </div>
  );
}

export default General;
