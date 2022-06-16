
import React from "react";
import CatCard from "./CatCard";
import CategoryTypes from "../../types/categoryTypes";

const MetalCard: React.FC<{
  myCategory: CategoryTypes[];
  catMetal: string;
}> = (props) => {
  return (
    <div className="neumorph container my-6 w-full text-center">
      <div className="mx-auto md:my-6">
        <div className="flex flex-wrap justify-center md:flex-row md:flex-wrap">
          {props.myCategory.map((item) => {
            return (
              <div key={item.url} className="w-1/2 md:w-1/4 lg:w-1/5">
            
                  <CatCard catData={item} catMetal={props.catMetal} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MetalCard;
