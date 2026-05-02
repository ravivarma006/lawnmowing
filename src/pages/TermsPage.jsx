import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFileContract, FaArrowLeft } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const LAST_UPDATED = '1 May 2025';
const COMPANY = 'Vishvadhara Group';
const ABN = ''; // Add ABN when available
const EMAIL = 'admin@vishvadharagroup.com.au';
const STATE = 'New South Wales';
const COUNTRY = 'Australia';

const Section = ({ id, title, children }) => (
  <section id={id} className="mb-10 scroll-mt-28">
    <h2 className="text-xl font-bold text-gray-900 mb-3 pb-2 border-b border-gray-200">{title}</h2>
    <div className="text-gray-700 space-y-3 leading-relaxed">{children}</div>
  </section>
);

const toc = [
  { id: 'agreement', label: '1. Agreement to Terms' },
  { id: 'services', label: '2. Services' },
  { id: 'quotes', label: '3. Quotes & Pricing' },
  { id: 'payment', label: '4. Payment Terms' },
  { id: 'monthly', label: '5. Monthly Package Plans' },
  { id: 'cancellation', label: '6. Cancellation & Rescheduling' },
  { id: 'access', label: '7. Site Access & Safety' },
  { id: 'liability', label: '8. Limitation of Liability' },
  { id: 'consumer', label: '9. Australian Consumer Law' },
  { id: 'property', label: '10. Property & Damage' },
  { id: 'ip', label: '11. Intellectual Property' },
  { id: 'privacy', label: '12. Privacy' },
  { id: 'disputes', label: '13. Disputes' },
  { id: 'governing', label: '14. Governing Law' },
  { id: 'contact', label: '15. Contact Us' },
];

const TermsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-50 min-h-screen">
      <SEO 
        title="Terms & Conditions - VISHVADHARA GROUP"
        description="Read the terms and conditions for VISHVADHARA GROUP's lawn mowing and garden maintenance services in Sydney, Australia."
        canonical="/terms"
      />
      <Navbar />

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-950 pt-32 pb-16 text-white text-center px-4">
        <div className="inline-flex items-center gap-3 mb-4">
          <FaFileContract className="w-8 h-8 text-green-400" />
          <span className="text-green-400 font-semibold tracking-widest uppercase text-sm">Legal</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Terms &amp; Conditions</h1>
        <p className="text-gray-400 text-sm">Last updated: {LAST_UPDATED}</p>
        <p className="text-gray-400 text-sm mt-1">
          Governed by the laws of {STATE}, {COUNTRY}
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

          <p className="text-gray-600 mb-8 leading-relaxed">
            Please read these Terms and Conditions (&ldquo;Terms&rdquo;) carefully before using the services provided
            by <strong>{COMPANY}</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). By requesting a
            quote, booking a service, or entering a service agreement with us, you (&ldquo;the Client&rdquo;) agree
            to be bound by these Terms.
          </p>

          {ABN && <p className="text-sm text-gray-500 mb-6">ABN: {ABN}</p>}

          <Section id="agreement" title="1. Agreement to Terms">
            <p>
              These Terms constitute a legally binding agreement between you and {COMPANY}. These Terms apply to all
              services provided by us, including one-off visits, ongoing maintenance, and monthly package plans.
            </p>
            <p>
              We reserve the right to update these Terms at any time. The current version will always be available on
              our website. Continued use of our services after any update constitutes acceptance of the revised Terms.
            </p>
          </Section>

          <Section id="services" title="2. Services">
            <p>
              We provide residential and commercial lawn, garden, and property maintenance services, including but
              not limited to: lawn mowing, garden maintenance, hedge trimming, weed control, yard cleanup, turf
              laying, rubbish removal, gutter cleaning, pressure washing, property audits, and monthly package plans.
            </p>
            <p>
              The specific scope of services will be agreed upon in writing (email or quote confirmation) prior to
              commencement. Any variations to the agreed scope must be authorised by both parties before additional
              work commences.
            </p>
            <p>
              We reserve the right to decline or discontinue services at our discretion, provided we give you
              reasonable notice.
            </p>
          </Section>

          <Section id="quotes" title="3. Quotes & Pricing">
            <p>
              All quotes provided are estimates based on information supplied by the Client and are valid for
              <strong> 14 days</strong> from the date of issue unless otherwise stated. Quotes may be revised if the
              actual scope of work differs materially from what was described.
            </p>
            <p>
              Prices are quoted in <strong>Australian Dollars (AUD)</strong> and are inclusive of GST unless
              otherwise stated. We are registered for GST purposes (if applicable) and a valid tax invoice will be
              provided for all services.
            </p>
            <p>
              Quoted prices do not include additional costs that may arise from unforeseen site conditions (e.g.,
              excess debris, hidden hazards). We will notify you of any additional costs before proceeding.
            </p>
          </Section>

          <Section id="payment" title="4. Payment Terms">
            <p>
              Payment is due within <strong>7 days</strong> of the date of invoice unless otherwise agreed in writing.
              We accept payment by bank transfer (EFT) and other methods as notified.
            </p>
            <p>
              Late payments may attract interest at the rate of <strong>2% per month</strong> on the outstanding amount.
              We reserve the right to suspend services for accounts overdue by more than 14 days.
            </p>
            <p>
              All payment disputes must be raised in writing within 7 days of receiving the invoice. Failure to raise
              a dispute within this period is deemed acceptance of the invoice.
            </p>
          </Section>

          <Section id="monthly" title="5. Monthly Package Plans">
            <p>
              Our Monthly Package is a holistic, recurring maintenance plan designed for long-term clients. It
              includes regular scheduled maintenance, seasonal soil feeding and weed health checks, garden planting,
              weeding, and pruning, plus priority scheduling when our team is in your area.
            </p>
            <p>
              Monthly Package plans are billed at a <strong>fixed monthly amount</strong> agreed in writing at the
              time of engagement. The plan covers the agreed scope of services; any additional or out-of-scope work
              will be quoted separately.
            </p>
            <p>
              <strong>Minimum term:</strong> Monthly packages have a minimum engagement period of{' '}
              <strong>3 months</strong> unless otherwise agreed in writing.
            </p>
            <p>
              <strong>Cancellation of monthly packages:</strong> Either party may cancel with{' '}
              <strong>30 days&rsquo; written notice</strong> after the minimum term. Early cancellation during the
              minimum term may attract a cancellation fee equivalent to one month&rsquo;s plan fee.
            </p>
            <p>
              Prices for monthly packages are reviewed annually. We will provide at least 30 days&rsquo; written
              notice of any price change.
            </p>
          </Section>

          <Section id="cancellation" title="6. Cancellation & Rescheduling">
            <p>
              We understand that circumstances change. To cancel or reschedule a booked service appointment, please
              notify us at least <strong>24 hours</strong> before the scheduled time.
            </p>
            <p>
              Cancellations with less than 24 hours&rsquo; notice may attract a cancellation fee of up to
              <strong> 50% of the quoted service price</strong> to cover mobilisation costs.
            </p>
            <p>
              We may need to reschedule services due to severe weather conditions, equipment failure, or other
              circumstances beyond our reasonable control (&ldquo;force majeure&rdquo;). We will notify you as early
              as practicable and reschedule at a mutually convenient time at no additional charge.
            </p>
          </Section>

          <Section id="access" title="7. Site Access & Safety">
            <p>
              You are responsible for ensuring our team has safe, unobstructed access to your property at the
              scheduled service time. This includes unlocking gates, restraining pets, and removing any hazards.
            </p>
            <p>
              If we are unable to access your property at the scheduled time through no fault of our own, a
              call-out fee may apply to cover our costs.
            </p>
            <p>
              You must inform us of any known hazards on your property (e.g., buried irrigation lines, underground
              cables, unstable terrain, bee/wasp nests). We are not liable for damage to unmarked or undisclosed
              underground infrastructure.
            </p>
            <p>
              We carry public liability insurance. Certificates of currency are available upon request.
            </p>
          </Section>

          <Section id="liability" title="8. Limitation of Liability">
            <p>
              To the maximum extent permitted by law (including the <em>Australian Consumer Law</em>), our total
              liability to you for any claim arising out of or in connection with our services is limited to:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Re-supplying the services; or</li>
              <li>Paying the cost of re-supplying the services;</li>
            </ul>
            <p>whichever we elect.</p>
            <p>
              We are not liable for any indirect, consequential, special, or incidental loss or damage, including
              loss of profits, business interruption, or loss of data, even if we have been advised of the
              possibility of such loss.
            </p>
            <p>
              Nothing in these Terms excludes, restricts, or modifies any right or remedy, or any guarantee,
              warranty, or other condition, that you are entitled to under the <em>Competition and Consumer Act 2010</em>{' '}
              (Cth) or any other applicable Australian consumer protection legislation, and which cannot be excluded
              by agreement.
            </p>
          </Section>

          <Section id="consumer" title="9. Australian Consumer Law">
            <p>
              Our services come with guarantees that cannot be excluded under the{' '}
              <em>Australian Consumer Law (ACL)</em>, Schedule 2 of the{' '}
              <em>Competition and Consumer Act 2010</em> (Cth). Under the ACL you are entitled to:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Services that are rendered with due care and skill;</li>
              <li>Services that are fit for the purpose for which they are supplied;</li>
              <li>Services that are delivered within a reasonable time (where no time is agreed).</li>
            </ul>
            <p>
              If we fail to comply with a consumer guarantee, you have rights to a remedy under the ACL. For major
              failures you may be entitled to cancel the service contract and receive a refund for the unused
              portion, or claim compensation for any foreseeable loss or damage.
            </p>
            <p>
              We do not engage in unfair contract terms or misleading and deceptive conduct contrary to the ACL.
            </p>
          </Section>

          <Section id="property" title="10. Property & Damage">
            <p>
              We take every reasonable precaution to avoid damage to your property. In the event damage occurs as a
              direct result of our negligence, please notify us in writing within <strong>48 hours</strong> of the
              service being performed.
            </p>
            <p>
              We are not responsible for damage to property or infrastructure not disclosed to us prior to
              commencement of work, including underground pipes, cables, or unmarked garden features.
            </p>
            <p>
              Pre-existing damage or conditions present before our service begins are not our responsibility. We
              reserve the right to photograph your property before and after service for quality and dispute
              resolution purposes.
            </p>
          </Section>

          <Section id="ip" title="11. Intellectual Property">
            <p>
              All content on our website, including text, images, logos, and graphics, is owned by or licensed to
              {COMPANY} and is protected by Australian copyright law. You must not reproduce, distribute, or use our
              content without our prior written consent.
            </p>
          </Section>

          <Section id="privacy" title="12. Privacy">
            <p>
              We collect and handle your personal information in accordance with our{' '}
              <Link to="/privacy-policy" className="text-green-700 underline hover:text-green-900">
                Privacy Policy
              </Link>{' '}
              and the <em>Privacy Act 1988</em> (Cth). By engaging our services, you consent to the collection and
              use of your information as described in that policy.
            </p>
          </Section>

          <Section id="disputes" title="13. Disputes">
            <p>
              If a dispute arises in connection with these Terms or our services, the parties agree to attempt to
              resolve it in good faith through direct negotiation before pursuing any formal legal proceedings.
            </p>
            <p>
              Please contact us in writing (Section 15) with details of your concern. We will acknowledge your
              dispute within 5 business days and endeavour to resolve it within 30 days.
            </p>
            <p>
              If the dispute is not resolved through negotiation, either party may refer the matter to a recognised
              Australian dispute resolution body such as the relevant state Fair Trading office or the Australian
              Financial Complaints Authority (where applicable), before commencing legal proceedings.
            </p>
          </Section>

          <Section id="governing" title="14. Governing Law">
            <p>
              These Terms are governed by the laws of <strong>{STATE}, {COUNTRY}</strong>. Each party irrevocably
              submits to the non-exclusive jurisdiction of the courts of {STATE} and any courts having appellate
              jurisdiction over those courts.
            </p>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, that provision shall be
              severed and the remaining provisions shall continue in full force and effect.
            </p>
          </Section>

          <Section id="contact" title="15. Contact Us">
            <p>For any questions, notices, or concerns regarding these Terms, please contact us:</p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-2 space-y-1 text-sm">
              <p className="font-bold text-gray-900">{COMPANY}</p>
              <p>{COUNTRY}</p>
              <p>Email: <a href={`mailto:${EMAIL}`} className="text-green-700 underline">{EMAIL}</a></p>
            </div>
          </Section>

          <p className="text-xs text-gray-400 border-t border-gray-100 pt-6 mt-6">
            These Terms and Conditions were last reviewed on {LAST_UPDATED}. They are intended to comply with the
            <em> Competition and Consumer Act 2010</em> (Cth), the <em>Australian Consumer Law</em>, and
            other applicable Australian legislation.
          </p>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default TermsPage;
