import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaArrowLeft } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LAST_UPDATED = '1 May 2025';
const COMPANY = 'Vishvadhara Group';
const ABN = ''; // Add ABN when available
const EMAIL = 'privacy@vishvadharagroup.com.au';
const PHONE = '';
const ADDRESS = 'Australia';

const Section = ({ id, title, children }) => (
  <section id={id} className="mb-10 scroll-mt-28">
    <h2 className="text-xl font-bold text-gray-900 mb-3 pb-2 border-b border-gray-200">{title}</h2>
    <div className="text-gray-700 space-y-3 leading-relaxed">{children}</div>
  </section>
);

const toc = [
  { id: 'about', label: '1. About This Policy' },
  { id: 'collection', label: '2. What We Collect' },
  { id: 'how-collect', label: '3. How We Collect It' },
  { id: 'purpose', label: '4. Why We Collect It' },
  { id: 'disclosure', label: '5. Disclosure of Personal Information' },
  { id: 'overseas', label: '6. Overseas Disclosure' },
  { id: 'storage', label: '7. Storage & Security' },
  { id: 'access', label: '8. Access & Correction' },
  { id: 'complaints', label: '9. Complaints' },
  { id: 'cookies', label: '10. Cookies & Website Analytics' },
  { id: 'marketing', label: '11. Direct Marketing' },
  { id: 'changes', label: '12. Changes to This Policy' },
  { id: 'contact', label: '13. Contact Us' },
];

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Privacy Policy | Vishvadhara Group';
  }, []);

  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-green-700 to-green-900 pt-32 pb-16 text-white text-center px-4">
        <div className="inline-flex items-center gap-3 mb-4">
          <FaShieldAlt className="w-8 h-8 text-green-300" />
          <span className="text-green-300 font-semibold tracking-widest uppercase text-sm">Legal</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Privacy Policy</h1>
        <p className="text-green-200 text-sm">Last updated: {LAST_UPDATED}</p>
        <p className="text-green-200 text-sm mt-1">
          This policy is prepared in accordance with the&nbsp;
          <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs).
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row gap-12">

        {/* Table of Contents — sticky sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-28 bg-white rounded-2xl shadow-md border border-gray-100 p-6">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Contents</p>
            <nav className="space-y-2">
              {toc.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-sm text-gray-600 hover:text-green-700 hover:font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white rounded-2xl shadow-md border border-gray-100 p-8 md:p-12">

          <Link to="/" className="inline-flex items-center gap-2 text-sm text-green-700 hover:text-green-900 font-medium mb-8 transition-colors">
            <FaArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <Section id="about" title="1. About This Policy">
            <p>
              <strong>{COMPANY}</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting the privacy of individuals
              in accordance with the <em>Privacy Act 1988</em> (Cth) (&ldquo;the Act&rdquo;) and the thirteen Australian Privacy
              Principles (&ldquo;APPs&rdquo;) contained in the Act.
            </p>
            <p>
              This Privacy Policy explains how we collect, hold, use, and disclose personal information, and how
              you can access and correct information we hold about you.
            </p>
            {ABN && <p>ABN: {ABN}</p>}
          </Section>

          <Section id="collection" title="2. What Personal Information We Collect">
            <p>We may collect the following kinds of personal information:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Full name</li>
              <li>Residential or property address (service delivery address)</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Details of services requested or provided</li>
              <li>Payment information (processed securely via third-party providers)</li>
              <li>Communications you send us (emails, quote requests, enquiries)</li>
              <li>Technical data such as IP address and browser type when you visit our website</li>
            </ul>
            <p>
              We only collect personal information that is reasonably necessary for one or more of our functions or activities
              (APP 3). We do <strong>not</strong> collect sensitive information (such as health, racial, or political
              information) unless you voluntarily provide it and it is directly relevant to the services you require.
            </p>
          </Section>

          <Section id="how-collect" title="3. How We Collect Personal Information">
            <p>We collect personal information in the following ways:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>When you complete our online quote or contact form</li>
              <li>When you telephone, email, or message us directly</li>
              <li>When you engage our services and enter a service agreement</li>
              <li>Automatically when you visit our website (cookies, analytics — see Section 10)</li>
            </ul>
            <p>
              Where practicable, we collect personal information directly from you. We will tell you at or before the time
              of collection (or as soon as practicable thereafter) why we are collecting it (APP 5).
            </p>
          </Section>

          <Section id="purpose" title="4. Why We Collect Personal Information">
            <p>We collect, hold, and use your personal information to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Provide, manage, and schedule lawn, garden, and property maintenance services</li>
              <li>Prepare and deliver quotes and invoices</li>
              <li>Communicate with you about bookings, scheduling changes, and service updates</li>
              <li>Process payments</li>
              <li>Respond to your enquiries, complaints, or feedback</li>
              <li>Comply with legal and regulatory obligations</li>
              <li>Send you service-related information and, with your consent, promotional communications (see Section 11)</li>
              <li>Improve our website and services through analytics</li>
            </ul>
            <p>
              We will not use or disclose your personal information for any purpose other than the primary purpose for
              which it was collected, unless an exception under APP 6 applies (e.g., you have consented, or it is
              required by law).
            </p>
          </Section>

          <Section id="disclosure" title="5. Disclosure of Personal Information">
            <p>We may disclose your personal information to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Our employees and contractors who need the information to deliver services to you</li>
              <li>Third-party payment processors (e.g., Stripe, Square) — they have their own privacy policies</li>
              <li>Cloud-based scheduling or CRM software providers under data processing agreements</li>
              <li>Government bodies or law enforcement agencies where required by law</li>
              <li>Professional advisers such as accountants or lawyers, under confidentiality obligations</li>
            </ul>
            <p>
              We do <strong>not</strong> sell, rent, or trade your personal information to third parties for
              their marketing purposes.
            </p>
          </Section>

          <Section id="overseas" title="6. Overseas Disclosure">
            <p>
              Some of our third-party service providers (e.g., cloud hosting, email platforms) may store data on
              servers located outside Australia. Before disclosing personal information to an overseas recipient, we
              take reasonable steps to ensure the recipient does not breach the APPs in relation to that information
              (APP 8).
            </p>
            <p>
              By using our services you acknowledge that some of your personal information may be transferred to or
              stored in countries outside Australia that may not have equivalent privacy protections.
            </p>
          </Section>

          <Section id="storage" title="7. Storage & Security">
            <p>
              We hold personal information in electronic form (secure cloud storage) and, where applicable, in paper
              records stored securely. We take reasonable steps to protect personal information from misuse,
              interference, loss, and unauthorised access, modification, or disclosure (APP 11).
            </p>
            <p>
              When personal information is no longer needed for any purpose and we are not required by law to retain
              it, we will take reasonable steps to destroy or de-identify that information.
            </p>
          </Section>

          <Section id="access" title="8. Access & Correction">
            <p>
              You have the right to request access to personal information we hold about you (APP 12) and to request
              correction of that information if it is inaccurate, incomplete, or out of date (APP 13).
            </p>
            <p>
              To make a request, please contact us using the details in Section 13. We will respond within a reasonable
              time (generally within 30 days). We may need to verify your identity before granting access. We will not
              charge a fee for making a request, but we may charge a reasonable fee for providing access if the request
              requires significant effort.
            </p>
            <p>
              If we deny your access or correction request, we will give you written reasons and information about
              how to complain (APP 12.9 / APP 13.3).
            </p>
          </Section>

          <Section id="complaints" title="9. Complaints">
            <p>
              If you believe we have breached the APPs or otherwise mishandled your personal information, please
              contact us first (Section 13) so we can attempt to resolve your concern. We will acknowledge your
              complaint within 5 business days and endeavour to resolve it within 30 days.
            </p>
            <p>
              If you are not satisfied with our response, you may lodge a complaint with the&nbsp;
              <strong>Office of the Australian Information Commissioner (OAIC)</strong>:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Website: <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-green-700 underline">www.oaic.gov.au</a></li>
              <li>Phone: 1300 363 992</li>
              <li>GPO Box 5218, Sydney NSW 2001</li>
            </ul>
          </Section>

          <Section id="cookies" title="10. Cookies & Website Analytics">
            <p>
              Our website may use cookies and similar technologies to improve your browsing experience and to
              understand how visitors use our site. Cookies are small text files stored on your device.
            </p>
            <p>
              We may use Google Analytics or similar tools to collect anonymised usage data. You can disable cookies
              through your browser settings; however, some features of our site may not function correctly without them.
            </p>
            <p>
              We do not use cookies to track you across other websites or to serve targeted third-party advertising.
            </p>
          </Section>

          <Section id="marketing" title="11. Direct Marketing">
            <p>
              We may send you service updates or promotional communications only if you have expressly consented or it is
              reasonable to expect you would consent given our existing relationship. Each communication will include a
              clear and easy method to opt out (unsubscribe).
            </p>
            <p>
              We comply with the <em>Spam Act 2003</em> (Cth) for all electronic commercial messages. You can
              opt out of marketing communications at any time by contacting us (Section 13) or using the unsubscribe
              link in any email we send.
            </p>
          </Section>

          <Section id="changes" title="12. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or in applicable
              law. The revised policy will be posted on our website with an updated &ldquo;Last Updated&rdquo; date.
              Your continued use of our services after any changes constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section id="contact" title="13. Contact Us">
            <p>For all privacy-related enquiries, requests, or complaints, please contact us:</p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 mt-2 space-y-1 text-sm">
              <p className="font-bold text-green-900">{COMPANY}</p>
              <p>{ADDRESS}</p>
              {PHONE && <p>Phone: {PHONE}</p>}
              <p>Email: <a href={`mailto:${EMAIL}`} className="text-green-700 underline">{EMAIL}</a></p>
            </div>
          </Section>

          <p className="text-xs text-gray-400 border-t border-gray-100 pt-6 mt-6">
            This Privacy Policy was last reviewed on {LAST_UPDATED}. It is intended to comply with the
            <em> Privacy Act 1988</em> (Cth) and the Australian Privacy Principles.
          </p>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
