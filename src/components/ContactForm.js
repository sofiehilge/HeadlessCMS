import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formstate: { errors },
    reset,
  } = useForm();
  const [responseMessage, setResponseMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  //handle form submission

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setResponseMessage(null);
    try {
      //replace this url with your backend endpooint or API Service
      const response = await fetch(
        'https://your-backend-endpoint/api/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      if (result.success) {
        setResponseMessage(
          'Tak for din beske, jeg svare tilbage når der er ro til det.'
        );
        reset(); //clear form fields after submission
      } else {
        setResponseMessage('Der skete en fejl, måske vil du prøve igen');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setResponseMessage('There was an error submitting your message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name" className="h2 text-primaryColor">
            Navn
          </label>
          <input
            id="name"
            name="name"
            {...register('name', { required: 'Name is required' })}
            placeholder="Enter your name"
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^@]+@[^@]+\.[^@]+$/,
                message: 'Invalid email address',
              },
            })}
            placeholder="Enter your email"
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            {...register('message', { required: 'Message is required' })}
            placeholder="Enter your message"
          />
          {errors.message && <span>{errors.message.message}</span>}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default ContactForm;
