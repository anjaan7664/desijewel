import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import CategoryTypes from "../../types/category.types";
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
          className="bg-gray-100 shadow-neumorph
    relative flex flex-col transition-all duration-300 m-2 md:m-4
    rounded-2xl transform md:hover:-translate-y-3 cursor-pointer"
        >
          <div className="relative pb-1/1 m-2 image-wrapper">
            <Image
              src={`/images/assets/icons/${props.catData.image}`}
              alt={`${t(props.catData.name)}+' icon'`}
              layout="fill"
              className="shadowed p-2 mx-auto w-full h-full object-contain"
            
            />
          </div>
          <div className="text-black  font-semibold text-2xl md:text-xl lg:text-2xl mt-auto py-2">
            <h2>{t(props.catData.name)}</h2>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default CatCard;
