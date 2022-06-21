import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { SingleDesign } from "../../types/designData";

const imgStyle = {
  boxShadow:
    "8px 12px 16px 0 rgba(0, 0, 0, 0.25), -6px -6px 25px 0 rgba(222, 47, 69, 0.1)",
};

const DesignCard: React.FC<{
  designData: SingleDesign;
  catMetal: string;
}> = (props) => {
  const { t } = useTranslation();

  return (
    <div className="relative designComponent w-full p-2 md:w-1/3 md:p-6">
      <div
        style={imgStyle}
        className="relative flex flex-col overflow-hidden transition duration-150 bg-white rounded rounded-t rounded-b-none group"
      >
        <motion.div className="relative md:pb-4/6" whileHover={{ scale: 1.2 }}>
          <Link
            href={`/${props.catMetal}/${props.designData.category}/${props.designData.image}`}
            className="relative w-full h-full"
          >
            <a>
              <Image
                src={`https://desijewel.in/designs/images/${
                  props.designData.path +
                  props.designData.image +
                  "." +
                  props.designData.img_type
                }`}
                alt="designAlt"
                layout="fill"
                className="h-full w-full object-cover rounded min-h-[16rem]"
              />
            </a>
          </Link>
        </motion.div>
      </div>
      <div className="relative py-2 mt-auto text-2xl font-semibold text-black md:text-xl lg:text-2xl">
        <ul className="inline-block mb-4 text-xl text-left">
          <li v-show="designData.weight" className="">
            <span className="font-bold">Weight </span>
            <span>{props.designData.id}</span>
          </li>
        </ul>

        <p className="absolute top-0 text-xl">
          <Link
            href="
            localePath({
              path: '/gold/' + props.designData.category,
              query: { subCat: props.designData.sub_category }
            })
          "
          >
            <a className="text-blue-400 underline capitalize">
              <span>{props.designData.sub_category}</span>
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default DesignCard;
