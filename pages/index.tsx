import { ArrowForward, ArrowRight, Mail, Phone } from "@mui/icons-material";
import type { NextPage } from "next";
import Swal from "sweetalert2";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { default as data } from "../assets/json/main-page.json";
import { motion } from "framer-motion"
const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Designing Jewel</title>
        <meta name="description" content="Designing Jewel" />
        <meta name="keywords" content="Designing Jewel" />
        <meta name="author" content="Designing Jewel" />
      </Head>
      <div className="">
        <Welcome />
        <ShowCase />
        <ShowOff showOffData={data.showOff} />
        <PopularDesigns catData={data.catData} />
        <Extras />
        <OfferUpdate />
      </div>
    </React.Fragment>
  );
};

export default Home;

export const Welcome = () => {
  return (
    <section>
      <div className="container block mx-3 md:my-auto text-center">
        <h1
          className="text-[1.5rem] md:text-4xl lg:text-5xl 
          text-center font-bold md:my-6 md:mb-2 font-Teko tracking-wider md:tracking-widest pt-1"
        >
          WELCOME TO DESIGNING JEWEL
        </h1>
      </div>
    </section>
  );
};
export const ShowCase = () => {
  return (
    <section className="md:max-h-[90vh] flex flex-row flex-wrap w-full md:mt-4 text-center lg:flex-row-reverse lg:text-left ">
      <div className="w-full lg:w-1/2">
        <div className="relative h-full min-h-[26rem] ">
          <Image
            src="/images/assets/icons/jodha-haar.webp"
            alt="Designing Jewel"
            title="Designing Jewel"
            layout="fill"
            className=" h-auto max-w-full px-3 md:p-4 md:px-16 mx-auto rounded-md shadowed overflow-hidden object-contain"
          />
        </div>
      </div>

      <div className="w-full my-2 lg:w-1/2 lg:pl-4">
        <h1 className="text-3xl md:text-4xl main-heading lg:text-5xl font-Playfair font-bold tracking-wider">
          The Showcase of Indian and Rajasthani Jewellery
        </h1>
        <p className="my-2 md:my-8 text-lg lg:pr-24 lg:pt-3 font-Montserrat lg:mb-12">
          We are dedicated to providing you with the finest service possible.
          All of our jewellery is made of 22k gold and has the BIS hallmark. We
          are members of the oldest jewellers&apos;s community, SONI. We have been
          producing jewellery for centuries.
        </p>
        <div className="my-3 mt-4">
          <Link href="/gold">
            <a>
              <motion.button
                className="text-center text-white text-2xl font-semibold animate-pulse cursor-pointer bg-pink-600 px-8 py-4 rounded-2xl
           "
           whileHover={{scale: 1.1}}
              >
                See Designs
              </motion.button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export const ShowOff: React.FC<{
  showOffData: {
    title: string;
    alt: string;
    image: string;
    description: string;
  }[];
}> = (props) => {
  return (
    <div className="w-full h-full my-2 md:my-8 text-center md:mt-16">
      <h1 className="my-2">Why We Are Best</h1>
      <div className="">
        <div className="flex flex-wrap">
          {props.showOffData.map((item) => {
            return (
              <div className="flex flex-row p-4 md:w-1/2" key={item.title}>
                <div className="flex-grow-0 w-3/12 md:w-1/5 image-container relative h-full">
                  <Image
                    src={`/images/assets/${item.image}`}
                    alt={item.alt}
                    layout="fill"
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col w-9/12 md:w-4/5 px-4 text-left">
                  <h2 className="text-xl md:text-2xl font-Ledger leading-6">
                    {item.title}
                  </h2>
                  <p className="text-base text-gray-600 md:text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const PopularDesigns: React.FC<{
  catData: {
    title: string;
    url: string;
    catDataMetal: {
      image: string;
      name: string;
    }[];
  }[];
}> = (props) => {
  return (
    <div className="w-full text-center md:my-16">
      <h1 className="heading-main my-4 px-1">Check Our Designs</h1>
      {props.catData.map((cData) => {
        return (
          <div
            key={cData.title}
            className="relative mx-auto my-3 flex flex-col items-center md:my-8 md:flex-row md:flex-wrap"
          >
            <h1 className="jewellery_design_tagline font-Samarkan relative md:w-full">
              {cData.title}
            </h1>
            <div className="flex w-11/12 flex-col md:flex-row">
              {cData.catDataMetal.map((item) => {
                return (
                  <div key={item.name} className="flex flex-1">
                    <Link href={cData.url}>
                      <a className="relative w-full h-full p-4">
                        <div className="w-full shadow-neumorph relative m-2 flex transform flex-col rounded-2xl bg-gray-100 transition-all duration-300 md:m-4 md:hover:-translate-y-3">
                          <div className="pb-1/1 relative image-container w-full overflow-hidden">
                            <Image
                              loading="lazy"
                              src={`/images/assets/icons/${item.image}`}
                              // src={img}
                              alt={item.name}
                              layout="fill"
                              className="rounded customShadow object-contain"
                            />
                          </div>
                          <div className="mt-auto py-2 text-2xl font-semibold text-black md:text-xl lg:text-2xl">
                            <h2>{item.name}</h2>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
            <Link href={cData.url} className="w-1/12 text-5xl text-gray-600">
              <a>
                <ArrowForward fontSize="large" />
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export const Extras: React.FC = () => {
  return (
    <section className="w-full text-center my-4">
      <h1 className="px-1 my-4 heading-main ">Download Our App</h1>
      <div className="flex flex-col w-full md:flex-row">
        <div className="text-center md:w-1/2">
          <div className="px-3 mt-8 text-center relative w-full h-full">
            <Image
              src="/images/assets/app_ss.jpg"
              alt="Desi Jewellery App"
              className="mx-auto rounded shadow-lg2 md:w-3/4 min-h-[16rem] object-contain"
              layout="fill"
            />
          </div>
        </div>
        <div className="text-center md:w-1/2 md:text-left h-full">
          <div className="mx-3 md:mx-8 mt-6 relative w-full h-full">
            <p className="text-lg text-left md:text-xl ">
              We have many user who are not greatly familiar with browser and
              couldn&apos;t access our website. For their convenience we have
              made an android app for them. With this App user can easily access
              our design. You can download this app from Play store via clicking
              on below link
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=satlaa.desijewellery"
              target="_blank"
              className=""
              rel="external noopener noreferrer"
            >
              <div className="relative h-full w-2/3 md:w-1/2 mt-4">
                <Image
                  src="/images/assets/lay_store.png"
                  className=" h-auto max-w-full px-3 md:p-4 md:px-16 mx-auto rounded-md shadowed overflow-hidden object-contain"
                  alt="Download Desi Jewellery on Play Store"
                  layout="fill"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const OfferUpdate: React.FC = () => {
  const Subscribe = (e: React.MouseEvent<HTMLElement>) => {
    Swal.fire({
      showConfirmButton: false,
      timer: 1500,
      icon: "success",
      title: "You're subscribed to our newsletter.",
    });
  };
  return (
    <div className="bg-primary out-of-box">
      <div className="container flex flex-col p-6 mx-auto text-center md:flex-row md:text-left">
        <div className="flex flex-col px-3 text-white md:flex-auto">
          <p className="text-2xl font-semibold">
            Sign up for our offer Updates.
          </p>
        </div>
        <div className="flex flex-col flex-grow-0 my-3 md:flex-row md:my-auto md:gap-4 md:flex-auto">
          <div className="flex p-1 text-white border-2 border-white rounded md:my-auto md:ml-auto md:w-2/4">
            <Mail fontSize="large" />
            <input
              className="w-full pl-2 my-auto text-white placeholder-white bg-transparent outline-none"
              type="text"
              placeholder="Your Email Address"
            />
          </div>
          <div className="flex p-1 my-3 text-white border-2 border-white rounded md:my-auto md:ml-auto md:w-2/4">
            <Phone fontSize="large" />
            <input
              className="w-full pl-2 my-auto text-white placeholder-white bg-transparent outline-none"
              type="text"
              placeholder="Your Mobile Number"
            />
          </div>
          <div className="m-auto">
            <button
              onClick={Subscribe}
              className="border-black border-2  bg-black text-white hover:bg-primary  px-6 py-3 rounded"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
