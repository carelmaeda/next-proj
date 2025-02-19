'use client'; // Mark this as a Client Component

import { useState } from 'react';
import Loading from './loading';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData); // Log form data

    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      return;
    }

    setIsLoading(true); // Show loading state
    setError(''); // Clear any previous errors

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status); // Log response status

      if (response.ok) {
        setSubmitted(true); // Show success message
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false); // Hide loading state
    }
  };

  return (
    <section id="contact" className="section-wrapper">
      <h2 className="text-center mb-4">Contact Me</h2>
      {isLoading ? (
        <Loading /> // Show loading component
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          {submitted && (
            <div className="alert alert-success text-center">
              Thank you! Your message has been sent.
            </div>
          )}
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
              rows={5}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </section>
  );
}
