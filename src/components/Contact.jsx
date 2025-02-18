

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zono688", // Replace with your EmailJS Service ID
        "template_7r2zu3h", // Replace with your EmailJS Template ID
        form.current,
        "pF9MJ75T6QI4edqdp" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent!", result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("Failed to send email", error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="w-full h-screen flex flex-col justify-center items-center text-center p-10 bg-gradient-to-b from-gray-900 to-black text-white">
      <h2 className="text-5xl font-bold text-white mb-8">Contact Me</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-gray-800 p-8 rounded-3xl shadow-xl w-full max-w-lg"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          className="w-full p-4 mb-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 text-lg font-medium"
          required
        />
        <input
          type="email"
          name="reply_to"
          placeholder="Your Email"
          className="w-full p-4 mb-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 text-lg font-medium"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          className="w-full p-4 mb-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 text-lg font-medium"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105 text-lg font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
