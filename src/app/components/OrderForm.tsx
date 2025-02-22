"use client";

import { useState } from "react";

const OrderForm = ({ onClose }: { onClose: () => void }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", address: "" });
        setTimeout(onClose, 2000);
      } else {
        console.error("Order submission failed");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-lg w-96 border border-gray-300">
        <h2 className="text-2xl font-semibold text-center mb-4 text-white">Order Form</h2>
        {success && <p className="text-green-300 text-center">Order submitted successfully!</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 bg-black bg-opacity-30 border border-gray-500 rounded-md placeholder-white text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 bg-black bg-opacity-30 border border-gray-500 rounded-md placeholder-white text-white"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-2 bg-black bg-opacity-30 border border-gray-500 rounded-md placeholder-white text-white"
            required
          />
          <textarea
            name="address"
            placeholder="Your Address"
            value={form.address}
            onChange={handleChange}
            className="w-full p-2 bg-black bg-opacity-30 border border-gray-500 rounded-md placeholder-white text-white"
            required
          />
<button
  type="submit"
  className="w-full text-white py-2 rounded-lg relative overflow-hidden transition-all duration-500 ease-in-out
             bg-gradient-to-r from-red-600 via-black to-red-700 
             before:absolute before:inset-0 before:bg-gradient-to-r before:from-black before:via-red-600 before:to-black
             before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 
             z-10"
>
  <span className="relative z-20">{loading ? "Submitting..." : "Submit Order"}</span>
</button>



        </form>
        <button
  onClick={onClose}
  className="w-full text-white py-2 rounded-lg relative overflow-hidden transition-all duration-500 ease-in-out
             bg-gradient-to-r from-red-600 via-black to-red-700 
             before:absolute before:inset-0 before:bg-gradient-to-r before:from-black before:via-red-600 before:to-black
             before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 
             z-10 mt-4"
>
  <span className="relative z-20">Close</span>
</button>

      </div>
    </div>
  );
};

export default OrderForm;
