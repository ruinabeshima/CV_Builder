import "../styles/form.css"

function General() {
  return (
    <div className = "container" id="general-container">
      <form action="" id="general-form" className="form">

        <div className="input-container">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" required/>
        </div>

        <div className="input-container">
          <label htmlFor="middle-name">Middle Name (Optional)</label>
          <input type="text" id="middle-name" required/>
        </div>

        <div className="input-container">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name"/>
        </div>

        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input type="email" id="email"/>
        </div>

        <div className="input-container">
          <label htmlFor="phone-number">Phone Number</label>
          <input type="tel" id="phone-number"/>
        </div>
      </form>
    </div>
  );
}

export default General;
