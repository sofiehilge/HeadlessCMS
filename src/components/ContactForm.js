import React from 'react';
import { useForm as useFormspree } from '@formspree/react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [state, sumbitToFormspree] = useFormspree('xovqwvwd');

  //combine React Hook Form's handleSubmit with Formsprees handleSubmit

  const onSubmit = (data) => {
    if (data.honeypot) {
      console.log('Bot detected!');
      return;
    }
    sumbitToFormspree(data); //Send data to Formspree after validation
  };
  if (state.succeeded) {
    return <p>Tak for din besked!</p>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Skriv venligst din email',
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: 'Ugyldig email',
            },
          })}
          name="email"
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

        <label htmlFor="message">Besked</label>
        <textarea
          id="message"
          {...register('message', { required: 'Skriv venligst en besked.' })}
          name="message"
        />
        <input
          type="text"
          name="honeypot"
          style={{ display: 'none' }}
          {...register('honeypot')}
        />

        <button type="submit" disabled={state.submitting}>
          Send
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
