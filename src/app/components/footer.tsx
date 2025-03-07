"use client";
import React, { useState } from "react";

const Footer = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User Feedback:", feedback);
  };

  return (
    <footer className="text-white bg-gradient-to-r from-black via-red-700 to-black">
      <div className="container mx-auto p-10 backdrop-blur-xl bg-white/10 rounded-xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          
          {/* First UL: About Us and Policies */}
          <ul className="space-y-2">
            <li className="font-semibold text-lg mb-2">ABOUT US</li>
            <li>Search</li>
            <li>Return & Exchange Policy</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Refund Policy</li>
            <li>Terms of Service</li>
          </ul>

          {/* Feedback Form */}
          <form 
            onSubmit={handleSubmit} 
            className="max-w-md mx-auto p-4 bg-gradient-to-r from-red-700 via-black to-black shadow-lg rounded-lg"
          >
            <label htmlFor="feedback" className="block text-white font-medium mb-2">
              Enter Your Feedback:
            </label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-black"
              placeholder="Write your feedback here..."
              required
            />
            <button
              type="submit"
              className="mt-4 w-full bg-gradient-to-r from-black via-black to-red-700 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>    

          {/* Second UL: Talk to Us */}
          <ul className="space-y-2">
            <li className="font-semibold text-lg mb-2">TALK TO US</li>
            <li>Chat With Us</li>
            <li>Monday - Saturday: 10am-10pm PST</li>
            <li>Address: Governor House</li>
            <li>Call Us at: 0331-2670848</li>
            <li>Customer Support: naeemsarfaraz@gmail.com</li>
          </ul>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
