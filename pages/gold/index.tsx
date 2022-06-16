import React from 'react'
import MetalCard from '../../components/cards/MetalCard';
import Category from '../../components/helpers/Category';
import { default as CategoryList } from "../../assets/json/categoryList.json";
const index = ()=> {
  const catMetal = 'gold';
  const myCategory = CategoryList.categories.filter(cat => {
    return cat.metal === catMetal;
  });
  return (
    <React.Fragment>
      <Category catMetal={catMetal} />
      <MetalCard myCategory={myCategory} catMetal={catMetal}/>
    </React.Fragment>
  )
}

export default index