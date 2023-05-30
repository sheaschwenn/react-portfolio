import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import "./../../styles/Contact.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    }
    if (!name.length || !email.length || !message.length) {
      setErrorMessage(`All fields are required`);
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
  };

  const handleBlur = (event) => {
    if (!event.target.value.length) {
      setErrorMessage(`${event.target.name} is required`);
      return;
    }
  };

  return (
    <div className="contact">
      <h2>CONTACT</h2>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          type="text"
          name="name"
          onBlur={handleBlur}
          placeholder="Name"
          onChange={handleInputChange}
        />

        <input
          value={email}
          type="email"
          name="email"
          onBlur={handleBlur}
          placeholder="Email"
          onChange={handleInputChange}
        />

        <textarea
          value={message}
          type="text"
          name="message"
          onBlur={handleBlur}
          onChange={handleInputChange}
          placeholder="Message"
        />
        <button className="submit" type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};
export default Contact;
