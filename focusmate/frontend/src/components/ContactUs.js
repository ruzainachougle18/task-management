import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Please fill out all fields.");
    } else {
      setFormStatus("Thank you for reaching out! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-200 to-blue-200 min-h-[80vh] flex flex-col justify-center items-center px-4 sm:px-8 py-12 sm:py-20">
      <section className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">
          Contact Us
        </h2>

        {/* Contact Information */}
        <div className="mb-6 text-gray-600 ">
          <p className="text-lg sm:text-xl mb-4">
            Have a question or feedback? We're here to help!
          </p>
          <p className="text-sm sm:text-lg">
            Email:{" "}
            <a
              href="mailto:support@focusmate.com"
              className="text-blue-600 underline"
            >
              support@focusmate.com
            </a>
          </p>
          <p className="text-sm sm:text-lg">
            Phone:{" "}
            <a href="tel:+1234567890" className="text-blue-600 underline">
              +123 456 7890
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-left text-gray-800 text-base sm:text-lg font-medium mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-left text-gray-800 text-base sm:text-lg font-medium mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-left text-gray-800 text-base sm:text-lg font-medium mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here"
              rows="4"
              required
            ></textarea>
          </div>

          {formStatus && (
            <p
              className={`text-base sm:text-lg mb-4 ${
                formStatus.includes("Thank") ? "text-green-500" : "text-red-500"
              }`}
            >
              {formStatus}
            </p>
          )}

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full font-semibold transition duration-300 hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
