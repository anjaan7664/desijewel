import Head from "next/head";
import Link from "next/link";
import React from "react";

function PrivacyPolicy() {
  return (
    <React.Fragment>
   <Head>
        <title>Privacy Policy</title>
        <meta name="description" content= "Privacy Policy for Designing Jewel"/>
      </Head>
    <div className="row prose md:prose-lg lg:prose-xl">
      <h1 className="text-3xl font-bold"> Privacy Policy</h1>
      <p>
        We at Desijewel.in , take your online privacy seriously.This document
        outlines the types of information collected by our servers and provides
        links to the privacy policies of our third-party advertising partners.
      </p>
      <p>
        This Privacy Policy governs the manner in which Desijewel collects,
        uses, maintains and discloses information collected from users (each, a
        &quot;User&quot;) of the https://www.desijewel.in website.
      </p>
      <h3> Log Files</h3>
      <p>
        Like many other Web sites, desijewel.in makes use of log files. These
        files merely logs visitors to the site – usually a standard procedure
        for hosting companies and a part of hosting services’s analytics. The
        information inside the log files includes internet protocol (IP)
        addresses, browser type, Internet Service Provider (ISP), date/time
        stamp, referring/exit pages, and possibly the number of clicks. This
        information is used to analyze trends, administer the site, track user’s
        movement around the site, and gather demographic information. IP
        addresses, and other such information are not linked to any information
        that is personally identifiable.
      </p>
      <h3>Personal identification information</h3>
      <p>
        We may collect personal identification information from Users in a
        variety of ways in connection with activities, services, features or
        resources we make available on our Site. Users may visit our Site
        anonymously. We will collect personal identification information from
        Users only if they voluntarily submit such information to us. Users can
        always refuse to supply personally identification information, except
        that it may prevent them from engaging in certain Site related
        activities.
      </p>

      <h3>Non-personal identification information</h3>
      <p>
        We may collect non-personal identification information about Users
        whenever they interact with our Site. Non-personal identification
        information may include the browser name, the type of computer and
        technical information about Users means of connection to our Site, such
        as the operating system and the Internet service providers utilized and
        other similar information.
      </p>

      <h3>Web browser cookies</h3>
      <p>
        Our Site may use &quot;cookies&quot; to enhance User experience.
        User&apos;s web browser places cookies on their hard drive for
        record-keeping purposes and sometimes to track information about them.
        User may choose to set their web browser to refuse cookies, or to alert
        you when cookies are being sent. If they do so, note that some parts of
        the Site may not function properly.
      </p>

      <h3>How we use collected information</h3>
      <p>
        Desijewel may collect and use Users personal information for the
        following purposes:
      </p>
      <ul>
        <li>
          <i>To run and operate our Site</i> We may need your information
          display content on the Site correctly.
        </li>
        <li>
          <i>To improve customer service</i> Information you provide helps us
          respond to your customer service requests and support needs more
          efficiently.
        </li>
        <li>
          <i>To personalize user experience</i> We may use information in the
          aggregate to understand how our Users as a group use the services and
          resources provided on our Site.
        </li>
        <li>
          <i>To improve our Site</i> We may use feedback you provide to improve
          our products and services.
        </li>
      </ul>

      <h3>How we protect your information</h3>
      <p>
        We adopt appropriate data collection, storage and processing practices
        and security measures to protect against unauthorized access,
        alteration, disclosure or destruction of your personal information,
        username, password, transaction information and data stored on our Site.
      </p>

      <h3>Sharing your personal information</h3>
      <p>
        We do not sell, trade, or rent Users personal identification information
        to others. We may share generic aggregated demographic information not
        linked to any personal identification information regarding visitors and
        users with our business partners, trusted affiliates and advertisers for
        the purposes outlined above.{" "}
      </p>

      <h3>Third party websites</h3>
      <p>
        Users may find advertising or other content on our Site that link to the
        sites and services of our partners, suppliers, advertisers, sponsors,
        licensors and other third parties. We do not control the content or
        links that appear on these sites and are not responsible for the
        practices employed by websites linked to or from our Site. In addition,
        these sites or services, including their content and links, may be
        constantly changing. These sites and services may have their own privacy
        policies and customer service policies. Browsing and interaction on any
        other website, including websites which have a link to our Site, is
        subject to that website&apos;s own terms and policies. For your
        convenience we provide a list our advertising partners below.
        Unfortunately we cannot guarantee it is always comprehensive and up to
        date.
      </p>
      <em>Google Adsense:</em>
      <p>
        We present you the following information about Google and the{" "}
        <a href="https://www.doubleclick.com/privacy/faq.aspx">
          DoubleClick DART cookie
        </a>
        :
      </p>
      <ul>
        <li>
          Google, as a third party vendor, uses cookies to serve ads on your
          site.
        </li>
        <li>
          Google&apos;s use of the DART cookie enables it to serve ads to your
          users based on their visit to your sites and other sites on the
          Internet.
        </li>
        <li>
          Users may opt out of the use of the DART cookie by visiting the{" "}
          <a href="https://www.www.google.com/privacy_ads.html">
            Google ad and content network privacy policy
          </a>
          .
        </li>
      </ul>
      <h3>Changes to this privacy policy</h3>
      <p>
        Desijewel has the discretion to update this privacy policy at any time.
        When we do, we will post a notification on the main page of our Site. We
        encourage Users to frequently check this page for any changes to stay
        informed about how we are helping to protect the personal information we
        collect. You acknowledge and agree that it is your responsibility to
        review this privacy policy periodically and become aware of
        modifications.
      </p>

      <h3>Your acceptance of these terms</h3>
      <p>
        By using this Site, you signify your acceptance of this policy. If you
        do not agree to this policy, please do not use our Site. Your continued
        use of the Site following the posting of changes to this policy will be
        deemed your acceptance of those changes.{" "}
      </p>

      <h3>Data Retention</h3>
      <p>
        The data submitted to and generated by this web site may be copied to
        additional machines for redundancy and backup purposes.
      </p>

      <h3>Contacting us</h3>
      <p>
        If you have any questions about this Privacy Policy, the practices of
        this site, or your dealings with this site, please
        <strong>
          <Link href="/contact"><a> Contact Us</a></Link>
        </strong>{" "}
        .
      </p>

      <h4>Update</h4>
      <p>
        This Desijewel.in&apos;s Privacy Policy was last updated on: Monday,
        July 16, 2017· Should we update, amend or make any changes to this
        document, those changes will be prominently posted here.
      </p>
    </div>
    </React.Fragment>
  );
}

export default PrivacyPolicy;
