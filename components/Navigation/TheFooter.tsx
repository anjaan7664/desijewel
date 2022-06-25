import React from "react";
import { useTranslation } from "react-i18next";
import {
  PhoneAndroid,
  LocationOn,
  Email,
  Facebook,
  YouTube,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import PlayStore from "../../public/images/assets/play_store.png";
const TheFooter = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <div className="w-full px-6 pt-2 bg-footer-gray out-of-box">
        <div className="container flex flex-col m-auto text-white">
          <section className="flex flex-col md:flex-row">
            {/* Contact Us */}
            <ContactUs />
            {/* Information */}
            <Information />
            {/* Customer Service  */}
            <CustomerService />
            {/* Download App  */}
            <DownloadApp />
          </section>
          <section>
            <LowerFooter />
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TheFooter;

export function ContactUs() {
  const { t } = useTranslation();
  return (
    <div className="flex-1 pt-6">
      <p className="text-3xl"> {t("contact_us")}</p>
      <div className="mt-6 pr-2">
        <div className="flex my-2">
          <LocationOn className="mr-2" />
          <a
            href="https://goo.gl/maps/H6h1RVzzA1QzxzB89"
            className="text-lg text-left lg:ml-0 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("address")}
          </a>
        </div>
        <div className="flex my-2">
          <PhoneAndroid className="mr-2" />
          <a href="tel:+917597937664">+917597937664</a>
        </div>
        <div className="flex my-2">
          <Email className="mr-2" />
          <a href="mailto:Mukeshsoni72626@gmail.com">
            Mukeshsoni72626@gmail.com
          </a>
        </div>
        <div className="flex mt-4">
          <span className="inline-flex justify-center mt-5 sm:mt-0 sm:justify-start">
            <a
              href="https://www.facebook.com/Anj7664"
              className="text-white"
              target="_blank"
              aria-label="Facebook"
              rel="noopener noreferrer"
            >
              <Facebook className="mr-2" fontSize="large" />
            </a>
            <a
              href="https://youtube.com/mukesh7664"
              className="ml-3 text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTube className="mr-2" fontSize="large" />
            </a>
            <a
              href="https://www.instagram.com/desijewel.in"
              className="ml-3 text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2" fontSize="large" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export function DownloadApp() {
  const { t } = useTranslation();

  return (
    <div className="flex-1 pt-6">
      <p className="text-3xl">{t("download_app")}</p>
      <div className="w-3/4 mt-6 md:w-3/4 relative h-3/6">
        <a
          href="https://play.google.com/store/apps/details?id=satlaa.desijewellery"
          target="_blank"
          rel="noopener noreferrer w-full relative"
        >
          <Image
            src={PlayStore}
            layout="responsive"
            width={100}
            height={30}
            alt="Download Desi Jewellery on Play Store"
            title="Download Desi Jewellery on Play Store"
            className="object-contain"
          />
        </a>
      </div>
    </div>
  );
}

export function Information() {
  const { t } = useTranslation();

  return (
    <div className="flex-1 pt-6">
      <p className="text-3xl">{t("information")}</p>
      <div className="mt-6">
        <ul>
          <li className="my-2">
            <Link href="/">{t("home")}</Link>
          </li>
          <li className="my-2">
            <Link href="/about">{t("about")}</Link>
          </li>
          <li className="my-2">
            <Link href="/contact">{t("contact")}</Link>
          </li>
          <li className="my-2">
            <a href="/sitemap.xml">{t("sitemap")}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export function CustomerService() {
  const { t } = useTranslation();

  return (
    <div className="flex-1 pt-6">
      <p className="text-3xl">{t("customer_service")}</p>
      <div className="mt-6">
        <ul>
          <li className="my-2">
            <Link href="/disclaimer">{t("disclaimer")}</Link>
          </li>
          <li className="my-2">
            <Link href="/terms-of-service">{t("tos")}</Link>
          </li>
          <li className="my-2">
            <Link href="/privacy-policy">
              {t("privacy_policy")}
            </Link>
          </li>
          <li className="my-2">
            <a
              href="http://hbjodhpur.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="hbjodhpur"
            >
              {t("live_rate")}
            </a>
          </li>
          {/* <li className="my-2">
            <Link href="/admin">{t("profile")}</Link>
            <Link href="/auth/login">{t("login")}</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export function LowerFooter() {
  return (
    <React.Fragment>
      <div className="flex flex-col my-4 md:flex-row">
        <div className="flex flex-row  lg:ml-3">
          <p className="mt-2 mb-2">Copyright © 2021</p>
          <a
            href="http://satlaa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 ml-1 mb-2 font-semibold transition-colors duration-300 text-white hover:text-primary "
            aria-label="Satlaa Tech"
            
          >
            Satlaa Tech
          </a>
        </div>

        <div className="flex md:ml-auto">
          <span className="inline-flex justify-center mt-5 xl:ml-auto :mt-0 sm:justify-start">
            <a
              href="https://www.facebook.com/Anj7664"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="mr-2" fontSize="large" />
            </a>
            <a
              href="https://twitter.com/mukesh7664"
              className="ml-3 text-white"
              target="_blank"
              rel="noopener noreferrer"
                      aria-label="Twitter"
            >
              <Twitter className="mr-2" fontSize="large" />
            </a>
            <a
              href="https://www.instagram.com/desijewel.in/"
              className="ml-3 text-white"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="mr-2" fontSize="large" />
            </a>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}
