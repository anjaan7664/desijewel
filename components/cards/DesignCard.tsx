import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { SingleDesign } from "@/types/designData.types";
import Edit from "../admin/Edit";
import { useSession } from "next-auth/react";

const imgStyle = {
  boxShadow:
    "8px 12px 16px 0 rgba(0, 0, 0, 0.25), -6px -6px 25px 0 rgba(222, 47, 69, 0.1)",
};

const DesignCard: React.FC<{
  designData: SingleDesign;
  catMetal: string;
}> = (props) => {
  const { t } = useTranslation();
  const { data: session } = useSession();
  return (
    <div className="relative w-full p-2 designComponent md:w-1/3 md:p-6">
      <div
        style={imgStyle}
        className="relative flex flex-col overflow-hidden bg-white rounded rounded-t rounded-b-none group"
      >
        <motion.div className="relative w-full" whileHover={{ scale: 1.2 }}>
          <Link
            href={`/${props.catMetal}/${props.designData.info.category}/${props.designData.url.image}`}
          >
            <a className="relative h-auto image-wrap">
              <Image
                src={`/images/designs/images/${
                  props.designData.url.path +
                  props.designData.url.image +
                  "." +
                  props.designData.url.img_type
                }`}
                alt="designAlt"
                layout="responsive"
                width={100}
                height={70}
                className="object-cover "
              />
            </a>
          </Link>
        </motion.div>
      </div>
      <div className="relative py-2 mt-auto text-2xl font-semibold text-black md:text-xl lg:text-2xl">
        <ul className="inline-block mb-4 text-xl text-left">
          {props.designData.extra.weight != "0" && (
            <li className="">
              <span className="font-bold">Weight </span>
              <span>{props.designData.extra.weight}</span>
            </li>
          )}
        </ul>

        <p className="absolute top-0 text-xl">
          <Link
            href={`/${props.catMetal}/${props.designData.info.category}/${props.designData.url.image}?${props.designData.info.sub_category}`}
          >
            <a className="text-blue-400 underline capitalize">
              <span>{props.designData.info.sub_category}</span>
            </a>
          </Link>
        </p>
      </div>
      {session && <Edit hit={props.designData.extra.hit as string} />}
    </div>
  );
};

export default DesignCard;
