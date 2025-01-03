import React, { useRef } from "react";
import emailjs from "emailjs-com";
import AnimatedLine from "./AnimatedLine";
import { useState } from "react";

const Contact = () => {
  const form = useRef();

  const [feedbackMessage, setFeedbackMessage] = useState(""); // State for feedback message

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(new FormData(form.current));

    emailjs

      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID from .env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template ID from .env
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID // public keyfrom .env
      )

      .then(
        (result) => {
          console.log(result.text);
          setFeedbackMessage("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setFeedbackMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-light text-white mb-8 pl-4 text-left">
              Let's Get in Touch
            </h2>
            <div className="w-24 mb-8 sm:w-32 md:w-40 lg:w-48">
              <AnimatedLine />
            </div>

            <p className="text-md pl-4 font-light mb-6">
              Have questions, want to collaborate, or just say hi? Drop me a
              message, and I'll get back to you as soon as possible!
            </p>
            <p className="text-md pl-4 font-light">
              Whether it's a project idea or career opportunities, I'm all ears.
            </p>
          </div>

          {/* Right Side: Form */}
          <div className=" p-8 rounded-lg shadow-lg">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-sm font-light mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 rounded-md border-b-2 border-b-gray-900 text-sm text-gray-100 font-light focus:outline-none focus:ring-0 focus:border-b-2 focus:border-b-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-light mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-md border-b-2 border-b-gray-900 text-sm text-gray-100 font-light focus:outline-none focus:ring-0 focus:border-b-2 focus:border-b-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-light mb-2">Message</label>
                <textarea
                  name="message"
                  placeholder="Write your message here"
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-md border-2 border-gray-900 text-sm text-gray-100 font-light focus:outline-none focus:ring-0 focus:border focus:border-gray-700"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 text-white border border-orange-500 rounded-lg font-light hover:border-orange-600 transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* Display Feedback Message */}
            {feedbackMessage && (
              <p className="text-center mt-4 text-sm font-light text-green-400">
                {feedbackMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
