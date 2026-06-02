import React, { useState } from 'react';

import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react';

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaReddit
} from 'react-icons/fa';

import { toast } from 'sonner';

import { ScrollReveal } from './ui/ScrollReveal';

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const validateForm = (): boolean => {

    if (!formData.name.trim()) {

      toast.error('Please enter your name');

      return false;

    }

    if (!formData.email.trim()) {

      toast.error('Please enter your email');

      return false;

    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {

      toast.error('Please enter a valid email');

      return false;

    }

    if (!formData.message.trim()) {

      toast.error('Please enter your message');

      return false;

    }

    if (formData.message.trim().length < 10) {

      toast.error(
        'Message should be at least 10 characters'
      );

      return false;

    }

    return true;

  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {

      setSubmitStatus('success');

      toast.success(
        'Message sent successfully!'
      );

      setFormData({
        name: '',
        email: '',
        message: '',
        subject: '',
        phone: ''
      });

      setIsSubmitting(false);

      setTimeout(() => {

        setSubmitStatus('idle');

      }, 2500);

    }, 1800);

  };

  const getButtonContent = () => {

    if (isSubmitting) {

      return (
        <>
          <Loader2
            className="animate-spin"
            size={20}
          />
          <span>Sending...</span>
        </>
      );

    }

    if (submitStatus === 'success') {

      return (
        <>
          <CheckCircle size={20} />
          <span>Sent Successfully</span>
        </>
      );

    }

    if (submitStatus === 'error') {

      return (
        <>
          <AlertCircle size={20} />
          <span>Try Again</span>
        </>
      );

    }

    return (
      <>
        <span>Send Message</span>
        <Send size={20} />
      </>
    );

  };

  const getButtonStyles = () => {

    if (submitStatus === 'success') {

      return 'bg-gradient-to-r from-green-600 to-emerald-600';

    }

    return 'bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600 hover:opacity-90';

  };

  const socialLinks = [

    {
      icon: FaGithub,
      href: "https://github.com/ranjannrohit",
      color: "hover:text-white hover:border-white/30"
    },

    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/rohitranjann",
      color: "hover:text-blue-400 hover:border-blue-400/30"
    },

    {
      icon: FaTwitter,
      href: "https://twitter.com/rohitranjan",
      color: "hover:text-sky-400 hover:border-sky-400/30"
    },

    {
      icon: FaReddit,
      href: "https://reddit.com/user/rohitranjan",
      color: "hover:text-orange-400 hover:border-orange-400/30"
    },

  ];

  return (

    <section
      id="contact"
      className="relative py-10 md:py-14 overflow-hidden bg-[#0a0a0a]"
    >

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute right-16 bottom-24 opacity-20">
...
</div>
        {/* Gradient Orbs */}

        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-violet-600/10 rounded-full blur-[150px] animate-pulse-glow" />

        <div
          className="absolute bottom-1/3 -right-48 w-96 h-96 bg-pink-600/10 rounded-full blur-[150px] animate-pulse-glow"
          style={{ animationDelay: '1s' }}
        />

        {/* Grid */}

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}

        <ScrollReveal className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">

            <span className="text-white">

              Let's

            </span>

            {" "}

            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">

              Connect

            </span>

          </h2>

          <div className="flex items-center justify-center gap-2">

            <div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-500" />

            <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />

            <div className="h-px w-24 bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500" />

            <div
              className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"
              style={{ animationDelay: '0.5s' }}
            />

            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500" />

          </div>

          <p className="text-gray-400 mt-6 max-w-lg mx-auto leading-relaxed">

            Open to analytics opportunities,
            internships, collaborations and
            data-driven projects.

          </p>

        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          {/* Contact Info */}

          <ScrollReveal
className="space-y-10 flex flex-col justify-center h-full"
delay={100}
direction="left"
>

            <div className="flex items-center gap-5 group">

              <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">

                <Mail
                  className="text-white"
                  size={20}
                />

              </div>

              <div>

                <h4 className="text-lg font-semibold text-white">

                  Email

                </h4>

                <p className="text-gray-400 text-[15px] md:text-base">

                  rohitranjan09082002@gmail.com

                </p>

              </div>

            </div>

            <div className="flex items-center gap-4 group">

              <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">

                <Phone
                  className="text-white"
                  size={20}
                />

              </div>

              <div>

                <h4 className="text-xl font-semibold text-white mb-1">

                  Phone

                </h4>

                <p className="text-gray-400">

                  +91-9321043106

                </p>

              </div>

            </div>

            <div className="flex items-center gap-4 group">

              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">

                <MapPin
                  className="text-white"
                  size={20}
                />

              </div>

              <div>

                <h4 className="text-lg font-semibold text-white">

                  Location

                </h4>

                <p className="text-gray-400">

                  Jaunpur, UP, India

                </p>

              </div>

            </div>

            {/* Socials */}

            <div className="pt-6">

              <h4 className="text-lg font-semibold text-white mb-4">

                Connect with me

              </h4>

              <div className="flex gap-3">

                {socialLinks.map((social, index) => (

                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-white/10 ${social.color}`}
                  >

                    <social.icon size={20} />

                  </a>

                ))}

              </div>

            </div>

          </ScrollReveal>

          {/* Form */}

          <ScrollReveal
            delay={150}
            direction="right"
          >

            <div className="p-6 md:p-8 rounded-2xl liquid-glass">

              <div className="mb-6">

                <h3 className="text-xl font-bold text-white">

                  Start a Conversation

                </h3>

              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <div className="grid sm:grid-cols-2 gap-4">

                  <div>

                    <label
                      htmlFor="name"
                      className="block text-gray-400 text-sm font-medium mb-2"
                    >

                      Your Name *

                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full rounded-xl border border-white/10 bg-white/5 text-white py-3 px-4 focus:outline-none focus:border-violet-500 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="email"
                      className="block text-gray-400 text-sm font-medium mb-2"
                    >

                      Your Email *

                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-xl border border-white/10 bg-white/5 text-white py-3 px-4 focus:outline-none focus:border-violet-500 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>

                <div className="grid sm:grid-cols-2 gap-4">

                  <div>

                    <label
                      htmlFor="subject"
                      className="block text-gray-400 text-sm font-medium mb-2"
                    >

                      Subject

                    </label>

                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full rounded-xl border border-white/10 bg-white/5 text-white py-3 px-4 focus:outline-none focus:border-violet-500 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600"
                      placeholder="Message subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="phone"
                      className="block text-gray-400 text-sm font-medium mb-2"
                    >

                      Phone (Optional)

                    </label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-xl border border-white/10 bg-white/5 text-white py-3 px-4 focus:outline-none focus:border-violet-500 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />

                  </div>

                </div>

                <div>

                  <label
                    htmlFor="message"
                    className="block text-gray-400 text-sm font-medium mb-2"
                  >

                    Your Message *

                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-xl border border-white/10 bg-white/5 text-white py-3 px-4 focus:outline-none focus:border-violet-500 focus:bg-white/10 transition-all duration-300 resize-none placeholder:text-gray-600"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength={10}
                  />

                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full inline-flex justify-center items-center gap-2 ${getButtonStyles()} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02]`}
                >

                  {getButtonContent()}

                </button>

              </form>

            </div>

          </ScrollReveal>

        </div>

        {/* Footer */}

        <ScrollReveal
          className="text-center mt-20 pt-8 border-t border-white/5"
          delay={200}
        >

          <p className="text-gray-600 text-sm">

            © {new Date().getFullYear()} Rohit Ranjan. All rights reserved.

          </p>

        </ScrollReveal>

      </div>

    </section>

  );

};