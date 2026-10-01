'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LuMapPin,
  LuPhoneCall,
  LuMail,
  LuClock,
  LuSend,
  LuSparkles,
  LuCircleCheck,
} from 'react-icons/lu';

export default function ContactSection(): React.JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API Call / Form Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', course: '', message: '' });
    }, 1200);
  };

  return (
    <section className="w-full bg-zinc-50 px-4 py-7 md:p-14 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-100 text-blue-700 border border-blue-200/60 mb-3"
          >
            GET IN TOUCH
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight"
          >
            Connect With <span className="text-orange-600">Our Experts</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-zinc-600 text-sm sm:text-base leading-relaxed"
          >
            Have questions about MBBS, Engineering, or Management admissions? Fill out the form or reach out to us directly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column: Official Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-gradient-to-br from-violet-700  to-blue-700 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between"
          >
            {/* Background Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                Contact Information
              </h3>
              <p className="text-zinc-200 text-xs sm:text-sm leading-relaxed mb-8">
                Reach out to Career Coach Pradeep for personalized guidance and career clarity.
              </p>

              <div className="space-y-6">
                {/* Office Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/50 backdrop-blur-md border border-white/50 flex items-center justify-center shrink-0 text-white">
                    <LuMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
                      Our Location
                    </h4>
                    <p className="text-sm font-medium text-white mt-0.5">
                      Vasant Kunj, New Delhi - 110070
                    </p>
                  </div>
                </div>

                {/* Call Us */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/50 backdrop-blur-md border border-white/50 flex items-center justify-center shrink-0 text-white">
                    <LuPhoneCall className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
                      Call Us
                    </h4>
                    <a
                      href="tel:+918510930478"
                      className="text-sm font-bold text-white hover:text-blue-300 transition-colors mt-0.5 block"
                    >
                      +91-8510930478
                    </a>
                  </div>
                </div>

                {/* Email Us */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/50 backdrop-blur-md border border-white/50 flex items-center justify-center shrink-0 text-white">
                    <LuMail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
                      Email Us
                    </h4>
                    <a
                      href="mailto:info@careercoachpradeep.com"
                      className="text-sm font-medium text-white hover:text-blue-300 transition-colors mt-0.5 block"
                    >
                      info@careercoachpradeep.com
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/50 backdrop-blur-md border border-white/50 flex items-center justify-center shrink-0 text-white">
                    <LuClock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
                      Counseling Hours
                    </h4>
                    <p className="text-sm font-medium text-white mt-0.5">
                      Mon - Sat: 9:30 AM - 6:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/50 text-xs text-zinc-200">
              © Career Coach Pradeep. All Rights Reserved.
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-zinc-200/80 shadow-lg shadow-zinc-200/40"
          >
            <h3 className="text-2xl font-bold text-zinc-900 mb-2">
              Send Us a Message
            </h3>
            <p className="text-zinc-600 text-xs sm:text-sm mb-6">
              Fill in details below for quick call-back from our admission counselors.
            </p>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-3">
                <LuCircleCheck className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold text-zinc-900">
                  Thank You for Reaching Out!
                </h4>
                <p className="text-sm text-zinc-600">
                  Your message has been received. Our counselor will get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 placeholder:text-zinc-500 text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 placeholder:text-zinc-500 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rahul@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 placeholder:text-zinc-500 text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Course Interested In */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                      Course Interested
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200  placeholder:text-zinc-500 text-sm outline-none transition-all text-zinc-700"
                    >
                      <option value="">Select Course...</option>
                      <option value="MBBS">MBBS / Medical</option>
                      <option value="Engineering">B.Tech / Engineering</option>
                      <option value="Management">MBA / Management</option>
                      <option value="Other">Other Counseling</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                    Your Message / Query *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your qualification, score or queries..."
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 placeholder:text-zinc-500 text-sm outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-orange-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all "
                >
                  {isSubmitting ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <LuSend className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}