import React from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <div className="text-center">
      <h1 className="mt-4 mx-auto font-Merriweather text-4xl border-primary border-b-4 w-auto inline-block align-middle mb-12">
        {t("form.get_in_touch")}
      </h1>
      <section>
        <div className="mx-2 lg:mx-24 rounded p-2">
          {/* <iframe
          className="w-full h-64 lg:h-80"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.1691213374206!2d73.04543442472033!3d26.223693824822323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418b4dce38c32d%3A0x1bdacd81874fd88a!2sDesi%20Jewellery!5e0!3m2!1sen!2sus!4v1641450566564!5m2!1sen!2sus"
          frameborder="0"
          title="map"
          marginheight="0"
          marginwidth="0"
          scrolling="no"
        ></iframe> */}
        </div>
      </section>
      <section className="flex flex-wrap lg:mx-6 pt-12">
        <div className="w-full md:w-1/2 text-left">
          <div>
            <h1 className="font-Merriweather text-center text-3xl text-secondary">
              {t("reach_us")}
            </h1>
            <h2 className="text-primary text-left text-xl font-Montserrat font-bold pt-2">
              {t("form.address")}
            </h2>
            <a
              href="https://goo.gl/maps/1AAYysmvtQKmgZAy8"
              className="text-lg text-left lg:ml-0 underline"
            >
              {t("address")}
            </a>
            <h2 className="text-primary text-left text-xl font-Montserrat font-bold pt-3">
              {t("email")}
            </h2>
            <a
              href="mailto:Dilipbhootra555@gmail.com"
              className="text-lg text-left underline"
            >
              mukeshsoni72626@gmail.com
            </a>
            <h2 className="text-primary text-left text-xl font-Montserrat font-bold pt-5">
              {t("phone")}
            </h2>
            <a href="tel:+919829736959" className="text-lg text-left underline">
              +917597937664
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="mx-2 lg:m-6 rounded lg:mx-12 p-4 lg:p-8 lg:mt-6">
            <div className="">
              <h1 className="font-Merriweather text-3xl text-secondary">
                {t("contact_us")}
              </h1>
              <div>
                <input
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="$t('name')"
                />
              </div>
              <div className="mt-2">
                <input
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="$t('email')"
                />
              </div>
              <div className="mt-2">
                <textarea
                  placeholder="$t('form.message')"
                  className="w-full h-12 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mt-2">
                <button
                  // click="send_email"
                  className="uppercase h-16 text-sm font-bold tracking-wide bg-primary text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline transition duration-300 hover:bg-red"
                >
                  {t("form.send_message")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
