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
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate //Disable browsers native validation
      className="bg-backgroundColor bg-opacity-70 p-6 rounded-lg border-secondaryColor space-y-4 mx-4 my-2 animate-fadeIn"
    >
      <div>
        <label
          htmlFor="email"
          className="block font-semibold text-secondaryColor"
        >
          Email
        </label>
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
          className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondaryColor"
          name="email"
        />
        {errors.email && <p className="text-red-400">{errors.email.message}</p>}
      </div>
      <div>
        <label
          htmlFor="message"
          className="block font-semibold text-secondaryColor"
        >
          Besked
        </label>
        <textarea
          id="message"
          {...register('message', { required: 'Skriv venligst en besked.' })}
          className="mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondaryColor"
          rows={5}
          name="message"
        />
        {errors.message && (
          <p className="text-red-400 text-sm">Skriv venligst en besked</p>
        )}
      </div>

      <input
        type="text"
        name="honeypot"
        style={{ display: 'none' }}
        {...register('honeypot')}
      />

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-primaryColor text-backgroundColor font-bold py-2 px-4 rounded-lg hover:bg-secondaryColor transition-colors"
      >
        Send
      </button>
    </form>
  );
};
export default ContactForm;
