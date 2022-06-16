import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { SingleDesign } from "../../types/types";

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
        <div className="relative md:pb-4/6">
          <Link
            href="
            localePath({
              path:'/'+catMetal+'/design/' + (((designData.title) == '') ? designData.image : designData.title),
              query: { subCat: designData.sub_category }
            })
          "
            className="relative"
          >
            <Image
              src={`/images/designs/thumb/${
                props.designData.path +
                props.designData.image +
                "." +
                props.designData.img_type
              }`}
              alt="designAlt"
              layout="fill"
              className="lazy-img-fadein md:absolute h-full w-full object-cover rounded min-h-[16rem]
           transition duration-300 ease-in-out transform"
            />
          </Link>
        </div>
      </div>
      <div className="relative py-2 mt-auto text-2xl font-semibold text-black md:text-xl lg:text-2xl">
        <ul className="inline-block mb-4 text-xl text-left">
          <li v-show="designData.weight" className="">
            <span className="font-bold">Price - </span>
            <span>150000</span>
            <span className="font-bold">Weight </span>
            <span>{props.designData.id}</span>
          </li>
        </ul>
        <p className="text-sm" v-if="adminAccess">
          {props.designData.comment}
        </p>
        <p className="absolute top-0 text-xl">
          <Link
            href="
            localePath({
              path: '/gold/' + props.designData.category,
              query: { subCat: props.designData.sub_category }
            })
          "
            className="text-blue-400 underline capitalize"
          >
            <span>{props.designData.sub_category}</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default DesignCard;
