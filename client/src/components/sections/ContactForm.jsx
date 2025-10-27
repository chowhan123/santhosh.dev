import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare, CheckCircle, XCircle, Loader } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const [errors, setErrors] = useState({});

  // API URL - Backend server URL
  const API_URL = 'http://localhost:5000';

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: data.message || 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setStatus({ loading: false, success: false, error: false, message: '' });
        }, 5000);
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: error.message || 'Failed to send message. Please try again or email me directly at Santhoshnaik6929@gmail.com'
      });
      
      // Hide error message after 7 seconds
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: false, message: '' });
      }, 7000);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="flex justify-center">
            <svg width="200" height="20" viewBox="0 0 200 20" className="mt-2">
              <path
                d="M 10 15 Q 100 5, 190 15"
                stroke="#3B82F6"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                className="dark:stroke-blue-400"
              />
            </svg>
          </div>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        {/* Contact Form - Centered */}
        <form onSubmit={handleSubmit} className="space-y-5 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
          {/* Status Messages */}
          {status.success && (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-green-800 dark:text-green-200 text-sm">{status.message}</p>
            </div>
          )}

          {status.error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-red-800 dark:text-red-200 text-sm">{status.message}</p>
            </div>
          )}

          {/* Name & Email - Side by Side */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                Your Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-900 border ${
                    errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all text-sm`}
                  placeholder="John Doe"
                  disabled={status.loading}
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-900 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all text-sm`}
                  placeholder="john@example.com"
                  disabled={status.loading}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 bg-white dark:bg-gray-900 border ${
                errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all text-sm`}
              placeholder="Project Discussion / Job Opportunity"
              disabled={status.loading}
            />
            {errors.subject && (
              <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.subject}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              Message *
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400 dark:text-gray-500" />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-900 border ${
                  errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none transition-all text-sm`}
                placeholder="Tell me about your project or opportunity..."
                disabled={status.loading}
              ></textarea>
            </div>
            {errors.message && (
              <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status.loading}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 text-sm"
          >
            {status.loading ? (
              <>
                <Loader className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </button>

          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            I typically respond within 24 hours
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;