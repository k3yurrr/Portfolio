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
      <p>Last Updated: Feb 2026</p>

      <h2 className="text-3xl font-calistoga mt-16 mb-6">Hey, Welcome!</h2>
      <p>
        Thanks for visiting my portfolio! This Privacy Policy outlines how I handle your data and personal information. As a Cyber Security Analyst, I take your privacy and data protection seriously. This site is designed to showcase my cybersecurity expertise and projects, while maintaining the highest standards of confidentiality.
      </p>

      <h2 className="text-3xl font-calistoga mt-12 mb-6">
        What Information I Collect (Hint: Not Much)
      </h2>
      <p>
        This is a static portfolio site with minimal data collection. I don't use account creation, tracking cookies, or invasive data gathering methods. Being a cybersecurity professional, I understand the importance of privacy-first design principles.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-3">
        1. Chatbot Conversations
      </h3>
      <p>
        If you send a message through the chatbot, it might be stored for
        caching and training purposes. So please avoid sharing any confidential
        info in the chat.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-3">2. Contact Info</h3>
      <p>
        If you reach out via email or the contact form, the info you provide is
        entirely up to you. I'll only use it to reply and have a conversation
        with you—no funny business.
      </p>

      <h2 className="text-3xl font-calistoga mt-6 mb-3">How I Use the Info</h2>
      <p>Here's what I might do with any information I collect:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Make sure the site is running smoothly</li>
        <li>Improve the website based on feedback you might share</li>
        <li>Respond to your questions or feedback</li>
      </ul>

      <h2 className="text-3xl font-calistoga mt-6 mb-3">
        Sharing Your Info (Spoiler: I Don't)
      </h2>
      <p>
        I don't sell, trade, or rent your personal info. If you shared something
        sensitive by accident, feel free to reach out, and I'll help you remove
        it.
      </p>

      <h2 className="text-3xl font-calistoga mt-6 mb-3">
        Security (The Internet Isn't Perfect)
      </h2>
      <p>
        I'll do my best to keep any info you share safe, but let's be real—no
        system is foolproof. While I'll take reasonable steps to protect your
        info, I can't promise 100% security.
      </p>

      <h2 className="text-3xl font-calistoga mt-6 mb-3">
        Policy Updates (No Surprises)
      </h2>
      <p>
        This policy is current as of Jun 2025. If I make any changes, I'll
        update it here, so you're always in the loop. Feel free to check back
        occasionally, but don't worry— I'm not making any big changes without
        letting you know.
      </p>

      <h2 className="text-3xl font-calistoga mt-6 mb-3">Got Questions?</h2>
      <p>
        If you have any questions, concerns, or just want to discuss cybersecurity, feel free to reach out through the{" "}
        <Link to="/contact" className="hover:text-blue-500 transition-colors">
          contact form
        </Link>
        {" "}or connect with me on my social profiles. I'm always happy to discuss security matters and collaborate on projects!
      </p>
    </div>
  );
};

export default Privacy;
