import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "../../store/hooks";
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
  const myCategory = useAppSelector((state) => state.category.category);
  const showByBodyPart = (part: string) => {
    return myCategory.categories.filter((i) => i.part === part);
  };
  return (
    <React.Fragment>
      <div className="border border-accent hidden mx-auto md:block mt-4 md:mt-1">
        <div className="flex flex-row p-2 px-6 border-black">
          <p className="w-1/6 h-full my-auto text-xl font-semibold text-black">
            Sort By Body Part
          </p>
          <div className="w-5/6 flex">
            {body_part_array().map((item) => {
              return (
                <div key={item.part} className="z-40 mx-2 flex-1">
                  <div className="relative inline-block w-full m-1 text-black group z-30">
                    <button
                      className="relative flex flex-row items-center w-full h-full px-3 py-2 border-2
               bg-white border-secondary rounded-sm outline-none focus:outline-none"
                    >
                      <Image
                        src={`/images/svg/${item.icon}`}
                        alt={item.part}
                        layout="fill"
                        className="ml-auto object-contain w-full h-full"
                      />
                      <span className="flex-1 pr-1 text-lg font-semibold capitalize text-black">
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
                      {showByBodyPart(item.part).map((design) => {
                        return (
                          <li
                            key={design.path}
                            className="w-full px-3 py-2 rounded-sm hover:bg-gray-100 text-black"
                          >
                            <Link
                              // href="'/'+catMetal+'/' + design.url"
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
    </React.Fragment>
  );
};

export default Category;
