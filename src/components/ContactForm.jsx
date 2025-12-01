import React, { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!name || !email || !message) {
      toast.error("Please fill in all fields!");
      return;
    }

    setIsLoading(true);

    // EmailJS params
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    try {
      await emailjs.send(
        "service_2x5wzha", // Replace with your actual Service ID
        "template_gjtgcuo", // Replace with your actual Template ID
        templateParams,
        "xGud0aZOcUS2MkS0D" // Replace with your actual Public Key
      );

      setShowConfirmation(true);
      toast.success("Message sent! We appreciate your inquiry and will get back to you as soon as possible.");
      setTimeout(() => {
        setShowConfirmation(false);
        setName("");
        setEmail("");
        setMessage("");
      }, 60000); // 1 minute
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {showConfirmation ? (
        <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-2xl animate-fade-in">
          <div className="relative mb-4">
            <span className="absolute animate-ping inline-flex h-16 w-16 rounded-full bg-green-400 opacity-75"></span>
            <svg className="w-16 h-16 text-green-500 relative z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2l4-4" />
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-2 text-center drop-shadow-lg animate-bounce">Your query was sent to Mr. Tamminana Bhogesh</h2>
          <blockquote className="italic text-lg text-white text-center mb-4 animate-fade-in-slow">“We respect your time. Please wait a little while to get a response.”</blockquote>
          <div className="flex space-x-2 mt-2">
            <span className="w-3 h-3 bg-white rounded-full animate-bounce"></span>
            <span className="w-3 h-3 bg-white rounded-full animate-bounce delay-150"></span>
            <span className="w-3 h-3 bg-white rounded-full animate-bounce delay-300"></span>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="">
          <h2 className="text-2xl text-white mb-4">Contact Me</h2>
          <div className="flex flex-col mb-4">
            <label className="text-white mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 rounded-md border border-gray-300 text-black"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-white mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded-md border border-gray-300 text-black"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-white mb-2">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-2 rounded-md border border-gray-300 text-black"
              required
            />
          </div>
            <button
              type="submit"
              className="rounded-lg cursor-pointer border-4 border-transparent w-full p-2 text-white flex items-center justify-center font-semibold transition-colors"
              style={{ background: 'linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)' }}
              disabled={isLoading}
            >
            {isLoading ? (
              <span className="flex items-center">
                <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      )}
    </>
  );
};

export default ContactForm;
