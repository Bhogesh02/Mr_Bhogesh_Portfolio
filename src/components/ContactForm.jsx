import React, { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!name || !email || !message) {
      toast.error("Please fill in all fields!");
      return;
    }

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

      toast.success("Your message has been sent successfully!");
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.");
    }

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 rounded-md shadow-md">
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
      <button type="submit" className="bg-[#27a42d] text-white p-2 rounded-md">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
