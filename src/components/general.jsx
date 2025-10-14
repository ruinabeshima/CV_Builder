import "../styles/form.css"

function General() {
  return (
    <div className = "container" id="general-container">
      <form action="" id="general-form" className="form">
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" required/>

        <label htmlFor="middle-name">Middle Name (Optional)</label>
        <input type="text" id="middle-name" required/>

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name"/>

        <label htmlFor="email">Email</label>
        <input type="email" id="email"/>

        <label htmlFor="phone-number">Phone Number</label>
        <input type="tel" id="phone-number"/>
      </form>
    </div>
  );
}

export default General;
