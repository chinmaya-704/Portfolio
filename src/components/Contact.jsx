import emailjs from 'emailjs-com';
import React, { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then(() => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Failed to send: ' + error.text);
      });
  };

  return (
    <form action="https://formsubmit.co/9f3fc81db86cbb35d4119eea04fe553c"
    method="POST"
    className='flex flex-col space-y-4 p-6 bg-gray-800/40 backdrop-blur-md rounded-lg w-1/2 m-auto text-white font-sans max-md:w-3/4'>

      <input type="text" name="name" placeholder="Your Name" required className='p-2 rounded-md bg-gray-700 text-white' />

      <input type="email" name="email" placeholder="Your Email" required className='p-2 rounded-md bg-gray-700 text-white' />

      <textarea name="message" placeholder="Your Message" required className='p-2 rounded-md bg-gray-700 text-white h-32'></textarea>

      {/* Optional hidden inputs */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_autoresponse" value="Thanks for reaching out! I’ll reply soon." />
      
      <button type="submit" className='bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded'>Send Message</button>
    </form>
  );
};

export default Contact;