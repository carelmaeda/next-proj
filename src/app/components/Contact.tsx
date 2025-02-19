"use client"; // Add this directive to indicate it's a client component

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
    };

    // Log environment variables
    console.log('Service ID:', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    console.log('Template ID:', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
    console.log('User ID:', process.env.NEXT_PUBLIC_EMAILJS_USER_ID);

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
    )
    .then((response) => {
      console.log('Email sent successfully:', response.status, response.text);
      setSuccessMessage('Your message has been sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
      setErrorMessage('');
    }, (error) => {
      console.error('Failed to send email:', error);
      setErrorMessage('Failed to send your message. Please try again later.');
      setSuccessMessage('');
    });
  };

  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <form onSubmit={sendEmail}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
};

export default Contact;
