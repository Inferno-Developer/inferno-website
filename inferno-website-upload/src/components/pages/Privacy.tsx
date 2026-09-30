import React from "react";
import LegalPage, { H2, P, B } from "./LegalPage";

const Privacy: React.FC = () => {
  return (
    <LegalPage
      title="Privacy Policy"
      seoTitle="Privacy Policy | InfernoAgency"
      seoDescription="How Inferno Management LLC handles information in connection with infernomgmt.com."
      effectiveDate="September 30, 2026"
    >
      <P>
        This Privacy Policy explains, in general terms, how Inferno Management
        LLC ("Inferno," "we," "us," or "our") handles information in connection
        with the website infernomgmt.com (the "Site"). By using the Site or
        submitting any form on it, you agree to this Policy. The Site and our
        services are intended only for adults 18 years of age or older.
      </P>

      <H2>1. Information we collect</H2>
      <P>
        We collect information you choose to provide — such as the details you
        enter when you submit a form or contact us (for example, your name,
        email address, and social handles) — and information collected
        automatically when you visit the Site, such as device, browser, and
        usage information gathered through cookies and similar technologies.
      </P>

      <H2>2. How we use information</H2>
      <P>
        We use information to operate and improve the Site and our services, to
        respond to and follow up on your inquiries and requests, to provide
        materials you ask for, to measure and improve our marketing and
        advertising, and for security, legal, and business purposes.
      </P>

      <H2>3. Cookies and tracking</H2>
      <P>
        The Site uses cookies and similar technologies, including the{" "}
        <B>Meta Pixel</B> and the <B>Google tag</B>, to understand Site usage
        and to measure and improve our advertising. You can control cookies
        through your browser settings and opt out of certain advertising cookies
        as described in Section 5.
      </P>

      <H2>4. How we share information</H2>
      <P>
        We do not sell your information for money. We share information only with
        service providers that help us operate the Site and our business (such
        as hosting, data storage, and communication providers), with our
        advertising and analytics partners (including Meta and Google) to
        measure and improve advertising, and as needed for legal, safety, or
        business-transfer purposes. Through the pixels and tags described above,
        certain online identifiers and activity — and, in some cases, contact
        information you provide, in hashed form — may be shared with those
        partners; under some state laws this may be considered "sharing" for
        targeted advertising, which you may opt out of as described below.
      </P>

      <H2>5. Your choices and rights</H2>
      <P>
        You can opt out of advertising cookies through your browser and device
        settings, through your Google and Meta ad-settings, and through industry
        tools such as optout.aboutads.info. Depending on where you live, you may
        have rights to access, correct, or delete your personal information, and
        to opt out of its "sale" or "sharing" for targeted advertising.
        California residents have these rights under the CPRA, and we will not
        discriminate against you for exercising them. To make a request or opt
        out, email us at{" "}
        <B>infernomanagementagency@gmail.com</B>; we may need to verify your
        identity first.
      </P>

      <H2>6. Data retention and security</H2>
      <P>
        We keep information only as long as reasonably necessary for the purposes
        above and to meet our legal and business needs, after which we delete or
        de-identify it. We use reasonable measures designed to protect
        information, but no system is completely secure and we cannot guarantee
        absolute security.
      </P>

      <H2>7. Limitation of liability</H2>
      <P>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, INFERNO AND ITS OWNERS, MEMBERS,
        EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
        SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS ARISING FROM THE
        COLLECTION, USE, DISCLOSURE, LOSS, OR UNAUTHORIZED ACCESS OF INFORMATION
        IN CONNECTION WITH THE SITE. OUR TOTAL LIABILITY FOR ANY CLAIM RELATING
        TO YOUR INFORMATION OR THIS POLICY WILL NOT EXCEED ONE HUNDRED U.S.
        DOLLARS (US$100). NOTHING IN THIS SECTION LIMITS ANY RIGHT THAT CANNOT BE
        LIMITED UNDER APPLICABLE LAW.
      </P>

      <H2>8. Third-party links</H2>
      <P>
        The Site may link to third-party sites and services we do not control.
        This Policy does not apply to them, and we are not responsible for their
        practices.
      </P>

      <H2>9. Children</H2>
      <P>
        The Site is for adults 18 and older. We do not knowingly collect
        information from anyone under 18; if you believe a minor has provided
        information, contact us and we will delete it.
      </P>

      <H2>10. Changes to this Policy</H2>
      <P>
        We may update this Policy at any time and in our sole discretion. Changes
        are effective when posted to the Site with a revised effective date, and
        your continued use of the Site means you accept the update.
      </P>

      <H2>11. Contact us</H2>
      <P>
        Inferno Management LLC
        <br />
        Las Vegas, NV, United States
        <br />
        Email: infernomanagementagency@gmail.com
      </P>
    </LegalPage>
  );
};

export default Privacy;
