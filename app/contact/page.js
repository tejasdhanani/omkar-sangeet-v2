// app/contact/page.js
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage("Email sent successfully!");
        setFormData({ name: "", email: "", message: "", phone: "" }); // Clear the form
      } else {
        setResponseMessage(result.error || "Failed to send email.");
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-100 p-6">
      <h1 className="mb-4 text-center text-3xl font-bold">Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-lg rounded-lg bg-white p-6 shadow-md"
      >
        <label className="mb-2 block">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded border p-2"
          />
        </label>
        <label className="mb-2 block">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded border p-2"
          />
        </label>
        <label className="mb-2 block">
          Phone Number:
          <input
            type="number"
            min={999999999}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded border p-2"
          />
        </label>
        <label className="mb-4 block">
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded border p-2"
          />
        </label>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full rounded p-2 ${
            isSubmitting
              ? "cursor-not-allowed bg-gray-400"
              : "bg-primary text-white hover:bg-secondary"
          }`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        {responseMessage && (
          <p className="mt-4 text-center text-red-500">{responseMessage}</p>
        )}
      </form>
    </section>
  );
}
