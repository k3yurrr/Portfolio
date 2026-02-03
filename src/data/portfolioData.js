import Keyur from "/keyur.webp";
// project images

import Soc from "/assets/projectImages/soc.webp";
import Netcrypt from "/assets/projectImages/netcrypt.webp";

const portfolioData = [
  {
    About: {
      name: "Keyur Parmar",
      age: "23",
      role: "Cyber Security Analyst",
      location: "Anand, Gujarat",
      heading: "Cyber Security Analyst | Threat Detection & Defense",
      subHeading: "Passionate about securing digital infrastructure through proactive threat analysis and incident response",
      intro: "Dedicated Cyber Security Analyst with expertise in threat detection, vulnerability assessment, and network security. Committed to protecting systems and data by implementing robust security measures, conducting thorough penetration testing, and staying updated with the latest cybersecurity trends and attack vectors.",
      photo: Keyur,
    },
    Work: [
      // SOC Threat Research Intern | Hacker4Help
      {
        date: "Dec 2025 - Present",
        company: "Hacker4Help",
        role: "SOC Threat Research Intern",
        points: [
          "Operating SOC setup and SIEM tools for real-time threat monitoring",
          "Conducting threat research based on active attacks and threat intelligence",
          "Managing and alerting on Active Directory attacks and generating security alerts",
        ],
      },
      // Cyber Security & Digital Forensics Intern | CID
      {
        date: "Aug 2025 - Nov 2025",
        company: "CID, Gandhinagar, Gujarat",
        role: "Cyber Security & Digital Forensics Intern",
        points: [
          "Assisted in ongoing cybercrime investigations and digital evidence analysis",
          "Supported officers in OSINT, social media tracing, and case documentation",
          "Learned advanced cyber forensics tools and investigative procedures",
        ],
      },
    ],
    Education: [
      {
        date: "2024 - Present",
        company: "Indus University (IU), Ahmedabad",
        role: "Master of Science in Cyber Security",
        points: ["Aggregate: 10.00 CGPA"],
      },
      {
        date: "2021 - 2024",
        company: "Sardar Patel University, V. V. Nagar, Anand",
        role: "Bachelor of Computer Applications",
        points: ["Aggregate: 9.00 CGPA"],
      },
    ],
    projects: [
      // SOC Setup
      {
        title: "SOC Setup",
        image: Soc,
        description:
          "Mini SOC environment using Wazuh SIEM for monitoring Windows and Linux endpoints with incident detection and analysis.",
        live: "#",
        github: "",
        tech: [
          "Wazuh",
          "SIEM",
          "MITRE ATT&CK",
          "Log Analysis",
          "Incident Response",
          "Windows",
          "Linux",
        ],
      },
      // NetCrypt
      {
        title: "NetCrypt",
        image: Netcrypt,
        description:
          "Network Traffic Analyzer & Encrypted Communication Tool - A tool to simulate and monitor real-time network traffic, detecting insecure communication channels and exposed credentials.",
        live: "#",
        github: "",
        tech: [
          "Python",
          "Flask",
          "Scapy",
          "React",
          "Tailwind CSS",
          "SSL/TLS",
          "Network Analysis",
        ],
      },
    ],
    blogs: [
      // The Art of the Impersonated Payout
      {
        title: "The Art of the Impersonated Payout: A Deep Dive into Social Engineering Heists",
        description:
          "Business Email Compromise (BEC) is one of the most financially damaging cybercrime techniques today, relying less on malware and more on social engineering tactics.",
        url: "https://medium.com/@k3yurrr",
        alt: "social engineering heists",
        date: "Jan 21",
      },
      // AI-Driven Reconnaissance
      {
        title: "AI-Driven Reconnaissance: The New Frontier of OSINT for the Modern Hacker",
        description:
          "Whether it is cyber defense or offense, information reigns supreme. Explore how AI is transforming OSINT capabilities for both ethical and malicious actors.",
        url: "https://medium.com/@k3yurrr",
        alt: "OSINT AI reconnaissance",
        date: "Jan 19",
      },
      // Inside the Web Crawler Workflow
      {
        title: "Inside the Web Crawler Workflow: Architecture Mapping and Risk Discovery",
        description:
          "Web crawlers play a significant role in cybersecurity, automated tools tasked with the systematic exploration and analysis of web infrastructure for vulnerabilities.",
        url: "https://medium.com/@k3yurrr",
        alt: "web crawler security",
        date: "Jan 2",
      },
      // Networking: The Hacker's Alpha and Omega
      {
        title: "Networking: The Hacker's Alpha and Omega!",
        description:
          "Networking is the foundation of hacking and cybersecurity, not just a supporting skill. Every cyberattack starts with reconnaissance through networking.",
        url: "https://medium.com/@k3yurrr",
        alt: "networking hacking",
        date: "Dec 20, 2025",
      },
      // Sanchar Saathi
      {
        title: "Sanchar Saathi: The app everyone's buzzing about!",
        description:
          "The Sanchar Saathi app has emerged as a significant digital initiative designed to empower citizens against mobile phone fraud and cybercrimes.",
        url: "https://medium.com/@k3yurrr",
        alt: "sanchar saathi app",
        date: "Dec 8, 2025",
      },
      // Qubes OS
      {
        title: "Qubes OS: The Digital Fortress and the Forensic Investigator's Nightmare!",
        description:
          "In an increasingly hostile digital landscape, Qubes OS stands out as a powerful security-focused operating system with advanced isolation capabilities.",
        url: "https://medium.com/@k3yurrr",
        alt: "qubes os security",
        date: "Dec 6, 2025",
      },
      // VM Networking
      {
        title: "Understanding VM Networking",
        description:
          "Virtualization has completely changed the way computing resources are managed by allowing multiple operating systems to run on a single physical machine.",
        url: "https://medium.com/@k3yurrr",
        alt: "vm networking",
        date: "Dec 2, 2025",
      },
      // YOUR PC'S DIGITAL SHIELDS
      {
        title: "YOUR PC'S DIGITAL SHIELDS",
        description:
          "Your computer is equipped with inbuilt security features that help mitigate potential vulnerabilities to exploit the system.",
        url: "https://medium.com/@k3yurrr",
        alt: "pc security shields",
        date: "Nov 28, 2025",
      },
      // Wazuh Setup
      {
        title: "Setting up Wazuh in the Windows and deploying Windows agent",
        description:
          "Wazuh is a free, open-source security platform that unifies Extended Detection and Response (XDR) and Security Information and Event Management (SIEM).",
        url: "https://medium.com/@k3yurrr",
        alt: "wazuh windows setup",
        date: "Nov 4, 2025",
      },
      // Phishing Evolution
      {
        title: "How phishing is evolving and getting more sophisticated",
        description:
          "Phishing is one of the most used and oldest cyber attacks by cybercriminals. Phishing has affected many big companies and organizations worldwide.",
        url: "https://medium.com/@k3yurrr",
        alt: "phishing attacks",
        date: "Jul 16, 2025",
      },
    ],
  },
];

export default portfolioData;
