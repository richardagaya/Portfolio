'use client';

import { FormEvent, useState } from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaEnvelope, FaSpinner } from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mdovbqbg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      href: "https://github.com/richardagaya",
      label: "Github"
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/richard-agaya-6bb286257/",
      label: "LinkedIn"
    },
    {
      icon: <FaInstagram className="w-6 h-6" />,
      href: "https://www.instagram.com/_.agaya._/",
      label: "Instagram"
    },
    {
      icon: <FaYoutube className="w-6 h-6" />,
      href: "https://www.youtube.com/@codewithagaya",
      label: "Youtube"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-gray-800">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-8">
              Subscribe to my newsletter for the latest tech insights, tutorials, and project updates.
            </p>
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-red focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-4 bg-theme-red rounded-lg hover:bg-red-600 transition-colors flex items-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <FaSpinner className="animate-spin" />
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </div>
              {submitStatus === 'success' && (
                <p className="mt-4 text-green-400">Thanks for subscribing!</p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-4 text-red-400">Failed to subscribe. Please try again.</p>
              )}
            </form>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Richard Agaya</h2>
              <p className="text-gray-400">Software Developer</p>
            </div>

            <div className="flex items-center space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-theme-red transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              Copyright &copy; {new Date().getFullYear()} Richard Agaya. All rights reserved.
              <span className="text-theme-red ml-2">❤</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 