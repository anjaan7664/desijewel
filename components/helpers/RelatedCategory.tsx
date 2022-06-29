import React from "react";
import { default as categoryData } from "@/assets/json/categoryList.json";
import CategoryTypes from "../../types/category.types";
const RelatedCategory: React.FC<{ metal: string; category: string }> = (
  props
) => {
  const imageCategoryNew = () => {
    return props.metal == "gold"
      ? props.category
      : props.category.replace("silver_", "");
  };
  const myCategory = () => {
    const result = categoryData.categories.find((i) => {
      i.url === props.category && i.metal === props.metal;
    });
    const newRelatedArray = categoryData.filter(
      // TODO change this to use the category type
      (i) => i.part === "neck" && i.metal === "gold" && i.url !== "aad"
    );
    return shuffle(newRelatedArray);
  };

  return (
    <div>
      <h2 className="my-4 text-3xl font-semibold text-center text-green-600">
        Explore Similar Jewellery
      </h2>
      {/* <MetalCard myCategory={myCategory()} catMetal={props.metal} /> */}
    </div>
  );
};

export default RelatedCategory;

export const shuffle = (array: CategoryTypes[]) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array.splice(0, 4);
};
