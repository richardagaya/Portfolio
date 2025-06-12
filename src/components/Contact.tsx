'use client';

import { FormEvent, useState } from 'react';
import { FaEnvelope, FaUser, FaPaperPlane, FaSpinner, FaPhone, FaBuilding, FaGlobe, FaHeadset, FaCheckCircle, FaBolt } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    budget: '',
    projectType: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const projectTypes = [
    'New Website Development',
    'Website Redesign',
    'E-commerce Development',
    'Custom Web Application',
    'SEO & Marketing',
    'Other'
  ];

  const timelines = [
    'Immediately',
    'Within 1 Month',
    'Within 3 Months',
    '3+ Months',
    'Not Sure'
  ];

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    '$10,000+'
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      console.log('Submitting form data:', formData);
      const response = await fetch('https://formspree.io/f/mdovbqbg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      console.log('Response status:', response.status);
      const responseData = await response.json();
      console.log('Response data:', responseData);
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          website: '',
          budget: '',
          projectType: '',
          timeline: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 sm:py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h5 className="text-theme-red text-lg sm:text-xl font-medium tracking-wide mb-3 sm:mb-4">START YOUR PROJECT</h5>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Get Your Free Consultation</h2>
            <div className="w-20 h-1 bg-theme-red mx-auto mb-6 sm:mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Take the first step towards transforming your online presence. Fill out the form below
              and we'll get back to you within 24 hours with a customized solution for your business.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-red focus:border-transparent text-gray-900"
                    required
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-red focus:border-transparent text-gray-900"
                    required
                  />
                </div>
              </div>

              {/* Company Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaPhone className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-red focus:border-transparent text-gray-900"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaBuilding className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-red focus:border-transparent text-gray-900"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaGlobe className="text-gray-400" />
                </div>
                <input
                  type="url"
                  name="website"
                  placeholder="Current Website (if any)"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-red focus:border-transparent text-gray-900"
                />
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative">
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-red focus:border-transparent appearance-none text-gray-900"
                    required
                  >
                    <option value="">Project Type *</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="relative">
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-red focus:border-transparent appearance-none text-gray-900"
                    required
                  >
                    <option value="">Budget Range *</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <div className="relative">
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-red focus:border-transparent appearance-none text-gray-900"
                    required
                  >
                    <option value="">Timeline *</option>
                    {timelines.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Tell us about your project goals and requirements... *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-red focus:border-transparent text-gray-900"
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center px-8 py-4 bg-theme-red text-white rounded-lg hover:bg-red-600 transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Get Free Consultation
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <p className="mt-4 text-green-600">Thank you! We'll be in touch within 24 hours.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="mt-4 text-red-600">Something went wrong. Please try again or email us directly.</p>
                )}
              </div>
            </form>
          </div>

          {/* Quick Booking Button */}
          <div className="text-center mt-8">
            <div className="mb-4 text-gray-600">
              Want to skip the form and schedule a call directly?
            </div>
            <a 
              href="https://calendly.com/richardagaya100/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-theme-red text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" 
                  clipRule="evenodd" 
                />
              </svg>
              Schedule a 30-min Call
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 sm:mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4 transform transition-transform hover:scale-105">
                <div className="bg-theme-red bg-opacity-10 p-3 rounded-full flex-shrink-0">
                  <FaHeadset className="text-xl text-theme-red" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <p className="text-sm text-gray-600">Expert Support</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4 transform transition-transform hover:scale-105">
                <div className="bg-theme-red bg-opacity-10 p-3 rounded-full flex-shrink-0">
                  <FaCheckCircle className="text-xl text-theme-red" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <p className="text-sm text-gray-600">Satisfaction</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4 transform transition-transform hover:scale-105">
                <div className="bg-theme-red bg-opacity-10 p-3 rounded-full flex-shrink-0">
                  <FaBolt className="text-xl text-theme-red" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">&lt;1h</div>
                  <p className="text-sm text-gray-600">Fast Response</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 