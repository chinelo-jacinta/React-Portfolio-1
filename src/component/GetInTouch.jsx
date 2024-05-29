import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const GetInTouch = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_mgwtppo',
        'template_ns0a264',
        form.current,
        'r_YqWwwsQgVSgbAC4'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again later.');
        }
      );
  };

  return (
    <section id='contact'>
      <form ref={form} onSubmit={sendEmail} className='form'>
        <h3>Get in touch</h3>
        <div className='form-center'>
          <input
            type='text'
            name='firstName'
            className='form-text'
            placeholder='First Name'
            required
          />
          <input
            type='text'
            name='lastName'
            className='form-text'
            placeholder='Last Name'
            required
          />
          <input
            type='email'
            name='email'
            className='form-text'
            placeholder='Email Address'
            required
          />
          <input
            type='text'
            name='phone'
            className='form-text'
            placeholder='Phone No.'
          />
        </div>
        <textarea
          name='message'
          className='form-text'
          placeholder='Your Message'
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default GetInTouch;
