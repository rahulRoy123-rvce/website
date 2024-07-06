import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zuseae6', 'template_h2u7s9h', form.current, 'h-B19s-FImd5w300r')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again later.');
      });
  };

  return (
    <section id="contact" className="flex flex-col items-stretch text-center">
      <h1 className="text-2xl mb-4">Contact</h1>
      <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="from_name" className="sr-only">Name</label>
          <input
            type="text"
            name="from_name"
            id="from_name"
            placeholder="Name"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="from_email" className="sr-only">Email</label>
          <input
            type="email"
            name="from_email"
            id="from_email"
            placeholder="Email"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          ></textarea>
        </div>
        <input
          className="bg-blue-500 text-white border-none p-3 rounded cursor-pointer hover:bg-blue-600"
          type="submit"
          value="Submit"
        />
      </form>
    </section>
  );
}

export default Contact;
