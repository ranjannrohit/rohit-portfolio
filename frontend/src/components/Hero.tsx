import React, { useEffect, useState } from 'react';

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaReddit,
  FaPhone,
  FaEnvelope,
  FaTelegram,
  FaDiscord,
  FaFileDownload
} from 'react-icons/fa';

import {
  ArrowDown,
  Sparkles,
  BarChart3,
  Database,
  LineChart,
  PieChart
} from 'lucide-react';

export const Hero = () => {

  const [isVisible, setIsVisible] = useState(false);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const [typedName, setTypedName] = useState("");

  const fullName = "Rohit Ranjan";

  useEffect(() => {

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {

      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });

    };

    window.addEventListener(
      'mousemove',
      handleMouseMove
    );

    return () =>
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );

  }, []);

  useEffect(() => {

    let index = 0;

    const typing = setInterval(() => {

      setTypedName(
        fullName.slice(0, index + 1)
      );

      index++;

      if (index > fullName.length) {

        clearInterval(typing);

      }

    }, 260);

    return () => clearInterval(typing);

  }, []);

  useEffect(() => {

const statsSection = document.getElementById("statsSection");

if(!statsSection) return;

const animateCounter = (
id:string,
target:number,
suffix:string
)=>{

const element=document.getElementById(id);

if(!element) return;

let current=0;

const duration=4200;

const steps=160;

const increment=target/steps;

const timer=setInterval(()=>{

current+=increment;

if(current>=target){

clearInterval(timer);

if(target===2000000){

element.innerText="2M+";

}else{

element.innerText=`${target}${suffix}`;

}

return;

}

element.innerText=
Math.floor(current).toLocaleString();

},duration/steps);

};

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

setTimeout(()=>{

animateCounter(
"recordsCounter",
2000000,
"+"
);

animateCounter(
"certCounter",
20,
"+"
);

animateCounter(
"projectCounter",
15,
"+"
);

animateCounter(
"internCounter",
3,
""
);

},500);

observer.disconnect();

}

});

},

{
threshold:0.4
}

);

observer.observe(statsSection);

return()=>observer.disconnect();

},[]);

  const handleScrollToAbout = () => {

    const aboutSection =
      document.getElementById('about');

    if (aboutSection) {

      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    }

  };

  const socialLinks = [

    {
      icon: FaPhone,
      href: "tel:+91-9321043106",
      label: "Call",
      color: "text-emerald-400",
      hoverBg: "hover:bg-emerald-500/20",
    },

    {
      icon: FaEnvelope,
      href: "mailto:rohitranjan09082002@gmail.com",
      label: "Email",
      color: "text-violet-400",
      hoverBg: "hover:bg-violet-500/20",
    },

    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/rohitranjann",
      label: "LinkedIn",
      color: "text-blue-400",
      hoverBg: "hover:bg-blue-500/20",
    },

    {
      icon: FaGithub,
      href: "https://github.com/ranjannrohit",
      label: "GitHub",
      color: "text-gray-300",
      hoverBg: "hover:bg-gray-500/20",
    },

    {
      icon: FaTwitter,
      href: "https://twitter.com/w453y",
      label: "Twitter",
      color: "text-sky-400",
      hoverBg: "hover:bg-sky-500/20",
    },

    {
      icon: FaReddit,
      href: "https://reddit.com/u/w453y",
      label: "Reddit",
      color: "text-orange-400",
      hoverBg: "hover:bg-orange-500/20",
    },

    {
      icon: FaTelegram,
      href: "https://t.me/w453y",
      label: "Telegram",
      color: "text-cyan-400",
      hoverBg: "hover:bg-cyan-500/20",
    },

    {
      icon: FaDiscord,
      href: "https://discordapp.com/users/791356749348601866",
      label: "Discord",
      color: "text-indigo-400",
      hoverBg: "hover:bg-indigo-500/20",
    }

  ];

  return (

    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Floating analytics icons */}

        <div className="absolute top-24 left-24 opacity-20 animate-float">
          <BarChart3 className="text-violet-400 w-12 h-12" />
        </div>

        <div
          className="absolute top-40 right-32 opacity-20 animate-float"
          style={{ animationDelay: '1s' }}
        >
          <Database className="text-cyan-400 w-12 h-12" />
        </div>

        <div
          className="absolute bottom-32 left-40 opacity-20 animate-float"
          style={{ animationDelay: '2s' }}
        >
          <PieChart className="text-pink-400 w-12 h-12" />
        </div>

        <div
          className="absolute bottom-20 right-24 opacity-20 animate-float"
          style={{ animationDelay: '1.5s' }}
        >
          <LineChart className="text-emerald-400 w-12 h-12" />
        </div>

        {/* Gradient Orbs */}

        <div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] animate-pulse-glow"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
          }}
        />

        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px] animate-pulse-glow"
        />

        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px]" />

        {/* Grid */}

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      </div>

      <div className="container mx-auto px-6 text-center relative z-10">

        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Top Line */}

          {/* Heading */}

<div className="mb-8">

  {/* Top Badge */}

  <div className="inline-flex items-center justify-center gap-3 mb-8 mt-6 px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">

    <Sparkles className="text-violet-400 w-4 h-4" />

    <span className="text-xs md:text-sm text-gray-400 tracking-[0.25em] uppercase">

      Turning Data Into Decisions

    </span>

  </div>

  <p className="text-2xl md:text-3xl text-gray-400 mb-3">

    Hi, I'm

  </p>

  <div className="leading-none">

    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold h-[80px] md:h-[110px]">

      <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">

        {typedName.split(" ")[0]}

      </span>

    </h1>

    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold h-[80px] md:h-[110px]">

      <span className="text-white">

        {typedName.split(" ")[1] || ""}

      </span>

      <span className="text-cyan-400 animate-pulse">

        

      </span>

    </h1>

  </div>

</div>

          {/* Roles */}

          <p className="text-lg md:text-2xl text-gray-400 mb-10 font-light">

            <span className="text-violet-400">
              Data Analyst
            </span>

            <span className="mx-3 text-gray-600">
              •
            </span>

            <span className="text-pink-400">
              Power BI
            </span>

            <span className="mx-3 text-gray-600">
              •
            </span>

            <span className="text-cyan-400">
              Business Intelligence
            </span>

          </p>

          {/* Description */}

          <p className="text-base md:text-lg text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">

            Transforming raw datasets into meaningful insights through analytics,
            dashboards, reporting and business intelligence workflows focused on
            clarity, impact and smarter decision making.

          </p>

          {/* KPI Cards */}

          <div
id="statsSection"
className="grid grid-cols-2 md:grid-cols-5 gap-5 max-w-6xl mx-auto mb-12"
>

            <div className="liquid-glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300">

              <h3 id="recordsCounter" className="text-cyan-400 text-3xl font-bold mb-2">

                0

              </h3>

              <p className="text-gray-400 text-sm">

                Records Analyzed

              </p>

            </div>

            <div className="liquid-glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300">

              <h3 id="certCounter" className="text-violet-400 text-3xl font-bold mb-2">

                0

              </h3>

              <p className="text-gray-400 text-sm">

                Certifications

              </p>

            </div>

            <div className="liquid-glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300">

              <h3 id="projectCounter" className="text-pink-400 text-3xl font-bold mb-2">

                0

              </h3>

              <p className="text-gray-400 text-sm">

                Projects

              </p>

            </div>

            <div className="liquid-glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300">

              <h3 id="internCounter" className="text-emerald-400 text-3xl font-bold mb-2">

                0

              </h3>

              <p className="text-gray-400 text-sm">

                Internships

              </p>

            </div>

            {/* Resume Card */}

            <a
              href="/resume.pdf"
              download
              className="liquid-glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center items-center"
            >

              <FaFileDownload className="text-cyan-400 text-3xl mb-3" />

              <p className="text-white font-semibold">

                Resume

              </p>

              <p className="text-gray-400 text-sm mt-1">

                Download PDF

              </p>

            </a>

          </div>

          
          {/* Socials */}

          <div className="grid grid-cols-4 md:grid-cols-8 gap-3 max-w-5xl mx-auto">

            {socialLinks.map((social) => (

              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? "_blank" : undefined}
                rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className={`group p-4 rounded-xl liquid-glass ${social.hoverBg} hover:scale-110 hover:-translate-y-1 transition-all duration-300`}
              >

                <social.icon className={`${social.color} text-xl mx-auto mb-2`} />

                <p className="text-xs text-gray-400">

                  {social.label}

                </p>

              </a>

            ))}

          </div>
          {/* Button */}

          <div className="flex justify-center mt-20 mb-20">

            <button
              onClick={handleScrollToAbout}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
            >

              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600" />

              <span className="absolute inset-[2px] bg-[#0a0a0a] rounded-full" />

              <span className="relative z-10 text-white font-semibold">

                Explore My Journey

              </span>

              <ArrowDown className="relative z-10 text-white" />

            </button>

          </div>

        </div>

      </div>

    </section>

  );

};