import React from "react";
import { useState } from "react";

function ContactUsDataObject() {
  const [person, setPerson] = useState({
    firstname: "",
    lastname: "",
  });

  const onChangeHandler = (e) => {
    const elementName = e.target.name;
    const elementValue = e.target.value;
    setPerson({ ...person, [elementName]: elementValue });
  };

  function onSubmitHandler(e) {
    e.preventDefault();
    alert(
      `Form submitted. Firstname: ${person.firstname}, Lastname: ${person.lastname}`
    );
  }

  return (
    <div>
      <h1>Contact us</h1>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <label htmlFor="firstname">Firstname:</label>
        <input
          name="firstname"
          type="text"
          onChange={(e) => onChangeHandler(e)}
        />
        <label htmlFor="lastname">Lastname:</label>
        <input name="lastname" type="text" onChange={onChangeHandler} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUsDataObject;
