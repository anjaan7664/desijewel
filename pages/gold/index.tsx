import React from "react";
import MetalCard from "../../components/cards/MetalCard";
import Category from "../../components/helpers/Category";
import { default as CategoryList } from "../../assets/json/categoryList.json";
import Head from "next/head";
const index = () => {
  const catMetal = "gold";
  const myCategory = CategoryList.categories.filter((cat) => {
    return cat.metal === catMetal;
  });
  return (
    <React.Fragment>
      <Head>
        <title>Catalogue of New and Latest Gold Jewellery</title>
        <meta
          name="description"
          content="Presenting you our latest collection of Gold Jewellery with variety of weight and gemstones. Designing Jewel offers High Quality, Certified Hallmarked Premium Jewellery for you and your family"
        />
        <meta
          name="keywords"
          content="emboss,ethnic,gold price,22ct,women,buy,jewellery,kundan,emboss,design,gold,jodhpur,pali,barmer,nagaur,bikaner"
        />
      </Head>
      <Category catMetal={catMetal} />
      <MetalCard myCategory={myCategory} catMetal={catMetal} />
    </React.Fragment>
  );
};

export default index;
