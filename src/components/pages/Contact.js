import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);

      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      }
    } else {
      if (!e.target.value.trim().length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    // async function
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  // console.log('errorMessage', errorMessage);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section className="contact">
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
        {errorMessage && <p className="error-text">* {errorMessage}</p>}
      </form>
    </section>
  );
}
export default Contact;
