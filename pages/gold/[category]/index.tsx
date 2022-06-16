import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { fetchDesignsData } from "../../../store/design-actions";
import DesignCard from "../../../components/cards/DesignCard";
import Category from "../../../components/helpers/Category";
import { Pagination } from "@mui/material";

let isInitial = true;
const perPage = 12;

const Index: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [pageNum, setPageNum] = useState<number>(
    router.query.page ? parseInt(router.query.page as string) : 1
  );
  const showDesigns = useAppSelector((state) => state.design.designs);

  useEffect(() => {
    const designConfig = {
      Category: router.query.category,
      page: router.query.page || 1,
      perPage: perPage,
    };
    dispatch(fetchDesignsData(designConfig));
  }, [dispatch, router.query.category, router.query.page]);

  console.log(showDesigns);
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
      <div className="flex flex-wrap justify-between overflow-hidden rounded pt-4 text-center">
        {showDesigns.data &&
          showDesigns.data.map((design) => {
            return (
              <DesignCard key={design.id} designData={design} catMetal="gold" />
            );
          })}
      </div>
      <div className="w-full text-center">
        <Pagination
          page={pageNum}
          count={Math.round(showDesigns.total / perPage)}
          variant="outlined"
          shape="rounded"
          onChange={onPageChange}
        />
      </div>
    </React.Fragment>
  );
};

export const SortBy = () => {
  return (
    <div className="w-full text-center">
      <p className="my-2 text-2xl md:my-6">Sort By</p>
    </div>
  );
};

export default Index;
