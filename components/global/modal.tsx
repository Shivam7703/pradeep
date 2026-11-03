'use client';

import React from 'react';
import { LuX } from 'react-icons/lu';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdmissionModal({ isOpen, onClose }: AdmissionModalProps): React.JSX.Element | null {
  if (!isOpen) return null;

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert('Enquiry submitted!');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 p-1"
        >
          <LuX className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-bold text-zinc-900">Enquire for Admissions</h3>
        <p className="text-xs text-zinc-500 mt-1 mb-4">
          Get detailed college cut-offs, fee structures, and seat matrix information.
        </p>

        <form onSubmit={handleFormSubmit} className="space-y-3 text-zinc-700">
          <div>
            <label className="block text-xs font-medium text-zinc-700 mb-1">Student Name</label>
            <input
              required
              type="text"
              placeholder="Enter full name"
              className="w-full px-3 py-2 border placeholder:text-zinc-400 border-zinc-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-zinc-700 mb-1">Phone / WhatsApp</label>
            <input
              required
              type="tel"
              placeholder="+91-8510930478"
              className="w-full px-3 py-2 border placeholder:text-zinc-400 border-zinc-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-zinc-700 mb-1">Course Interested In</label>
            <select className="w-full px-3 py-2 border placeholder:text-zinc-400 border-zinc-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option value="" disabled selected>
                Select a course
              </option>
              <option>B.Tech / Engineering</option>
              <option>MBA / PGDM</option>
              <option>BBA / IPMAT</option>
              <option>M.Tech</option>
              <option>Other</option>

            </select>
          </div>
          <button
            type="submit"
            className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg text-sm shadow transition"
          >
            Request Free Guidance
          </button>
        </form>
      </div>
    </div>
  );
}