import React from "react";
import { useRouter } from "next/router";
import MetalCard from "@/components/cards/MetalCard";
import Category from "@/components/helpers/Category";
import { default as CategoryList } from "@/assets/json/categoryList.json";
import Head from "next/head";
const headData = {};
const MetalPage = () => {
  const router = useRouter();
  const catMetal = router.query.metal as string;
  const myCategory = CategoryList.categories.filter((cat) => {
    return cat.metal === catMetal;
  });
  let title, description;
  let keywords =
    "emboss,ethnic,gold price,22ct,women,buy,jewellery,kundan,emboss,design,gold,jodhpur,pali,barmer,nagaur,bikaner";
  if (catMetal === "gold") {
    title = "Catalogue of New and Latest Gold Jewellery";
    description =
      "Presenting you our latest collection of Gold Jewellery with variety of weight and gemstones. Designing Jewel offers High Quality, Certified Hallmarked Premium Jewellery for you and your family";
  } else {
    title = "Catalogue of New and Latest Silver Jewellery";
    description =
      "Presenting you our latest collection of Silver Jewellery with variety of weight and gemstones. Designing Jewel offers High Quality, Certified Hallmarked Premium Jewellery for you and your family.";
  }
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Category catMetal={catMetal} />
      <MetalCard myCategory={myCategory} catMetal={catMetal} />
    </React.Fragment>
  );
};

export default MetalPage;
