const skillCategories = [
    {
        label: "Security Operations",
        color: "blue",
        skills: [
            "SIEM (Wazuh)",
            "SOC Monitoring",
            "Incident Response",
            "Alert Triage",
            "Log Analysis",
            "MITRE ATT&CK",
            "Threat Detection",
        ],
    },
    {
        label: "Offensive Security",
        color: "red",
        skills: [
            "Penetration Testing",
            "Red Team Operations",
            "Vulnerability Assessment",
            "Attack Vector Analysis",
            "Responsible Disclosure",
        ],
    },
    {
        label: "Digital Forensics",
        color: "green",
        skills: [
            "Digital Evidence Analysis",
            "OSINT",
            "Reverse Attack Analysis",
            "Social Media Tracing",
            "Cybercrime Investigation",
        ],
    },
    {
        label: "Network & Infrastructure",
        color: "yellow",
        skills: [
            "Network Traffic Analysis",
            "Wireshark / Scapy",
            "DNS Analysis",
            "SSL/TLS",
            "Windows / Linux / Ubuntu",
            "Active Directory",
        ],
    },
    {
        label: "Programming & Scripting",
        color: "purple",
        skills: [
            "Python",
            "Bash Scripting",
            "Flask",
            "React",
            "Security Automation",
        ],
    },
];

const colorMap = {
    blue: {
        badge:
            "bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800",
        dot: "bg-blue-500",
        heading: "text-blue-600 dark:text-blue-400",
    },
    red: {
        badge:
            "bg-red-50 text-red-700 border border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800",
        dot: "bg-red-500",
        heading: "text-red-600 dark:text-red-400",
    },
    green: {
        badge:
            "bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800",
        dot: "bg-green-500",
        heading: "text-green-600 dark:text-green-400",
    },
    yellow: {
        badge:
            "bg-yellow-50 text-yellow-700 border border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800",
        dot: "bg-yellow-500",
        heading: "text-yellow-600 dark:text-yellow-400",
    },
    purple: {
        badge:
            "bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800",
        dot: "bg-purple-500",
        heading: "text-purple-600 dark:text-purple-400",
    },
};

const Skills = () => {
    return (
        <section aria-label="Technical skills" className="w-full">
            <h2 className="font-calistoga xs:text-xl md:text-3xl mb-6">
                technical skills
            </h2>
            <div className="flex flex-col gap-5">
                {skillCategories.map((category) => {
                    const c = colorMap[category.color];
                    return (
                        <div key={category.label}>
                            <div className="flex items-center gap-2 mb-3">
                                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${c.dot}`} />
                                <span className={`text-xs font-semibold uppercase tracking-widest ${c.heading}`}>
                                    {category.label}
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className={`text-xs font-medium px-3 py-1.5 rounded-full ${c.badge}`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;