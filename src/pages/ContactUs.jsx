import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Rating } from '@mui/material';
import { useState } from 'react';
// import React from "react"


export const ContactUs = () => {

    const [value, setValue] = useState (2);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_i8ypp0j', 'template_ofvnx8x', form.current, {
        publicKey: 'cos4E-bpzICIPjoVQ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label> <br />
      <input type="text" name="from_name" /><br />
      <label>Email</label> <br />
      <input type="email" name="from_email" /><br />
      <label>Message</label> <br />
      <textarea name="message" /> <br />
      <label>Reiting</label> <br />
      <Rating
        name="rating"
        value={value}
        onChange={(event,newValue) => {
          setValue(newValue);
        }}
      />
      <input type="submit" value="Send" />
    </form>
  );
};