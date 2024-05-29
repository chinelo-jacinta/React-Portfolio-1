import React from 'react';

const GetInTouch = () => {
  return (
    <section id='contact'>
      <form action='submit' className='form'>
        <h3>Get in touch</h3>
        <div className='form-center'>
          <input type='text' className='form-text' placeholder='first Name' />
          <input type='text' className='form-text' placeholder='Last Name' />
          <input
            type='email'
            className='form-text'
            placeholder='Email Address'
          />
          <input type='text' className='form-text' placeholder='Phone No.' />
        </div>
        <textarea name='' id=''></textarea>
        <button type='submit'>submit</button>
      </form>
    </section>
  );
};

export default GetInTouch;
