import React from 'react';

import { Sparkles } from 'lucide-react';

import {
  FaDatabase,
  FaPython,
  FaMicrosoft,
  FaGitAlt,
  FaChartBar,
  FaBrain,
} from 'react-icons/fa';

import {
  SiPostgresql,
  SiPandas,
  SiNumpy,
} from 'react-icons/si';

import { ScrollReveal } from './ui/ScrollReveal';

export const Skills = () => {

  const skillCategories = [

    {
      title: 'Technical',
      color: 'from-blue-500 to-cyan-500',
      skills: [

        { name: 'SQL', icon: <SiPostgresql className="text-blue-400" /> },

        { name: 'PostgreSQL', icon: <SiPostgresql className="text-indigo-400" /> },

        { name: 'MySQL', icon: <FaDatabase className="text-sky-400" /> },

        { name: 'Python', icon: <FaPython className="text-blue-500" /> },

        { name: 'Pandas', icon: <SiPandas className="text-indigo-400" /> },

        { name: 'NumPy', icon: <SiNumpy className="text-pink-400" /> },

        { name: 'Git & Version Control', icon: <FaGitAlt className="text-red-400" /> },

        { name: 'ETL Pipelines', icon: <FaDatabase className="text-cyan-300" /> },

        { name: 'Data Transformation', icon: <FaDatabase className="text-teal-400" /> },

        { name: 'CSV / Excel Handling', icon: <FaDatabase className="text-emerald-300" /> },

      ]
    },

    {
      title: 'Analytics',
      color: 'from-violet-500 to-pink-500',
      skills: [

        { name: 'Data Analysis', icon: <FaDatabase className="text-emerald-400" /> },

        { name: 'EDA', icon: <FaChartBar className="text-pink-400" /> },

        { name: 'Trend Analysis', icon: <FaChartBar className="text-green-300" /> },

        { name: 'Forecasting', icon: <FaChartBar className="text-yellow-300" /> },

        { name: 'Statistical Analysis', icon: <FaDatabase className="text-orange-400" /> },

        { name: 'Predictive Analytics', icon: <FaBrain className="text-rose-300" /> },

        { name: 'Data Cleaning', icon: <FaDatabase className="text-cyan-500" /> },

        { name: 'Data Mining', icon: <FaDatabase className="text-emerald-300" /> },

        { name: 'Data Modelling', icon: <FaDatabase className="text-indigo-300" /> },

        { name: 'Query Optimization', icon: <FaDatabase className="text-red-300" /> },

      ]
    },

    {
      title: 'BI & Visualization',
      color: 'from-yellow-500 to-orange-500',
      skills: [

        { name: 'Power BI', icon: <FaChartBar className="text-yellow-400" /> },

        { name: 'Power BI DAX', icon: <FaChartBar className="text-yellow-500" /> },

        { name: 'Power Query', icon: <FaChartBar className="text-yellow-300" /> },

        { name: 'Dashboard Design', icon: <FaChartBar className="text-cyan-400" /> },

        { name: 'Data Visualization', icon: <FaChartBar className="text-purple-400" /> },

        { name: 'KPI Analysis', icon: <FaChartBar className="text-rose-400" /> },

        { name: 'Interactive Reporting', icon: <FaChartBar className="text-pink-400" /> },

        { name: 'Drill-through Analysis', icon: <FaChartBar className="text-violet-400" /> },

        { name: 'Business Metrics', icon: <FaChartBar className="text-indigo-300" /> },

        { name: 'Excel Automation', icon: <FaMicrosoft className="text-green-400" /> },

      ]
    },

    {
      title: 'Business',
      color: 'from-cyan-500 to-blue-500',
      skills: [

        { name: 'Business Intelligence', icon: <FaChartBar className="text-orange-400" /> },

        { name: 'Stakeholder Reporting', icon: <FaChartBar className="text-blue-300" /> },

        { name: 'Business Decision Support', icon: <FaChartBar className="text-cyan-300" /> },

        { name: 'Data Storytelling', icon: <FaChartBar className="text-violet-300" /> },

        { name: 'Reporting & Insights', icon: <FaChartBar className="text-pink-300" /> },

      ]
    },

    {
      title: 'AI / ML',
      color: 'from-pink-500 to-rose-500',
      skills: [

        { name: 'Machine Learning', icon: <FaBrain className="text-orange-300" /> },

        { name: 'ML Models', icon: <FaBrain className="text-yellow-300" /> },

        { name: 'AI Concepts', icon: <FaBrain className="text-fuchsia-300" /> },

      ]
    }

  ];

  return (

    <section
      id="skills"
      className="relative py-10 md:py-14 overflow-hidden bg-[#0a0a0a]"
    >

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-pink-600/10 rounded-full blur-[160px] animate-pulse-glow" />

        <div
          className="absolute bottom-1/3 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px] animate-pulse-glow"
          style={{ animationDelay: '1s' }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}

        <ScrollReveal className="text-center mb-16">

          <h2 className="text-5xl md:text-6xl font-bold mb-6">

            <span className="text-white">

              Analytics

            </span>

            {" "}

            <span className="bg-gradient-to-r from-pink-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">

              Stack

            </span>

          </h2>

          <p className="text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed">

            A modern analytics toolkit focused on transforming raw data
            into actionable business insights and decision-driven reporting.

          </p>

        </ScrollReveal>

        {/* Categories */}

        <div className="space-y-14 max-w-7xl mx-auto">

          {skillCategories.map((category, categoryIndex) => (

            <ScrollReveal
              key={category.title}
              delay={categoryIndex * 100}
            >

              <div className="p-7 md:p-10 rounded-3xl liquid-glass">

                {/* Category Header */}

                <div className="flex items-center gap-4 mb-10">

                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${category.color}`}>

                    <Sparkles className="w-6 h-6 text-white" />

                  </div>

                  <div>

                    <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-2">

                      Skill Category

                    </p>

                    <h3 className="text-2xl md:text-3xl font-bold text-white">

                      {category.title}

                    </h3>

                  </div>

                </div>

                {/* Skills */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">

                  {category.skills.map((skill, index) => (

                    <div
                      key={index}
                      className="group flex items-center gap-4 p-5 md:p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-violet-500/30 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300 cursor-default"
                    >

                      <div className="flex-shrink-0 text-xl group-hover:scale-110 transition-transform duration-300">

                        {skill.icon}

                      </div>

                      <span className="text-gray-300 text-[15px] md:text-base group-hover:text-white transition-colors">

                        {skill.name}

                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </ScrollReveal>

          ))}

        </div>

      </div>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

    </section>

  );

};