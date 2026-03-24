import { useEffect } from "react";
import { Link } from "react-router-dom";
import { updatePageMeta, seoData } from "../utils/seo";

const Privacy = () => {
  useEffect(() => {
    updatePageMeta(seoData.privacy);
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="text-5xl font-calistoga mb-10">Privacy Policy</h1>
      <p className="text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)]">
        Last Updated: March 2026
      </p>

      <h2 className="text-3xl font-calistoga mt-16 mb-6">Hey, Welcome!</h2>
      <p>
        Thanks for visiting my portfolio! This Privacy Policy explains how I
        handle your data when you visit{" "}
        <span className="font-semibold">k3yur.in</span>. As a Cyber Security
        Analyst, I take privacy seriously — so I've kept data collection to an
        absolute minimum.
      </p>

      <h2 className="text-3xl font-calistoga mt-12 mb-6">
        What Information I Collect
      </h2>
      <p>
        This is a personal portfolio site with minimal data collection. I don't
        use account creation, tracking cookies, or invasive analytics. Here's
        the only scenario where data is collected:
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-3">1. Contact Form</h3>
      <p>
        If you reach out via the{" "}
        <Link to="/contact" className="hover:text-blue-500 transition-colors">
          contact form
        </Link>
        , I collect your name, email address, and message. This is submitted
        directly to a secure Firestore database and is only used to reply to
        you. I will never use it for marketing or share it with anyone.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-3">
        2. Analytics (Anonymous)
      </h3>
      <p>
        I use Google Analytics to understand how visitors interact with the
        site — things like which pages are visited and general traffic trends.
        No personally identifiable information is collected through analytics.
        You can opt out using browser extensions like uBlock Origin or by
        disabling JavaScript.
      </p>

      <h2 className="text-3xl font-calistoga mt-12 mb-6">
        How I Use Your Information
      </h2>
      <p>The limited data I collect is used only to:</p>
      <ul className="list-disc pl-6 space-y-2 mt-3">
        <li>Respond to your messages from the contact form</li>
        <li>Understand site performance and improve the user experience</li>
        <li>Ensure the site is running smoothly</li>
      </ul>

      <h2 className="text-3xl font-calistoga mt-12 mb-6">
        Sharing Your Info (I Don't)
      </h2>
      <p>
        I don't sell, trade, or share your personal information with anyone.
        Your contact form data stays between you and me. If you accidentally
        shared something sensitive, reach out and I'll remove it promptly.
      </p>

      <h2 className="text-3xl font-calistoga mt-12 mb-6">
        Third-Party Services
      </h2>
      <p>
        This site uses the following third-party services, each with their own
        privacy policies:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-3">
        <li>
          <span className="font-semibold">Firebase / Firestore</span> — for
          storing contact form submissions securely
        </li>
        <li>
          <span className="font-semibold">Google Analytics</span> — for
          anonymous traffic insights
        </li>
        <li>
          <span className="font-semibold">Google Fonts</span> — for typography
          (Inter & Calistoga)
        </li>
      </ul>

      <h2 className="text-3xl font-calistoga mt-12 mb-6">Security</h2>
      <p>
        I take reasonable steps to protect any information you share. Contact
        form data is stored in a secured Firestore database with restricted
        access. That said, no system on the internet is 100% foolproof — but I
        do my best to keep things safe.
      </p>

      <h2 className="text-3xl font-calistoga mt-12 mb-6">Policy Updates</h2>
      <p>
        This policy was last updated in March 2026. If I make any significant
        changes, I'll update the date above. I won't make surprise changes
        without reflecting them here.
      </p>

      <h2 className="text-3xl font-calistoga mt-12 mb-6">Got Questions?</h2>
      <p>
        If you have any privacy-related concerns or questions, feel free to
        reach out through the{" "}
        <Link to="/contact" className="hover:text-blue-500 transition-colors">
          contact form
        </Link>{" "}
        or directly at{" "}
        <a
          href="mailto:keyurparmar182003@gmail.com"
          className="hover:text-blue-500 transition-colors"
        >
          keyurparmar182003@gmail.com
        </a>
        . I'm always happy to discuss security matters.
      </p>
    </div>
  );
};

export default Privacy;