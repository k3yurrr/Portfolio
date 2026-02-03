import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { FiSend, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { updatePageMeta, seoData } from "../utils/seo";
import { trackEvent } from "../utils/analytics";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    updatePageMeta(seoData.contact);
  }, []);

  const validateField = (name, value) => {
    switch (name) {
      case "name": {
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2)
          return "Name must be at least 2 characters";
        return "";
      }

      case "email": {
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value))
          return "Please enter a valid email address";
        return "";
      }

      case "message": {
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10)
          return "Message must be at least 10 characters";
        return "";
      }

      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(form).forEach((key) => {
      newErrors[key] = validateField(key, form[key]);
    });
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors before submitting");
      return;
    }

    setIsSubmitting(true);
    const loading = toast.loading("Sending message...");

    try {
      await addDoc(collection(db, "contacts"), {
        ...form,
        createdAt: Timestamp.now(),
      });

      // Track successful form submission
      trackEvent("form_submit", "contact", "success");

      toast.success("Message sent successfully!", { id: loading });
      setForm({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error:", err);

      // Track form submission error
      trackEvent("form_submit", "contact", "error");

      toast.error("Failed to send message.", { id: loading });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <section aria-label="Contact form">
            <h1 className="text-4xl font-bold mb-6 font-calistoga">
              let's work together.
            </h1>
            <p className="text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] mb-8">
              I'm always open to discussing new opportunities, interesting
              projects, and creative collaborations. Let's create something
              amazing together!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    className={`w-full bg-transparent border-2 p-3 rounded-lg transition-colors placeholder:text-[var(--light-text-secondary)] dark:placeholder:text-[var(--dark-text-secondary)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      errors.name
                        ? "border-red-500 focus:border-red-500"
                        : "border-[var(--light-border)] dark:border-[var(--dark-border)]"
                    }`}
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className="mt-1 text-sm text-red-500"
                      role="alert"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className={`w-full bg-transparent border-2 p-3 rounded-lg transition-colors placeholder:text-[var(--light-text-secondary)] dark:placeholder:text-[var(--dark-text-secondary)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      errors.email
                        ? "border-red-500 focus:border-red-500"
                        : "border-[var(--light-border)] dark:border-[var(--dark-border)]"
                    }`}
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-1 text-sm text-red-500"
                      role="alert"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Say! I'd love to hear from you."
                  className={`w-full bg-transparent border-2 p-3 rounded-lg resize-none transition-colors placeholder:text-[var(--light-text-secondary)] dark:placeholder:text-[var(--dark-text-secondary)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    errors.message
                      ? "border-red-500 focus:border-red-500"
                      : "border-[var(--light-border)] dark:border-[var(--dark-border)]"
                  }`}
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  aria-invalid={!!errors.message}
                ></textarea>
                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-1 text-sm text-red-500"
                    role="alert"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full md:w-auto rounded-lg font-medium flex items-center justify-center px-6 py-3 gap-2 border-2 transition ${
                  isSubmitting
                    ? "bg-gray-400 text-gray-600 border-gray-400 cursor-not-allowed"
                    : "bg-blue-500 text-white border-blue-500 hover:bg-blue-600 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"} <FiSend />
              </button>

              <p className="text-xs text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)]">
                By submitting this form, you agree to our{" "}
                <Link
                  to="/privacy"
                  className="font-semibold underline hover:text-blue-500 transition-colors"
                >
                  privacy policy.
                </Link>
              </p>
            </form>
          </section>

          {/* Contact Information */}
          <section aria-label="Contact information" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 font-calistoga">
                get in touch.
              </h2>
              <p className="text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] mb-8">
                Prefer direct contact? Feel free to reach out through any of
                these channels. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <FiMail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a
                    href="mailto:keyurparmar182003@gmail.com"
                    className="text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] hover:text-blue-500 transition-colors"
                  >
                    keyurparmar182003@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <FiMapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)]">
                    Gujarat, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <FiPhone className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Response Time</h3>
                  <p className="text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)]">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-[var(--light-border)] dark:border-[var(--dark-border)]">
              <h3 className="font-semibold mb-4">Connect Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/keyur-parmar-661447282/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/k3yurrr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Contact;
