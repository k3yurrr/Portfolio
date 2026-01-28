import Pushkar from "/Pushkar.webp";
// project images
import UIstack from "/assets/projectImages/UIstack.webp";
import CodeProbe from "/assets/projectImages/CodeProbe.webp";
import HCVAcademy from "/assets/projectImages/HCVAcademy.webp";
import CodeArc from "/assets/projectImages/CodeArc.webp";
import PushkarCode from "/assets/projectImages/PushkarCode.webp";
import URLzy from "/assets/projectImages/URLzy.webp";

const portfolioData = [
  {
    About: {
      name: "Pushkar",
      // age: "22",
      // role: "MERN Developer",
      // location: "India, HR",
      heading: "Front-End Developer specializing in React and modern UI development",
      subHeading: "I build fast, responsive, and scalable web interfaces used in real products.",
      intro: "Also a badminton coach — discipline and consistency come standard.",
      photo: Pushkar,
    },
    Work: [
      // Front-End Junior Dev | YORA Apparels
      {
        date: "Aug 2025 - Sep 2025",
        company: "YORA Apparels",
        role: "Front-End Junior Developer",
        points: [
          "Developed dynamic and user-friendly UI's in ReactJS",
          "Restructured the whole project, improving site speed by 35%",
          "Collaborated with designers to implement new features, increasing user engagement by 15%",
        ],
      },
      // Full-Stack Dev | IWS
      {
        date: "Jan 2024 - Feb 2025",
        company: "Infinite Web Solutions",
        role: "Full Stack Developer",
        points: [
          "Developed dynamic UI's in ReactJS, integrated with a C# .NET backend, boosting user efficiency by 20%",
          "Rewrote key code components, impriving site speed by 35%",
          "Collaborated with designers to implement new features, increasing user engagement by 15%",
        ],
      },
      // Front-End | Bharat Intern
      // {
      //   date: "Jul 2023 - Aug 2023",
      //   company: "Bharat Intern",
      //   role: "Frontend Developer (Intern)",
      //   points: [
      //     "Improved usability of an educational platform using ReactJS and TailwindCSS",
      //     "Designed and developed a portfolio website optimized for SEO, increasing site traffic by 25%",
      //     "Helped over 150 students secure internships, resulting in a 20% increase in success placements",
      //   ],
      // },
      // Network Enginner | LE&CT
      // {
      //   date: "Jun 2023 - Aug 2023",
      //   company: "LIAM'S Education & Charitable Trust",
      //   role: "Network Engineer (Intern)",
      //   points: [
      //     "Developed custom Python CLI tools for enhanced threat detection",
      //     "Strengthened cybersecurity infrastructure with firewalls and malware protection",
      //     "Automated security tests, improving operational effect by 50%",
      //   ],
      // },
    ],
    Education: [
      {
        date: "May 2020 - Aug 2023",
        company: "Jaipur National University",
        role: "Bachelor of Computer Application (BCA)",
        points: ["Specialization in Cyber Security"],
      },
    ],
    projects: [
      // URLzy
      {
        title: "URLzy",
        image: URLzy,
        description:
          "A sleek MERN stack URL shortener for creating clean, manageable short links.",
        live: "https://urlzy.netlify.app/",
        github: "",
        tech: [
          "MongoDB",
          "Express",
          "React",
          "NodeJS",
          "TailwindCSS",
          "Netlify",
        ],
      },
      // CodeProbe
      {
        title: "CodeProbe",
        image: CodeProbe,
        description:
          "A complete pack for learning new skills and testing your knowledge with MCQ questions.",
        live: "https://codeprobe.netlify.app/",
        github: "",
        tech: ["ReactJS", "TailwindCSS", "FormSubmit", "Netlify"],
      },
      // UIstack
      {
        title: "UIstack",
        image: UIstack,
        description:
          "A complete pack for learning new skills and testing your knowledge with MCQ questions.",
        live: "https://uistack.netlify.app/",
        github: "",
        tech: ["ReactJS", "TailwindCSS", "Netlify"],
      },
      // HCVAcademy
      {
        title: "HCVAcademy",
        image: HCVAcademy,
        description: "Elevate Your Game at HCV Badminton Academy.",
        live: "https://upcommingshuttlers.netlify.app/",
        github: "",
        tech: ["ReactJS", "TailwindCSS", "Express", "Firebase", "Netlify"],
      },
      // PushkarCode
      {
        title: "PushkarCode",
        image: PushkarCode,
        description:
          "PushkarCode is a learning platform for developers or who want to become.",
        live: "https://pushkarcode.netlify.app/",
        github: "",
        tech: [
          "ReactJS",
          "TailwindCSS",
          "Framer Motion",
          "Firebase",
          "SEO",
          "Netlify",
        ],
      },
      // CodeArc
      {
        title: "CodeArc",
        image: CodeArc,
        description:
          "CodeArc is a combination of 3 tools which makes your coding easy.",
        live: "https://codearc.netlify.app/",
        github: "",
        tech: ["ReactJS", "TailwindCSS", "SEO", "Netlify"],
      },
    ],
    blogs: [
      // Dark Side of Reddit
      {
        title: "The Dark Side of REDDIT!",
        description:
          "The dark side of the reddit, you can find deepm creepy, mysterious stories which you can find nowhere.",
        url: "https://cyberhub.hashnode.dev/the-dark-side-of-reddit",
        alt: "reddit scam",
        date: "15 Oct 2023",
      },
      // Snuff Movies
      {
        title: "The Darkest Real Videos Sold On The Dark Web!",
        description: "The real snuff movies posted on dark web",
        url: "https://cyberhub.hashnode.dev/the-darkest-real-videos-sold-on-the-dark-web",
        alt: "dark web videos",
        date: "15 Sep 2023",
      },
      // Devin AI Scam?
      {
        title: "Is the Devin AI Scam?",
        description:
          "Is DevinAI a scam or a new revolution in the software industry?",
        url: "https://cyberhub.hashnode.dev/devin-ai-exposed",
        alt: "devin ai scam",
        date: "16 Apr 2024",
      },
      // Zero Day Attack on Apple Devices
      {
        title:
          "Apple's Devices Under Attack: New Zero-Day Flaw Discovered - Here's What You Need to Know!",
        description: "Zero day attack found in Apple devices",
        url: "https://cyberhub.hashnode.dev/apples-devices-under-attack-new-zero-day-flaw-discovered-heres-what-you-need-to-know",
        alt: "zero day flaw",
        date: "23 Jan 2003",
      },
    ],
  },
];

export default portfolioData;
