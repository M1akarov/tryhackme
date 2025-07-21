export const mockTryHackMeContent = [
  {
    id: 1,
    title: "Basic Penetration Testing",
    description: "Learn the fundamentals of penetration testing with this comprehensive beginner-friendly room. Cover reconnaissance, exploitation, and post-exploitation techniques.",
    difficulty: "Easy",
    category: "Penetration Testing",
    estimatedTime: "2 hours",
    tags: ["beginner", "pentest", "reconnaissance", "exploitation"],
    link: "https://tryhackme.com/room/basic-pentesting",
    isNew: true
  },
  {
    id: 2,
    title: "Blue Team Fundamentals",
    description: "Understand the blue team perspective in cybersecurity. Learn about incident response, threat hunting, and defensive security measures.",
    difficulty: "Medium",
    category: "Blue Team",
    estimatedTime: "3 hours",
    tags: ["defense", "incident-response", "threat-hunting", "soc"],
    link: "https://tryhackme.com/room/blueteamfundamentals",
    isNew: false
  },
  {
    id: 3,
    title: "Metasploit Exploitation",
    description: "Master the Metasploit framework for penetration testing. Learn to use exploits, payloads, and post-exploitation modules effectively.",
    difficulty: "Medium",
    category: "Exploitation",
    estimatedTime: "4 hours",
    tags: ["metasploit", "exploitation", "payloads", "framework"],
    link: "https://tryhackme.com/room/metasploitintro",
    isNew: false
  },
  {
    id: 4,
    title: "Web Application Security",
    description: "Dive deep into web application vulnerabilities including SQL injection, XSS, CSRF, and other OWASP Top 10 vulnerabilities.",
    difficulty: "Medium",
    category: "Web Security",
    estimatedTime: "5 hours",
    tags: ["web-security", "owasp", "sqli", "xss", "csrf"],
    link: "https://tryhackme.com/room/webappsec101",
    isNew: true
  },
  {
    id: 5,
    title: "Linux Privilege Escalation",
    description: "Learn various techniques for escalating privileges on Linux systems. Essential knowledge for red team operations and penetration testing.",
    difficulty: "Hard",
    category: "Privilege Escalation",
    estimatedTime: "6 hours",
    tags: ["linux", "privilege-escalation", "post-exploitation", "advanced"],
    link: "https://tryhackme.com/room/linuxprivesc",
    isNew: false
  },
  {
    id: 6,
    title: "Network Security Fundamentals",
    description: "Understand network protocols, security measures, and common attack vectors. Perfect foundation for aspiring security professionals.",
    difficulty: "Easy",
    category: "Network Security",
    estimatedTime: "3 hours",
    tags: ["networking", "protocols", "firewall", "ids-ips"],
    link: "https://tryhackme.com/room/networksecurity",
    isNew: false
  },
  {
    id: 7,
    title: "Active Directory Attacks",
    description: "Explore common attack techniques against Active Directory environments. Learn Kerberos attacks, lateral movement, and domain escalation.",
    difficulty: "Hard",
    category: "Active Directory",
    estimatedTime: "7 hours",
    tags: ["active-directory", "kerberos", "lateral-movement", "domain"],
    link: "https://tryhackme.com/room/attackingkerberos",
    isNew: true
  },
  {
    id: 8,
    title: "Malware Analysis Basics",
    description: "Introduction to malware analysis techniques. Learn static and dynamic analysis methods to understand malicious software behavior.",
    difficulty: "Medium",
    category: "Malware Analysis",
    estimatedTime: "4 hours",
    tags: ["malware", "analysis", "reverse-engineering", "dynamic-analysis"],
    link: "https://tryhackme.com/room/malwareanalysis",
    isNew: false
  }
];

export const getDifficultyColor = (difficulty) => {
  switch (difficulty?.toLowerCase()) {
    case 'easy':
      return 'text-green-400 bg-green-400/10 border-green-400/30';
    case 'medium':
      return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
    case 'hard':
      return 'text-red-400 bg-red-400/10 border-red-400/30';
    default:
      return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
  }
};