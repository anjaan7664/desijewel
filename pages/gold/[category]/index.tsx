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

const perPage = 11;

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
      <Category catMetal="gold" />
      <div className="w-full text-center">
        <h1 className="my-2 text-2xl md:my-6">
          Showing Image of
          <span className="font-bold capitalize">{router.query.category}</span>
        </h1>
      </div>
      <SortBy />
      <div className="flex flex-wrap justify-between overflow-hidden rounded pt-4 text-center">
        <Shoppers />
        {designData.data &&
          designData.data.map((design) => {
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
              // count={Math.round(showDesigns.total / 12)}
              count={112}
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
        Category: query.category,
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
      <p className="mx-4 my-auto hidden h-full text-2xl font-bold md:block">
        Sort By:
      </p>
      <ul className="flex flex-row self-center">
        <li
          className="mx-1 cursor-pointer rounded-md bg-green-500 px-6 py-2 text-white"
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
    <div className="relative h-full w-full p-2 md:w-1/3 md:p-6">
      {1 == 1 ? (
        <div className="">
          <Image
            src="/images/shoppers/shoppers_silver.webp"
            alt="Designing Jewel Contact Card"
            className="w-full min-w-full object-fill"
            layout="fill"
          />
        </div>
      ) : (
        <div className="relative">
          <Image
            src="/images/shoppers/shoppers1.webp"
            alt="Designing Jewel Contact Card"
            className="w-full min-w-full object-fill"
            layout="fill"
          />
        </div>
      )}

      <h4 className="my-2">
        Contact for more info -
        <a href="tel:+919680398417" className="text-blue-600 underline">
          +919680398417
        </a>
      </h4>
    </div>
  );
};
