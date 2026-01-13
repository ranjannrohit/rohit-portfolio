import React from 'react';
import { Award, ExternalLink, Sparkles } from 'lucide-react';

import {
  FaDatabase,
  FaPython,
  FaMicrosoft,
  FaGitAlt,
  FaChartBar,
} from 'react-icons/fa';

import {
  SiPostgresql,
  SiPandas,
  SiNumpy,
} from 'react-icons/si';

import { ScrollReveal } from './ui/ScrollReveal';


export const Skills = () => {
  const CustomIcon = ({ src, alt, fallback, className = "w-5 h-5", iconSize = "w-5 h-5" }: { 
    src: string; 
    alt: string; 
    fallback: React.ReactNode; 
    className?: string;
    iconSize?: string;
  }) => (
    <div className="relative">
      <img 
        src={src} 
        alt={alt}
        className={iconSize}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const nextSibling = target.nextElementSibling as HTMLElement;
          if (nextSibling) {
            nextSibling.style.display = 'block';
          }
        }}
      />
      <div className="hidden">{fallback}</div>
    </div>
  );

  const technicalSkills = [
  { name: 'Data Analysis', icon: <FaDatabase className="text-emerald-400" /> },
  { name: 'SQL', icon: <SiPostgresql className="text-blue-400" /> },
  { name: 'MySQL', icon: <FaDatabase className="text-sky-400" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-indigo-400" /> },
  { name: 'Microsoft Excel', icon: <FaMicrosoft className="text-green-400" /> },
  { name: 'Advanced Excel', icon: <FaMicrosoft className="text-emerald-500" /> },
  { name: 'Power BI', icon: <FaChartBar className="text-yellow-400" /> },
  { name: 'Power BI DAX', icon: <FaChartBar className="text-yellow-500" /> },
  { name: 'Power Query', icon: <FaChartBar className="text-yellow-300" /> },
  { name: 'Dashboard Design', icon: <FaChartBar className="text-cyan-400" /> },
  { name: 'Data Visualization', icon: <FaChartBar className="text-purple-400" /> },
  { name: 'Business Intelligence', icon: <FaChartBar className="text-orange-400" /> },
  { name: 'KPI Analysis', icon: <FaChartBar className="text-rose-400" /> },
  { name: 'Reporting & Insights', icon: <FaChartBar className="text-violet-400" /> },
  { name: 'EDA', icon: <FaChartBar className="text-pink-400" /> },
  { name: 'Data Cleaning', icon: <FaDatabase className="text-teal-400" /> },
  { name: 'Data Transformation', icon: <FaDatabase className="text-cyan-500" /> },
  { name: 'Python', icon: <FaPython className="text-blue-500" /> },
  { name: 'Pandas', icon: <SiPandas className="text-indigo-400" /> },
  { name: 'NumPy', icon: <SiNumpy className="text-pink-400" /> },
  { name: 'Statistical Analysis', icon: <FaDatabase className="text-orange-300" /> },
  { name: 'Trend Analysis', icon: <FaChartBar className="text-green-300" /> },
  { name: 'Forecasting Basics', icon: <FaChartBar className="text-yellow-300" /> },
  { name: 'Data Storytelling', icon: <FaChartBar className="text-rose-300" /> },
  { name: 'ETL Concepts', icon: <FaDatabase className="text-cyan-300" /> },
  { name: 'CSV / Excel Handling', icon: <FaDatabase className="text-emerald-300" /> },
  { name: 'Business Metrics', icon: <FaChartBar className="text-indigo-300" /> },
  { name: 'A/B Testing Basics', icon: <FaDatabase className="text-pink-300" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-400" /> },
  { name: 'Stakeholder Reporting', icon: <FaChartBar className="text-blue-200" /> },
];


  const certifications = [
    {
      name: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      year: "2025",
      color: "red",
      icon: "/uploads/google.svg",
      externalLink: "https://www.coursera.org/account/accomplishments/specialization/certificate/Z2JGANLU4RUZ"
    },
  ];

  const talks = [
    {
      title: "Securing IPv6 Networks with Firewalls",
      event: "Workshop Session",
      organizer: "IIESOC, Dept. of CSE and COSH-NITK Surathkal",
      description: "Delivered a technical session on IPv6 network security, covering firewall architecture, stateful filtering, and deployment best practices for dual-stack environments.",
      color: "blue",
      icon: "/uploads/nitk.svg",
      fallback: <Presentation className="w-6 h-6 text-blue-400" />,
      externalLink: "https://www.nitk.ac.in/document/attachments/6599/2024_Workshop_on_IPv6_Deployment.pdf"
    },
    {
      title: "WAN Aggregation using OpenMPTCProuter (OMR)",
      event: "FOSS Meetup 2024",
      organizer: "FOSS United",
      description: "Introduced Multipath TCP (MPTCP) and OpenMPTCProuter, demonstrated real-world WAN aggregation, failover, and dynamic routing on Raspberry Pi.",
      color: "violet",
      icon: "/uploads/foss.svg",
      fallback: <Presentation className="w-6 h-6 text-purple-400" />,
      externalLink: "https://fossunited.org/c/mangalore/mangalore-october-2024/cfp/b4crbbvath"
    },
    {
      title: "Introduction to Self-Hosting with Free and Open Source Tools",
      event: "FOSS Meetup 2025",
      organizer: "FOSS United",
      description: "Presented self-hosting as a privacy-respecting, cloud-independent approach, covering Docker, Proxmox VE, reverse proxies, and backup best practices.",
      color: "emerald",
      icon: "/uploads/foss.svg",
      fallback: <Presentation className="w-6 h-6 text-emerald-400" />,
      externalLink: "https://fossunited.org/c/mangalore/mangalore-may-2025/cfp/8dk9fae74j"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { gradient: string; text: string; border: string }> = {
      blue: { gradient: "from-blue-500 to-indigo-500", text: "text-blue-400", border: "border-blue-500/30" },
      violet: { gradient: "from-violet-500 to-purple-500", text: "text-violet-400", border: "border-violet-500/30" },
      emerald: { gradient: "from-emerald-500 to-teal-500", text: "text-emerald-400", border: "border-emerald-500/30" },
      red: { gradient: "from-red-500 to-orange-500", text: "text-red-400", border: "border-red-500/30" },
      pink: { gradient: "from-pink-500 to-rose-500", text: "text-pink-400", border: "border-pink-500/30" },
    };
    return colors[color] || colors.violet;
  };

  return (
    <section 
      id="skills" 
      className="relative py-8 md:py-12 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-pink-600/8 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 -left-48 w-96 h-96 bg-blue-600/8 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Skills & </span>
            <span className="bg-gradient-to-r from-pink-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-pink-500" />
            <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
            <div className="h-px w-24 bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500" />
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500" />
          </div>
        </ScrollReveal>

        {/* Technical Skills */}
        <ScrollReveal className="max-w-7xl mx-auto mb-16" delay={100}>
          <div className="p-6 md:p-8 rounded-2xl liquid-glass">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-pink-500 to-violet-500">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">Technical Skills</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/5 transition-all duration-300 group cursor-default"
                >
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-gray-400 text-sm group-hover:text-white transition-colors">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Certifications */}
        <ScrollReveal className="max-w-4xl mx-auto mb-16" delay={150}>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Certifications</h3>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto" />
          </div>
          <div className="p-6 md:p-8 rounded-2xl liquid-glass">
            {certifications.map((cert, index) => {
              const colors = getColorClasses(cert.color);
              return (
                <div key={index} className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0">
                      <CustomIcon 
                        src={cert.icon} 
                        alt={cert.name}
                        fallback={<Award className="w-10 h-10 text-red-400" />}
                        iconSize="w-12 h-12"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-white mb-1">{cert.name}</h4>
                      <p className="text-gray-400">{cert.issuer} • {cert.year}</p>
                    </div>
                  </div>
                  {cert.externalLink && (
                    <a 
                      href={cert.externalLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-400" />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Talks & Presentations */}
        <ScrollReveal className="max-w-7xl mx-auto mb-16" delay={200}>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Talks & Presentations</h3>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {talks.map((talk, index) => {
              const colors = getColorClasses(talk.color);
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="group p-6 rounded-2xl liquid-glass hover:-translate-y-1 transition-transform duration-300 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <img 
                          src={talk.icon} 
                          alt={talk.title}
                          className={`w-12 h-12 object-contain ${(talk.icon.includes('foss') || talk.icon.includes('nitk')) ? 'invert brightness-200' : ''}`}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                      {talk.externalLink && (
                        <a 
                          href={talk.externalLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                        >
                          <ExternalLink className="w-4 h-4 text-gray-400" />
                        </a>
                      )}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">{talk.title}</h4>
                    <p className={`text-base font-semibold ${colors.text} mb-1`}>
                      {talk.event}
                    </p>
                    {talk.organizer && (
                      <p className="text-gray-500 text-sm mb-3">{talk.organizer}</p>
                    )}
                    <p className="text-gray-400 text-sm leading-relaxed">{talk.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Leadership & Community */}
        <ScrollReveal className="max-w-5xl mx-auto" delay={250}>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Leadership & Community</h3>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto" />
          </div>
          <div className="p-6 md:p-8 rounded-2xl liquid-glass">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <img 
                  src="/uploads/wec.svg" 
                  alt="Web Enthusiasts Club (WEC) NITK" 
                  className="w-14 h-14 object-contain flex-shrink-0"
                />
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Web Enthusiasts Club (WEC) NITK</h4>
                  <p className="text-lg font-semibold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                    Secretary, Systems and Security SIG
                  </p>
                </div>
              </div>
              <a 
                href="https://webclub.nitk.ac.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 self-start"
              >
                <ExternalLink className="w-5 h-5 text-gray-400" />
              </a>
            </div>
            <ul className="space-y-3">
              {[
                "Created 10+ thought-provoking CTF challenges for the annual cybersecurity competition",
                "Organized technical workshops on network security and infrastructure management",
                "Mentored junior students in systems administration and cybersecurity practices"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 group/item">
                  <div className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                  <span className="text-gray-400 leading-relaxed group-hover/item:text-gray-300 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
};
