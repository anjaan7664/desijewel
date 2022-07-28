import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionDetails, Typography, AccordionSummary } from "@mui/material";
import { default as myCategory } from "@/assets/json/categoryList.json";
const Category: React.FC<{
  catMetal: string;
}> = (props) => {
  const { t } = useTranslation();
  const body_part = {
    gold: [
      { icon: "head.svg", part: "head" },
      { icon: "ear.svg", part: "ear" },
      { icon: "neck.svg", part: "neck" },
      { icon: "hand.svg", part: "hand" },
      { icon: "others.svg", part: "others" },
    ],
    silver: [
      { icon: "hand.svg", part: "hand" },
      { icon: "waist.svg", part: "waist" },
      { icon: "leg.svg", part: "legs" },
      { icon: "others.svg", part: "others" },
    ],
  };
  const body_part_array = () => {
    if (props.catMetal === "gold") {
      return body_part.gold;
    } else {
      return body_part.silver;
    }
  };

  const showByBodyPart = (part: string, metal:string) => {
    return myCategory.categories.filter((i) => i.part === part && i.metal === metal);
  };
  return (
    <React.Fragment>
      <div className="hidden mx-auto mt-4 border border-accent md:block md:mt-1">
        <div className="flex flex-row p-2 px-6 border-black">
          <p className="w-1/6 h-full my-auto text-xl font-semibold text-black">
            Sort By Body Part
          </p>
          <div className="flex w-5/6">
            {body_part_array().map((item) => {
              return (
                <div key={item.part} className="z-40 flex-1 mx-2">
                  <div className="relative z-30 inline-block w-full m-1 text-black group">
                    <button
                      className="relative flex flex-row items-center w-full h-full px-3 py-2 bg-white border-2 rounded-sm outline-none border-secondary focus:outline-none"
                    >
                      <div>
                        <Image
                          src={`/images/assets/svg/${item.icon}`}
                          alt={item.part}
                          width={24}
                          height={24}
                          layout="responsive"
                        />
                      </div>

                      <span className="flex-1 pr-1 text-lg font-semibold text-black capitalize">
                        {t(item.part)}
                      </span>
                      <span>
                        <svg
                          className="w-4 h-4 transition duration-150 ease-in-out transform fill-current group-hover:-rotate-180"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </button>
                    <ul className="absolute w-full transition duration-150 ease-in-out origin-top transform scale-0 bg-white border rounded-sm shadow-card group-hover:scale-100">
                      {showByBodyPart(item.part, props.catMetal).map((design) => {
                        return (
                          <li
                            key={design.path}
                            className="w-full px-3 py-2 text-black rounded-sm hover:bg-gray-100"
                          >
                            <Link
                              href={`/${props.catMetal}/${design.url}`}
                              className="inline-block w-full"
                            >
                              <a>{t(design.name)}</a>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* For Mobile Version  */}
      <Accordion className="w-full my-1 bg-white border border-black text-accent md:hidden">
        <AccordionSummary
          className=""
          // expandIcon={<ExpandMoreIcon />}
        >
          <Typography
            className="flex items-center px-3 mx-auto text-xl bg-white rounded-sm outline-none text-accent focus:outline-none min-w-32 md:text-lg"
          >
            Jewellery By Body Part
          </Typography>
        </AccordionSummary>
        <AccordionDetails className=" border-secondary">
          {body_part_array().map((index) => {
            return (
              <Accordion
                className="border border-base-300 bg-base-100"
                key={index.part}
              >
                <AccordionSummary
                  className="flex items-center w-full h-full bg-white border-2 "
                >
                  <div className="flex-1 ">
                    <span className="relative">
                      <Image
                        src={`/images/assets/svg/${index.icon}`}
                        alt={index.part}
                        className=""
                        width={30}
                        height={30}
                        layout="fixed"
                      />
                    </span>
                  </div>
                  <span className="flex-1 pr-1 text-lg font-semibold text-black capitalize">
                    {t(index.part)}
                  </span>
                </AccordionSummary>
                <AccordionDetails>
                  <ul
                    className="w-full bg-white rounded-sm"
                  >
                    {showByBodyPart(index.part, props.catMetal).map((design, index) => {
                      return (
                        <li
                          key={index}
                          className="w-full px-3 py-2 text-black border-2 rounded-sm"
                        >
                          <Link
                            href={`/${props.catMetal}/${design.url}`}
                            className="inline-block w-full"
                          >
                            <a>{t(design.name)}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </React.Fragment>
  );
};

export default Category;
