import Link from "next/link";
import React from "react";

function Disclaimer() {
  return (
    <div className="row prose md:prose-lg lg:prose-xl">
      <h2 className="text-3xl font-bold"> Disclaimer</h2>

      <p>
        All the information and photos on this website is published in good
        faith and for general information purpose only. desijewel does not make
        any warranties about the completeness, reliability and accuracy of this
        information. Any action you take upon the information you find on this
        website (desijewel.in), is strictly at your own risk. desijewel will not
        be liable for any losses and/or damages in connection with the use of
        our website.
      </p>

      <p>
        Desijewel.in is a community supported web site with the majority of the
        published content being send by our user community or collected from a
        wide range of resources including free images or wallpapers websites.
        Published content is believed to be authorized for sharing and personal
        use . If you object to a photo or image published on our site, please
        <b>
          <Link href="/contact" title="Contact us">
            Contact us
          </Link>
        </b>{" "}
        with the image&apos;s title or URL and your cause for concern, whether
        it being your own image you&apos;ve captured and do not wish to share or
        may it be something you might find explicit, unethical, inappropriate
        etc. Desijewel.in reserves the right to decide to host or not any image
        that was submitted or send by users . Desijewel.in will add the
        Desijewel.in watermark on the images/photos to identify that
        Desijewel.in is hosting that image/photo.
      </p>

      <h3>Consent</h3>
      <p>
        By using our website, you hereby consent to our disclaimer and agree to
        its
        <b>
          <Link href="terms-of-service">Terms</Link>
        </b>
        .
      </p>
      <h4>Update</h4>
      <p>
        This Desijewel.in&apos;s disclaimer was last updated on: Monday, July
        16, 2021· Should we update, amend or make any changes to this document,
        those changes will be prominently posted here.
      </p>
    </div>
  );
}

export default Disclaimer;
