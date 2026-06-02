import React, { useState } from 'react';

import {
  ExternalLink,
  Github,
  Calendar,
  ChevronUp,
  ChevronDown,
  Folder,
  BarChart3
} from 'lucide-react';

import { ScrollReveal } from './ui/ScrollReveal';

export const Projects = () => {

  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);

  const toggleProject = (index: number) => {

    setExpandedProjects(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );

  };

  const projects = [

    {
      title: "Global Health Expenditure Dashboard",
      organization: "Power BI Analytics Project",
      period: "2026",
      description:
        "Interactive Power BI dashboard analyzing global healthcare expenditure trends, GDP allocation, life expectancy, and country-wise healthcare insights.",

      color: "emerald",

      details: [

        "Built an interactive Power BI dashboard using healthcare expenditure datasets from multiple countries.",

        "Created KPI cards, trend visualizations, and country comparison dashboards for better analytical insights.",

        "Performed data cleaning, transformation and modelling using Power Query and DAX.",

        "Analyzed healthcare spending patterns, GDP allocation and expenditure efficiency.",

      ],

      technologies: [
        "Power BI",
        "DAX",
        "Power Query",
        "Excel",
        "Data Visualization",
      ],

      github: null,
      external: null
    },

    {
      title: "AI Disease Predictor",
      organization: "Machine Learning Project",
      period: "2025",

      description:
        "AI-powered disease prediction system that analyzes user symptoms and predicts possible diseases using machine learning algorithms.",

      color: "blue",

      details: [

        "Built a machine learning model using Python and Scikit-learn for disease prediction.",

        "Implemented symptom preprocessing, dataset cleaning and predictive analysis workflows.",

        "Designed an interactive frontend interface for user-friendly predictions.",

        "Integrated ML classification algorithms for accurate disease prediction.",

      ],

      technologies: [
        "Python",
        "Machine Learning",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Flask",
      ],

      github: null,
      external: null
    },

    {
      title: "AI Resume Evaluator",
      organization: "NLP Analytics Project",
      period: "2025",

      description:
        "Smart resume evaluation system that compares resumes with job descriptions and provides ATS-based improvement recommendations.",

      color: "violet",

      details: [

        "Developed an NLP-based resume screening and evaluation system.",

        "Compared resumes with job descriptions using keyword matching and text similarity.",

        "Generated ATS optimization suggestions and resume improvement insights.",

        "Performed preprocessing, tokenization and text analysis using Python NLP libraries.",

      ],

      technologies: [
        "Python",
        "NLP",
        "Machine Learning",
        "Text Analytics",
        "Pandas",
      ],

      github: null,
      external: null
    },

    {
      title: "Face Recognition Attendance System",
      organization: "Computer Vision Project",
      period: "2024",

      description:
        "AI-powered attendance management system using face recognition technology for automated attendance tracking.",

      color: "orange",

      details: [

        "Developed a real-time attendance system using OpenCV and Python.",

        "Integrated facial recognition algorithms for identity verification.",

        "Automated attendance recording and CSV-based report generation.",

        "Built a GUI-based system using Tkinter for user interaction.",

      ],

      technologies: [
        "Python",
        "OpenCV",
        "Tkinter",
        "Pandas",
        "NumPy",
      ],

      github: null,
      external: null
    },

    {
      title: "Sales & Business Insights Dashboard",
      organization: "Business Intelligence Project",
      period: "2025",

      description:
        "Interactive business dashboard analyzing sales performance, revenue trends, customer insights and KPI metrics.",

      color: "pink",

      details: [

        "Created a business intelligence dashboard for sales and revenue analysis.",

        "Built interactive KPI cards and dynamic filtering systems.",

        "Analyzed customer trends and product performance metrics.",

        "Designed visually optimized dashboards for decision support.",

      ],

      technologies: [
        "Power BI",
        "Excel",
        "SQL",
        "Dashboard Design",
        "Business Intelligence",
      ],

      github: null,
      external: null
    },

    {
      title: "Databricks Data Engineering Project",
      organization: "Data Engineering Project",
      period: "2026",

      description:
        "Cloud-based analytics and ETL project using Databricks for scalable data processing and transformation workflows.",

      color: "cyan",

      details: [

        "Built ETL pipelines for processing and transforming structured datasets.",

        "Performed data cleaning, transformation and analytics workflows in Databricks.",

        "Worked with SQL and notebook-based analytics for business reporting.",

        "Optimized workflows for scalable analytics and reporting.",

      ],

      technologies: [
        "Databricks",
        "SQL",
        "ETL",
        "Data Engineering",
        "Analytics",
      ],

      github: null,
      external: null
    }

  ];

  const getColorClasses = (color: string) => {

    const colors: Record<string, {
      gradient: string;
      text: string;
      bg: string;
      border: string;
      glow: string;
    }> = {

      emerald: {
        gradient: "from-emerald-500 to-teal-500",
        text: "text-emerald-400",
        bg: "bg-emerald-500",
        border: "border-emerald-500/30",
        glow: "shadow-emerald-500/20"
      },

      blue: {
        gradient: "from-blue-500 to-indigo-500",
        text: "text-blue-400",
        bg: "bg-blue-500",
        border: "border-blue-500/30",
        glow: "shadow-blue-500/20"
      },

      violet: {
        gradient: "from-violet-500 to-purple-500",
        text: "text-violet-400",
        bg: "bg-violet-500",
        border: "border-violet-500/30",
        glow: "shadow-violet-500/20"
      },

      orange: {
        gradient: "from-orange-500 to-red-500",
        text: "text-orange-400",
        bg: "bg-orange-500",
        border: "border-orange-500/30",
        glow: "shadow-orange-500/20"
      },

      pink: {
        gradient: "from-pink-500 to-rose-500",
        text: "text-pink-400",
        bg: "bg-pink-500",
        border: "border-pink-500/30",
        glow: "shadow-pink-500/20"
      },

      cyan: {
        gradient: "from-cyan-500 to-blue-500",
        text: "text-cyan-400",
        bg: "bg-cyan-500",
        border: "border-cyan-500/30",
        glow: "shadow-cyan-500/20"
      },

    };

    return colors[color] || colors.violet;

  };

  return (

    <section
      id="projects"
      className="relative py-10 md:py-14 overflow-hidden bg-[#0a0a0a]"
    >

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-600/8 rounded-full blur-[150px] animate-pulse-glow" />

        <div
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-violet-600/8 rounded-full blur-[150px] animate-pulse-glow"
          style={{ animationDelay: '1s' }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[200px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}

        <ScrollReveal className="text-center mb-16">

          <h2 className="text-5xl md:text-6xl font-bold mb-6">

            <span className="text-white">

              Featured

            </span>

            {" "}

            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">

              Projects

            </span>

          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">

            Data analytics, dashboards, business intelligence and AI-driven solutions.

          </p>

        </ScrollReveal>

        {/* Projects Grid */}

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">

          {projects.map((project, index) => {

            const colors = getColorClasses(project.color);

            const isExpanded =
              expandedProjects.includes(index);

            return (

              <ScrollReveal
                key={index}
                delay={index * 100}
              >

                <div className={`group h-full p-7 md:p-9 rounded-3xl liquid-glass hover:-translate-y-2 hover:shadow-2xl ${colors.glow} flex flex-col transition-all duration-500`}>

                  {/* Top */}

                  <div className="flex items-start justify-between mb-7">

                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${colors.gradient} shadow-lg`}>

                      <BarChart3 className="w-7 h-7 text-white" />

                    </div>

                    <div className="flex gap-2">

                      {project.github && (

                        <a
                          href={project.github}
                          className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                          target="_blank"
                          rel="noopener noreferrer"
                        >

                          <Github className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />

                        </a>

                      )}

                      {project.external && (

                        <a
                          href={project.external}
                          className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                          target="_blank"
                          rel="noopener noreferrer"
                        >

                          <ExternalLink className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />

                        </a>

                      )}

                    </div>

                  </div>

                  {/* Title */}

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">

                    {project.title}

                  </h3>

                  {/* Organization */}

                  <p className={`text-lg font-semibold ${colors.text} mb-4`}>

                    {project.organization}

                  </p>

                  {/* Date */}

                  <div className="mb-5">

                    <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${colors.gradient} text-white text-sm font-medium`}>

                      <Calendar size={14} />

                      {project.period}

                    </span>

                  </div>

                  {/* Description */}

                  <p className="text-gray-400 leading-relaxed mb-7 text-[15px] md:text-base">

                    {project.description}

                  </p>

                  {/* Details */}

                  <ul className="space-y-4 mb-7 flex-1">

                    {(isExpanded
                      ? project.details
                      : project.details.slice(0, 2)
                    ).map((detail, i) => (

                      <li
                        key={i}
                        className="flex items-start gap-3"
                      >

                        <div className={`w-2 h-2 ${colors.bg} rounded-full mt-2 flex-shrink-0`} />

                        <span className="text-gray-400 text-sm leading-relaxed">

                          {detail}

                        </span>

                      </li>

                    ))}

                  </ul>

                  {/* Expand */}

                  {project.details.length > 2 && (

                    <button
                      onClick={() => toggleProject(index)}
                      className={`flex items-center gap-2 ${colors.text} hover:brightness-125 transition-all duration-300 text-sm font-medium mb-6`}
                    >

                      <span>

                        {isExpanded
                          ? 'Show Less'
                          : 'Show More'}

                      </span>

                      {isExpanded
                        ? <ChevronUp size={16} />
                        : <ChevronDown size={16} />
                      }

                    </button>

                  )}

                  {/* Tech Stack */}

                  <div className="flex flex-wrap gap-3 mt-auto pt-5 border-t border-white/5">

                    {project.technologies.map((tech, i) => (

                      <span
                        key={i}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                      >

                        {tech}

                      </span>

                    ))}

                  </div>

                </div>

              </ScrollReveal>

            );

          })}

        </div>

      </div>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

    </section>

  );

};