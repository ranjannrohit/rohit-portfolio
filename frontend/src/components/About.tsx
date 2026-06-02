import React from 'react';

import {
  User,
  Target,
  Lightbulb,
  Code,
  Shield,
  Cloud,
  Database,
  BarChart3,
  LineChart,
  PieChart
} from 'lucide-react';

import { ScrollReveal } from './ui/ScrollReveal';

export const About = () => {

  const highlights = [

    {
      icon: Database,
      label: "SQL Analytics",
      color: "text-cyan-400"
    },

    {
      icon: Cloud,
      label: "Business Intelligence",
      color: "text-violet-400"
    },

    {
      icon: Shield,
      label: "Data Visualization",
      color: "text-pink-400"
    },

    {
      icon: Code,
      label: "Power BI & Reporting",
      color: "text-emerald-400"
    },

  ];

  const aboutCards = [

    {
      icon: User,

      title: "Who I Am",

      description:
        "A B.Tech student focused on analytics, dashboards, business intelligence and transforming raw datasets into meaningful insights through reporting and visualization.",

      gradient:
        "from-violet-500 via-purple-500 to-cyan-500"
    },

    {
      icon: Target,

      title: "Core Competencies",

      description:
        "SQL • Advanced Queries • Joins • CTEs • Window Functions • Aggregations • Excel • Power BI • Python • EDA • Dashboard Design • KPI Tracking • Data Cleaning • Business Intelligence Reporting",

      gradient:
        "from-cyan-500 via-blue-500 to-emerald-500"
    },

    {
      icon: Lightbulb,

      title: "What Drives Me",

      description:
        "Using analytics to identify trends, evaluate performance, uncover opportunities and support data-driven decision making.",

      gradient:
        "from-pink-500 via-violet-500 to-purple-500"
    }

  ];

  return (

    <section
      id="about"
      className="relative py-20 md:py-28 overflow-hidden bg-[#0a0a0a]"
    >

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Floating Analytics Icons */}

        <div className="absolute top-24 left-20 opacity-10 animate-float">

          <BarChart3 className="w-14 h-14 text-violet-400" />

        </div>

        <div
          className="absolute top-40 right-24 opacity-10 animate-float"
          style={{ animationDelay: "1s" }}
        >

          <Database className="w-14 h-14 text-cyan-400" />

        </div>

        <div
          className="absolute bottom-32 left-32 opacity-10 animate-float"
          style={{ animationDelay: "2s" }}
        >

          <PieChart className="w-14 h-14 text-pink-400" />

        </div>

        <div
          className="absolute bottom-24 right-24 opacity-10 animate-float"
          style={{ animationDelay: "1.5s" }}
        >

          <LineChart className="w-14 h-14 text-emerald-400" />

        </div>

        {/* Gradient Orbs */}

        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-violet-600/10 rounded-full blur-[150px] animate-pulse-glow" />

        <div
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-600/10 rounded-full blur-[150px] animate-pulse-glow"
          style={{ animationDelay: '1s' }}
        />

        {/* Grid */}

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />

      </div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="max-w-7xl mx-auto">

          {/* Header */}

          <ScrollReveal className="text-center mb-20">

            <h2 className="text-5xl md:text-6xl font-bold mb-6">

              <span className="text-white">

                About

              </span>

              {" "}

              <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">

                Me

              </span>

            </h2>

            <div className="flex items-center justify-center gap-2 mb-8">

              <div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-500" />

              <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />

              <div className="h-px w-24 bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500" />

              <div
                className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />

              <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500" />

            </div>

            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">

              Analytics-focused portfolio showcasing projects,
              certifications, internships and business intelligence experience.

            </p>

          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

            {/* Profile */}

            <ScrollReveal
              className="flex justify-center order-1 lg:order-2"
              delay={100}
              direction="right"
            >

              <div className="relative group">

                {/* Glow */}

                <div className="absolute -inset-5 bg-gradient-to-r from-violet-500 via-cyan-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse-glow" />

                {/* Border */}

                <div className="relative w-72 h-72 md:w-[380px] md:h-[380px]">

                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-cyan-500 to-pink-500 animate-rotate-slow p-[3px]">

                    <div className="w-full h-full rounded-full bg-[#0a0a0a]" />

                  </div>

                  {/* Image */}

                  <div className="absolute inset-[6px] rounded-full overflow-hidden">

                    <img
                      src="/uploads/profile.jpg"
                      alt="Rohit Ranjan"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                  </div>

                </div>

              </div>

            </ScrollReveal>

            {/* Content */}

            <ScrollReveal
              className="order-2 lg:order-1"
              delay={200}
              direction="left"
            >

              {/* Highlight Cards */}

              <div className="grid grid-cols-2 gap-4 mb-10">

                {highlights.map((item, index) => (

                  <div
                    key={item.label}
                    className="group flex items-center gap-3 p-4 rounded-xl liquid-glass hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-300"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >

                    <item.icon
                      className={`${item.color} w-6 h-6 group-hover:scale-110 transition-transform duration-300`}
                    />

                    <span className="text-gray-300 text-sm font-medium">

                      {item.label}

                    </span>

                  </div>

                ))}

              </div>

              {/* Paragraph */}

              <p className="text-gray-400 leading-relaxed text-lg md:text-xl">

                Focused on analytics, SQL-driven insights, dashboard development,
                KPI tracking and business intelligence reporting. I enjoy
                transforming raw datasets into actionable insights through SQL,
                Power BI, Excel and analytical workflows.

              </p>

            </ScrollReveal>

          </div>

          {/* About Cards */}

          <div className="grid md:grid-cols-3 gap-6">

            {aboutCards.map((card, index) => (

              <ScrollReveal
                key={card.title}
                delay={index * 100}
              >

                <div className="group relative p-7 rounded-2xl liquid-glass hover:border-white/10 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">

                  {/* Hover Glow */}

                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />

                  {/* Icon */}

                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} p-[1px] mb-5`}>

                    <div className="w-full h-full rounded-2xl bg-[#0a0a0a] flex items-center justify-center">

                      <card.icon className="w-7 h-7 text-white" />

                    </div>

                  </div>

                  {/* Title */}

                  <h3 className="text-2xl font-semibold text-white mb-4">

                    {card.title}

                  </h3>

                  {/* Description */}

                  <p className="text-gray-400 leading-relaxed text-[15px]">

                    {card.description}

                  </p>

                </div>

              </ScrollReveal>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

};