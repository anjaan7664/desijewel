import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { SingleDesign } from "../../types/designData";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RelatedCategory from "./RelatedCategory";
import {
  Breadcrumbs,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
const FullDesign: React.FC<{
  metal: string;
  MainImg: SingleDesign;
}> = (props) => {
  const { t } = useTranslation();
  const translate = (word: string) => {
    let newWord = "category." + word;
    return t(newWord);
  };
  const imageCategoryNew = () => {
    return props.metal == "gold"
      ? props.MainImg.category
      : props.MainImg.category.replace("silver_", "");
  };
  return (
    <React.Fragment>
      {/* Showing image location */}
      <div>
        <div className="container mx-auto flex flex-col py-1 text-lg">
          <Breadcrumbs className="flex flex-row border-l-4 border-[#ae1dd2] bg-gray-100 p-1">
            <Link href="/">
              <a className="capitalize text-black">{props.metal}</a>
            </Link>

            <Link href={`/${props.metal}/${props.MainImg.category}`}>
              <a className="capitalize text-blue-600">
                {props.MainImg.category}
              </a>
            </Link>
          </Breadcrumbs>
          <div className="my-2 border-l-4 border-[#1D9DD2] text-lg">
            <h1 className="font-sm md:font-2xl ml-1 font-bold capitalize leading-5">
              {props.MainImg.image}
            </h1>
          </div>
        </div>
      </div>
      {/* Main Designs  */}
      <section className="flex flex-wrap overflow-hidden rounded bg-white text-center md:px-2">
        <div className="my-2 flex w-full flex-col md:flex-row md:p-0">
          {/* Hero Design  */}
          <div className="bg-violet rounded-t rounded-b-none md:w-3/5">
            {/* Image  */}
              <div className="my-2 flex relative h-full w-full min-w-[8] flex-col rounded-t rounded-b-none md:m-3 md:my-auto">
                <Image
                  src={`https://desijewel.in/designs/images/${
                    props.MainImg.path +
                    props.MainImg.image +
                    "." +
                    props.MainImg.img_type
                  }`}
                  layout="responsive"
                  width={100}
                  height={70}
                  alt={props.MainImg.alt}
                  priority={true}
                  className="shadow-lg2 relative rounded object-contain md:max-h-[75vh] min-h-[15rem] md:max-w-[100%]"
                />
              </div>
          </div>

          {/* Product Detail  */}
          <div className="text-left md:w-2/5 md:px-6 lg:px-4">
            <h1 className="text-primary text-3xl font-semibold">
              Product Detail
            </h1>
            <ul className="mt-6 space-y-2 md:space-y-4">
              <li className="border-b border-gray-200">
                <span>
                  <div className="border-b border-gray-200">
                    {/* Price Breakup  */}
                    <div>
                      <span className="font-bold">Price -</span>
                      <span>N/A</span>
                    </div>
                  </div>
                </span>
              </li>
              <li className="flex border-b border-gray-200">
                <span className="font-bold">Weight -</span>
                <div className="ml-auto">
                  <span className="text-right">{props.MainImg.weight} gm </span>
                </div>
              </li>
              <li className="flex w-full border-b border-gray-200">
                <span className="font-bold">Purity -</span>

                <span className="ml-auto">
                  &quot;22K(91.6)&quot; : &quot;92.5&quot;
                </span>
              </li>
              <li className="flex border-b border-gray-200 capitalize">
                <span className="font-bold">Category -</span>
                <Link href={`/${props.metal}/${imageCategoryNew()}`}>
                  <a className="ml-auto text-xl font-normal text-blue-600 underline">
                    {" "}
                    {imageCategoryNew()}
                  </a>
                </Link>
              </li>
              <li
                className={`flex border-b border-gray-200 capitalize ${
                  props.metal == "gold" ? "block" : "hidden"
                }`}
              >
                <span className="font-bold">Type -</span>
                <Link
                  //   href="
                  //  {
                  //     path: '/' + metal + '/' + imageCategoryNew,
                  //     query: { subCat: MainImg.sub_category },
                  //   }
                  // "
                  href={{
                    pathname: `/${props.metal}/${imageCategoryNew()}`,
                    query: { subCat: props.MainImg.sub_category },
                  }}
                >
                  <a className="ml-auto text-xl font-normal text-blue-600 underline">
                    {props.MainImg.sub_category}
                  </a>
                </Link>
              </li>
              <li>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Product Description</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{props.MainImg.alt}</Typography>
                  </AccordionDetails>
                </Accordion>
              </li>
              <li>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>Tags</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>N/A</Typography>
                  </AccordionDetails>
                </Accordion>
              </li>
            </ul>
            {/* To Buy and Call  */}
            <div className="mt-8 border p-2 border-gray-300 rounded shadow-lg bg-gray-100">
              {/* <div v-if="designObject && designObject.silver_avail === 'yes'"> */}
              <div>
                <p className="text-lg md:text-xl border-l-4 border-[#8a1dd2] pl-2">
                  This design is also availale in silver with{" "}
                  <span
                    className="text-[#FFD900] font-bold"
                    // style="-webkit-text-stroke: 0.3px black"
                  >
                    Gold
                  </span>{" "}
                  plated. You can get this design at low price.
                </p>
              </div>
              <div className="flex flex-row border-l-4 border-[#32d21d] pl-2 mt-1 text-gray-700">
                <p className=" ">For More Info & to Buy Call :-</p>
                &nbsp;
                <a href="tel:+919680398417" className="text-blue-600 underline">
                  +919680398417
                </a>
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Related Category  */}
      {props.metal === "gold" && (
        <RelatedCategory
          metal={props.metal}
          category={props.MainImg.category}
        />
      )}
    </React.Fragment>
  );
};

export default FullDesign;
