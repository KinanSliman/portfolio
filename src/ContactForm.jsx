import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mkgwnzye");

  if (state.succeeded) {
    return <p>Thanks for your message!</p>;
  }

  return (
    <div className="sayHello">
      <form onSubmit={handleSubmit}>
        <p>I am happy to hear from you</p>
        <label htmlFor="email">Enter Your Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="your-email@gmail.com"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message">Enter Your Message:</label>
        <textarea
          className="inputText"
          id="message"
          name="message"
          maxLength="5000"
          placeholder="Enter your message here"
          required
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button type="submit" disabled={state.submitting}>
          Send message
        </button>
      </form>
      {state.errors && state.errors.length > 0 && (
        <p className="error">
          Failed to send the message. Please try again later.
        </p>
      )}
    </div>
  );
}

export default ContactForm;
