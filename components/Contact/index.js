import React, { useState } from "react";
const [formState, setFormState] = useState({
  name: "",
  email: "",
  message: "",
});
const { name, email, message } = formState;

function handleChange(e) {
  setFormState({ ...formState, [e.target.name]: e.target.value });
}

function handleSubmit(e) {
  e.preventDefault();
  console.log(formState);
}

function ContactForm() {
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        {/* name input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onChange={handleChange}
          ></input>
        </div>
        {/* email input */}
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onChange={handleChange}
          ></input>
        </div>
        {/* message text area */}
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
