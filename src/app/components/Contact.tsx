// app/components/Contact.tsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
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

    emailjs.send('service_qzqb6vd', 'template_fj56jry', templateParams, process.env.NEXT_PUBLIC_EMAILJS_USER_ID)
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
    <div>
      <h2>Contact Me</h2>
      <form onSubmit={sendEmail}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Contact;
