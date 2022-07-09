import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import CategoryTypes from "@/types/category.types";
import Link from "next/link";

const CatCard: React.FC<{
  catData: CategoryTypes;
  catMetal: string;
}> = (props) => {
  const { t } = useTranslation();
  return (
    <Link
      //  href=" '/' + catMetal + '/' + index.url }"
      href={`/${props.catMetal}/${props.catData.url}`}
    >
      <a>
        <div
          className="relative flex flex-col m-2 transition-all duration-300 transform bg-gray-100 cursor-pointer shadow-neumorph md:m-4 rounded-2xl md:hover:-translate-y-3"
        >
          <div className="relative m-2 pb-1/1 image-wrapper">
            <Image
              src={`/images/assets/icons/${props.catData.image}`}
              alt={`${t(props.catData.name)}+' icon'`}
              layout="fill"
              className="object-contain w-full h-full p-2 mx-auto shadowed"
            
            />
          </div>
          <div className="py-2 mt-auto text-2xl font-semibold text-black md:text-xl lg:text-2xl">
            <h2>{t(props.catData.name)}</h2>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default CatCard;
