import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "../../../store/hooks";
import { fetchDesignsData } from "../../../store/design-slice";
import DesignCard from "../../../components/cards/DesignCard";
import Category from "../../../components/helpers/Category";
import { Pagination, Stack } from "@mui/material";
import Image from "next/image";
import { NextPage } from "next";
import { wrapper } from "../../../store";
import Head from "next/head";
const perPage = 11;
const imgStyle = {
  boxShadow:
    "8px 12px 16px 0 rgba(0, 0, 0, 0.25), -6px -6px 25px 0 rgba(222, 47, 69, 0.1)",
};
const CategoryPage: NextPage = () => {
  const router = useRouter();
  const [pageNum, setPageNum] = useState<number>(
    router.query.page ? parseInt(router.query.page as string) : 1
  );
  const designData = useAppSelector((state) => state.design.designs);

  const showDesigns = useAppSelector((state) => state.design.designs);
  const onPageChange = (event: React.ChangeEvent<unknown>, pageNum: number) => {
    router.push(`/gold/${router.query.category}?page=${pageNum}`);
    setPageNum(pageNum);
  };
  return (
    <React.Fragment>
      <Head>
        <title> </title>
        <meta name="description" content=" " />
        <meta name="keywords" content=" " />
      </Head>
      <Category catMetal="gold" />
      <div className="w-full text-center">
        <h1 className="my-2 text-2xl md:my-6">
          Showing Image of &nbsp;
          <span className="font-bold capitalize">{router.query.category}</span>
        </h1>
      </div>
      <SortBy />
      <div className="flex flex-wrap justify-between pt-4 overflow-hidden text-center rounded">
        <Shoppers />
        {designData.docs &&
          designData.docs.map((design) => {
            return (
              <DesignCard key={design.id} designData={design} catMetal="gold" />
            );
          })}
      </div>
      <div className="w-full text-center">
        {showDesigns && (
          <Stack spacing={2}>
            <Pagination
              page={pageNum}
              count={showDesigns.totalPages}
              shape="rounded"
              onChange={onPageChange}
              className="mx-auto my-2"
              color="primary"
              showFirstButton
              showLastButton
            />
          </Stack>
        )}
      </div>
    </React.Fragment>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query }) => {
      const designConfig = {
        category: query.category,
        page: query.page || 1,
        perPage: 11,
      };
      await store.dispatch(fetchDesignsData(designConfig));
      return {
        props: {},
      };
    }
);
export default CategoryPage;

export const SortBy = () => {
  const sorting = (sort: string) => {
    console.log(sort);

    // router.push(`/gold/${router.query.category}?sort=${sort}`);
  };
  return (
    <div className="flex flex-row justify-center">
      <p className="hidden h-full mx-4 my-auto text-2xl font-bold md:block">
        Sort By:
      </p>
      <ul className="flex flex-row self-center">
        <li
          className="px-6 py-2 mx-1 text-white bg-green-500 rounded-md cursor-pointer"
          // onClick={sorting('')}
        >
          All
        </li>
        <li
          className={`mx-1 rounded-md px-4 py-2 text-white md:px-6 + ${
            1 == 1
              ? "bg-purple-500 cursor-pointer"
              : "bg-gray-500 cursor-not-allowed"
          }`}
          // onClick={sorting('desi')}
        >
          Desi
        </li>
        <li
          className={`mx-1 rounded-md px-4 py-2 text-white md:px-6 + ${
            1 == 1
              ? "bg-yellow-500 cursor-pointer"
              : "bg-gray-500 cursor-not-allowed"
          }`}
          // onClick={sorting('fancy')}
        >
          Fancy
        </li>
        <li
          className={`mx-1 rounded-md px-4 py-2 text-white md:px-6 + ${
            1 == 1
              ? "bg-blue-500 cursor-pointer"
              : "bg-gray-500 cursor-not-allowed"
          }`}
          // onClick={sorting('kundan')}
        >
          Kundan
        </li>
      </ul>
    </div>
  );
};
export const Shoppers = () => {
  return (
    <div className="relative w-full h-full p-2 designComponent md:w-1/3 md:p-6">
      <div style={imgStyle} className="relative">
        <Image
          src={
            1 == 1
              ? "/images/shoppers/shoppers_silver.webp"
              : "/images/shoppers/shoppers1.webp"
          }
          alt="Designing Jewel Contact Card"
          width={100}
          height={70}
          className="h-full w-full rounded min-h-[16rem] object-fill"
          layout="responsive"
          priority
        />
      </div>

      <h4 className="my-2">
        Contact for more info -
        <a href="tel:+919680398417" className="text-blue-600 underline">
          +919680398417
        </a>
      </h4>
    </div>
  );
};
