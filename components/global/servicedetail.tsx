"use client";
import React, { useState } from "react";
import Image from "next/image";
import { 
  MdCheckCircleOutline, 
  MdLocationOn, 
  MdPhone, 
  MdEmail, 
  MdAccessTime, 
  MdKeyboardArrowDown, 
  MdSend 
} from "react-icons/md";

export default function Visadetails({ data }: any) {
  // State for FAQ accordion toggle
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="lg:px-20 xl:px-28 md:p-12 sm:p-8 p-4 bg-gradient-to-b from-zinc-50/70 relative to-white/60">
      <div className="flex flex-wrap lg:flex-nowrap justify-between gap-8 relative w-full">
        
        {/* Main Content Area */}
        <div className="lg:w-[62%] w-full">
          {/* Hero Image */}
          <div className="relative rounded-2xl mb-10 group aspect-[5/3] overflow-hidden shadow-sm">
            <Image
              src={data?.img}
              alt={data?.title}
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Article Content */}
          <article className="mb-12">
            <div className="space-y-12">
              {data?.content?.map((section: any, secIndex: number) => (
                <div key={secIndex} className="space-y-5">
                  {/* Section Heading */}
                  {section?.heading && (
                    <div className="flex items-stretch gap-3">
                      <div className="w-1 rounded-full bg-blue-600 shrink-0" />
                      <h2
                        className="text-2xl sm:text-3xl font-semibold text-blue-900 leading-snug"
                        dangerouslySetInnerHTML={{ __html: section.heading }}
                      />
                    </div>
                  )}

                  {/* Subcontent */}
                  {section?.subcontent?.map((item: any, index: number) => (
                    <div key={index} className="space-y-3">
                      {/* Subheading */}
                      {item?.subheading && (
                        <p
                          className="text-xl sm:text-2xl font-semibold text-zinc-800 mt-4"
                          dangerouslySetInnerHTML={{ __html: item.subheading }}
                        />
                      )}

                      {/* Paragraph */}
                      {item?.para && (
                        <p
                          className="text-zinc-600 leading-relaxed text-base sm:text-[17px]"
                          dangerouslySetInnerHTML={{ __html: item.para }}
                        />
                      )}

                      {/* List */}
                      {Array.isArray(item?.list) && item.list.length > 0 && (
                        <ul className="space-y-2.5 mt-3">
                          {item.list.map((li: string, i: number) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-zinc-700 text-sm sm:text-base bg-blue-50/50 hover:bg-blue-50 transition-all duration-200 p-3.5 rounded-xl border border-blue-100"
                            >
                              <MdCheckCircleOutline className="text-blue-600 mt-0.5 shrink-0 text-[20px]" />
                              <span dangerouslySetInnerHTML={{ __html: li }} />
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Table */}
                      {item?.table && item?.table?.rows && (
                        <div className="overflow-x-auto rounded-xl border border-zinc-200 shadow-sm mt-4">
                          <table className="min-w-full text-sm sm:text-base">
                            <thead>
                              <tr>
                                {item.table.theading?.map((th: string, thIndex: number) => (
                                  <th
                                    key={thIndex}
                                    className="px-4 py-3.5 text-left bg-blue-900 text-white font-medium whitespace-nowrap"
                                  >
                                    {th}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {item.table.rows?.map((row: any, rIndex: number) => (
                                <tr
                                  key={rIndex}
                                  className="even:bg-zinc-50 hover:bg-blue-50/40 transition-colors duration-150"
                                >
                                  {row?.colum?.map((col: string, cIndex: number) => (
                                    <td
                                      key={cIndex}
                                      className="px-4 py-3 border-t border-zinc-100 text-zinc-700"
                                    >
                                      {col}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </article>

          {/* FAQ Accordion Section */}
          {Array.isArray(data?.faq) && data.faq.length > 0 && (
            <section className="mt-12 pt-8 border-t border-zinc-200">
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {data.faq.map((faqItem: any, faqIndex: number) => (
                  <div
                    key={faqIndex}
                    className="border border-zinc-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(faqIndex)}
                      className="w-full text-left p-4 sm:p-5 font-semibold text-zinc-800 flex justify-between items-center gap-4 hover:bg-zinc-50"
                    >
                      <span className="text-base sm:text-lg">{faqItem.que}</span>
                      <MdKeyboardArrowDown
                        className={`text-2xl text-zinc-500 transition-transform duration-300 shrink-0 ${
                          openFaq === faqIndex ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === faqIndex && (
                      <div className="p-4 sm:p-5 pt-0 text-zinc-600 border-t border-zinc-100 text-sm sm:text-base leading-relaxed bg-zinc-50/30">
                        {faqItem.ans}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar Component */}
        <aside className="lg:w-[38%] w-full lg:sticky lg:top-8 h-fit space-y-6">
          {/* Main Card Wrapper */}
          <div className="bg-white rounded-3xl shadow-xl border border-zinc-100 p-6 space-y-6">
            
            {/* Contact Details Card (Purple Blue Gradient) */}
            <div className="bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-800 text-white p-6 sm:p-7 rounded-2xl shadow-md space-y-6">
              <div>
                <h3 className="text-2xl font-bold tracking-wide">Contact Information</h3>
                <p className="text-indigo-100 text-xs sm:text-sm mt-1.5 leading-relaxed">
                  Reach out to Career Coach Pradeep for personalized guidance and career clarity.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-white/15 rounded-xl text-white shrink-0">
                    <MdLocationOn className="text-xl" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-semibold text-indigo-200 tracking-wider">
                      Our Location
                    </span>
                    <p className="font-medium text-white">Vasant Kunj, New Delhi – 110070</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-white/15 rounded-xl text-white shrink-0">
                    <MdPhone className="text-xl" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-semibold text-indigo-200 tracking-wider">
                      Call Us
                    </span>
                    <p className="font-medium text-white">+91-8510930478</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-white/15 rounded-xl text-white shrink-0">
                    <MdEmail className="text-xl" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-semibold text-indigo-200 tracking-wider">
                      Email Us
                    </span>
                    <p className="font-medium text-white break-all">info@careercoachpradeep.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-white/15 rounded-xl text-white shrink-0">
                    <MdAccessTime className="text-xl" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-semibold text-indigo-200 tracking-wider">
                      Counseling Hours
                    </span>
                    <p className="font-medium text-white">Mon – Sat: 9:30 AM – 6:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="space-y-5 px-1">
              <div>
                <h4 className="text-xl font-bold text-zinc-900">Send Us a Message</h4>
                <p className="text-zinc-500 text-xs mt-1">
                  Fill in details below for quick call-back from our admission counselors.
                </p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    required
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 9876543210"
                    required
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="rahul@example.com"
                    required
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-700">
                    Course Interested
                  </label>
                  <select
                    defaultValue=""
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition bg-white text-zinc-700"
                  >
                    <option value="" disabled>
                      Select Course...
                    </option>
                    <option value="mbbs-abroad">MBBS Abroad</option>
                    <option value="mbbs-india">MBBS in India</option>
                    <option value="btech">B.Tech Admission</option>
                    <option value="bba">BBA</option>
                    <option value="bcom">B.Com</option>
                    <option value="online-mba">Online MBA</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-700">
                    Your Message / Query <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your qualification, score or queries..."
                    required
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-orange-500/20 transition duration-200 flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry</span>
                  <MdSend className="text-base" />
                </button>
              </form>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}