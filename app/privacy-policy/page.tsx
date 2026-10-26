
const sections = [
  {
    title: "1. Introduction",
    paragraphs: [
      "At Pradeep Career Coach, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website, submit an enquiry, or use our educational counseling and admission support services.",
      "Our services include career counseling, MBBS abroad guidance, engineering admissions, management admissions, university selection, and related educational assistance.",
      "By using our website or contacting us, you acknowledge that you have read this Privacy Policy.",
    ],
  },
  {
    title: "2. Information We Collect",
    intro: "We may collect the following types of information depending on the services you request:",
    bullets: [
      ["Personal Information:", " Your name, phone number, email address, and city or location."],
      ["Academic Information:", " Educational qualifications, marks, entrance examination scores, academic interests, and preferred courses."],
      ["Admission Information:", " Preferred universities, application details, eligibility information, and relevant documents required for counseling or admission assistance."],
      ["Communication Details:", " Information you provide through contact forms, phone calls, emails, WhatsApp messages, or other communication channels."],
      ["Technical Information:", " Basic website usage data, browser details, device information, IP address, and cookie data, where applicable."],
    ],
    paragraphs: [
      "We collect only the information reasonably required for the relevant purpose.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    intro: "The information you provide may be used to:",
    bullets: [
      ["", "Understand your academic background and career goals."],
      ["", "Provide educational counseling and course recommendations."],
      ["", "Help you shortlist suitable colleges and universities."],
      ["", "Assist with admission applications and documentation."],
      ["", "Respond to your enquiries and provide requested information."],
      ["", "Share relevant admission updates, educational information, or service-related communications where permitted."],
      ["", "Improve our website, services, and communication process."],
      ["", "Meet applicable legal and regulatory requirements."],
    ],
    paragraphs: [
      "We will not use your personal information for unrelated purposes without an appropriate lawful basis.",
    ],
  },
  {
    title: "4. Sharing of Information",
    paragraphs: [
      "Pradeep Career Coach does not sell your personal information to third parties.",
      "Where necessary for the services you request, we may share relevant information with:",
    ],
    bullets: [
      ["", "Universities and colleges for admission-related purposes."],
      ["", "Authorised service providers supporting our website or communication systems."],
      ["", "Relevant professionals or service partners assisting with documentation and application procedures."],
      ["", "Government authorities or other parties where disclosure is required by applicable law."],
    ],
    after: "We aim to share only the information necessary for the relevant purpose. Information will be shared with your consent where required by law.",
  },
  {
    title: "5. Data Storage and Security",
    paragraphs: [
      "We take reasonable steps to protect your personal information against unauthorised access, misuse, loss, alteration, or disclosure. Depending on the information collected and the systems used, safeguards may include restricted access, secure storage, and appropriate technical measures.",
      "However, no website or electronic transmission method can be guaranteed to be completely secure. We encourage users to share personal and academic documents only through appropriate communication channels.",
    ],
  },
  {
    title: "6. Cookies and Website Analytics",
    paragraphs: [
      "Our website may use cookies and similar technologies to improve website functionality, understand visitor activity, and enhance the overall browsing experience. These technologies may help us understand which pages visitors use and how the website performs.",
      "You can manage cookies through your browser settings. Some website features may not function as intended if certain cookies are disabled. Where required, we will seek consent before using non-essential cookies.",
    ],
  },
  {
    title: "7. Third-Party Websites",
    paragraphs: [
      "Our website may contain links to third-party websites, including universities, educational institutions, examination authorities, and other resources.",
      "These websites operate independently and may have their own privacy policies and data practices. Pradeep Career Coach is not responsible for the privacy practices or content of external websites. We recommend reviewing the privacy policy of any third-party website before sharing personal information with it.",
    ],
  },
  {
    title: "8. Communication and Marketing",
    paragraphs: [
      "We may contact you regarding your enquiry, counseling session, admission process, or requested services through phone calls, email, or messaging platforms.",
      "We may also send relevant educational updates or promotional communications where permitted and, where required, with your consent. You can request to stop receiving promotional communications at any time. This will not necessarily stop essential communications relating to an ongoing enquiry or service.",
    ],
  },
  {
    title: "9. Data Retention",
    paragraphs: [
      "We retain personal information only for as long as reasonably necessary to fulfil the purpose for which it was collected, provide requested services, maintain relevant records, or meet applicable legal requirements.",
      "When information is no longer required, we will take appropriate steps to delete it or otherwise handle it in accordance with applicable law, subject to any legal retention obligations.",
    ],
  },
  {
    title: "10. Your Privacy Rights",
    intro: "Subject to applicable law, you may request to:",
    bullets: [
      ["", "Know how your personal information is being used."],
      ["", "Access relevant information held about you."],
      ["", "Correct inaccurate or incomplete information."],
      ["", "Withdraw consent where processing is based on consent."],
      ["", "Request deletion of personal information when it is no longer required and deletion is legally permissible."],
      ["", "Raise a concern about how your information is collected or used."],
    ],
    paragraphs: [
      "To exercise these rights, please contact us using the details provided below. We may need to verify your identity before processing your request.",
    ],
  },
  {
    title: "11. Privacy of Students Under 18",
    paragraphs: [
      "We recognise that some students seeking educational guidance may be under 18 years of age.",
      "Where required by applicable law, we will obtain verifiable consent from a parent or lawful guardian before processing a child's personal information. We encourage parents and guardians to participate in education-related discussions and enquiries involving minors.",
    ],
  },
  {
    title: "12. Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our services, website features, or applicable legal requirements.",
      "Any revised version will be published on this page with an updated revision date. We encourage visitors to review this page periodically.",
    ],
  },
];

const contactDetails = [
  { label: "Organisation", value: "Pradeep Career Coach" },
  { label: "Email", value: "info@careercoachpradeep.com", href: "mailto:info@careercoachpradeep.com" },
  { label: "Phone", value: "+91-8510930478", href: "tel:+918510930478" },
  { label: "Website", value: "Insert official website URL" },
  { label: "Address", value: "Vasant Kunj, New Delhi - 110070" },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white px-5 py-12 text-neutral-800 sm:px-8 sm:py-16">
      <div className="mx-auto w-full max-w-3xl">
        <header className="mb-10 border-b border-neutral-200 pb-8 sm:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Legal Information
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
            Learn how Pradeep Career Coach collects, uses, and protects your
            personal information.
          </p>
        </header>

        <article className="space-y-9 sm:space-y-10">
          {sections.map((section) => (
            <section key={section.title} className="scroll-mt-8">
              <h2 className="mb-3 text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl">
                {section.title}
              </h2>

              <div className="space-y-4 text-sm leading-7 text-neutral-600 sm:text-[15px]">
                {section.intro && <p>{section.intro}</p>}

                {section.paragraphs?.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}

                {section.bullets && (
                  <ul className="list-disc space-y-2 pl-5 marker:text-neutral-400">
                    {section.bullets.map(([label, text], index) => (
                      <li key={index}>
                        {label && (
                          <strong className="font-semibold text-neutral-800">
                            {label}
                          </strong>
                        )}
                        {text}
                      </li>
                    ))}
                  </ul>
                )}

                {section.after && <p>{section.after}</p>}
              </div>
            </section>
          ))}

          <section>
            <h2 className="mb-3 text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl">
              13. Contact Us
            </h2>

            <div className="space-y-4 text-sm leading-7 text-neutral-600 sm:text-[15px]">
              <p>
                If you have questions about this Privacy Policy, wish to
                exercise your privacy rights, or have a concern regarding
                your personal information, please contact us.
              </p>

              <dl className="divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-neutral-50 px-4 sm:px-5">
                {contactDetails.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-1 py-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
                  >
                    <dt className="shrink-0 text-neutral-500">
                      {item.label}
                    </dt>

                    <dd className="break-words font-medium text-neutral-800 sm:text-right">
                      {item.href ? (
                        <a
                          href={item.href}
                          className="underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-950 hover:decoration-neutral-700"
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <p>
                We will review privacy-related requests and respond in
                accordance with applicable requirements.
              </p>
            </div>
          </section>
        </article>

        <footer className="mt-12 flex flex-col gap-2 border-t border-neutral-200 pt-5 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <span>Pradeep Career Coach</span>
          <span>Privacy Policy</span>
        </footer>
      </div>
    </main>
  );
}
