import React from "react";
import { useState } from "react";

function ContactUs() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  function onsubmitHandler(e) {
    e.preventDefault();
    alert(`Form submitted. Firstname: ${firstname}, Lastname: ${lastname}`);
  }
  return (
    <div>
      <h1>Contact us</h1>
      <form onSubmit={(e) => onsubmitHandler(e)}>
        <label htmlFor="firstname">Firstname:</label>
        <input
          name="firstname"
          type="text"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <label htmlFor="lastname">Lastname:</label>
        <input
          name="lastname"
          type="text"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
