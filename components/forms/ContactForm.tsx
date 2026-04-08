"use client";

import { useState, type FormEvent } from "react";
import { SERVICE_SEED } from "@/lib/content/service-data";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitError("");

    if (!validate()) return;

    setLoading(true);

    try {
      const subject = formData.service
        ? `New Enquiry: ${formData.service} — ${formData.name}`
        : `New Enquiry from ${formData.name}`;

      const payload = {
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
        subject,
        from_name: "Safe Lee Website",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        message: formData.message,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message ?? "Something went wrong. Please try again.");
      }

      setSuccess(true);
      setFormData(initialFormData);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  if (success) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <h3 className="font-heading text-2xl font-bold text-green-800">
          Message Sent
        </h3>
        <p className="mt-3 text-green-700">
          Thank you for getting in touch. We will respond to your enquiry as soon
          as possible, usually within one working day.
        </p>
        <button
          type="button"
          onClick={() => setSuccess(false)}
          className="mt-6 inline-flex items-center rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-800"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {submitError && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {submitError}
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-sl-gray-900">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1.5 block w-full rounded-lg border border-sl-gray-200 bg-white px-4 py-2.5 text-sl-gray-900 transition-colors focus:border-sl-red focus:outline-none focus:ring-2 focus:ring-sl-red/20"
          placeholder="Your full name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-sl-gray-900">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1.5 block w-full rounded-lg border border-sl-gray-200 bg-white px-4 py-2.5 text-sl-gray-900 transition-colors focus:border-sl-red focus:outline-none focus:ring-2 focus:ring-sl-red/20"
          placeholder="you@company.co.uk"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-sl-gray-900">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1.5 block w-full rounded-lg border border-sl-gray-200 bg-white px-4 py-2.5 text-sl-gray-900 transition-colors focus:border-sl-red focus:outline-none focus:ring-2 focus:ring-sl-red/20"
          placeholder="07xxx xxx xxx"
        />
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-semibold text-sl-gray-900">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="mt-1.5 block w-full rounded-lg border border-sl-gray-200 bg-white px-4 py-2.5 text-sl-gray-900 transition-colors focus:border-sl-red focus:outline-none focus:ring-2 focus:ring-sl-red/20"
          placeholder="Your company name"
        />
      </div>

      {/* Service Required */}
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-sl-gray-900">
          Service Required
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="mt-1.5 block w-full rounded-lg border border-sl-gray-200 bg-white px-4 py-2.5 text-sl-gray-900 transition-colors focus:border-sl-red focus:outline-none focus:ring-2 focus:ring-sl-red/20"
        >
          <option value="">Select a service...</option>
          {SERVICE_SEED.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-sl-gray-900">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="mt-1.5 block w-full rounded-lg border border-sl-gray-200 bg-white px-4 py-2.5 text-sl-gray-900 transition-colors focus:border-sl-red focus:outline-none focus:ring-2 focus:ring-sl-red/20"
          placeholder="Tell us about your inspection requirements..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center rounded-lg bg-sl-red px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-sl-red-dark focus:outline-none focus:ring-2 focus:ring-sl-red/50 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
