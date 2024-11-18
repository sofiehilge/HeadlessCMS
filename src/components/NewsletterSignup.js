import React from 'react';
import { useForm } from 'react-hook-form';

const NewsletterSignup = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Submitted: ', data);
    reset(); // Reset the form after submission
    onClose(); // Close the pop-up
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-lightColor bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-backgroundColor rounded-lg shadow-lg w-full max-w-md p-6">
        <button
          className="relative text-primaryColor hover:text-secondaryColor"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold text-primaryColor mb-4 text-center">
          Tilmeld dig mit nyhedsbrev
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-secondaryColor">
              Navn
            </label>
            <input
              type="text"
              {...register('name', { required: 'Navn er påkrævet' })}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primaryColor"
              placeholder="Dit navn"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-secondaryColor">
              Email
            </label>
            <input
              type="email"
              {...register('email', {
                required: 'Email er påkrævet',
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: 'Indtast en gyldig email',
                },
              })}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primaryColor"
              placeholder="Din email"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-primaryColor text-backgroundColor py-2 px-4 rounded-md hover:bg-secondaryColor transition-colors"
          >
            Tilmeld
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;
