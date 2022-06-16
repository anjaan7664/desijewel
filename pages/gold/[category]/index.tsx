import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { fetchDesignsData } from "../../../store/design-actions";
import DesignCard from "../../../components/cards/DesignCard";

let isInitial = true;

const Index: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const showDesigns = useAppSelector((state) => state.designs.data);
  useEffect(() => {
    dispatch(fetchDesignsData());
  }, [dispatch]);

  console.log(showDesigns);
  
  return (
    <React.Fragment>
      <div className="w-full text-center">
        <h1 className="my-2 text-2xl md:my-6">
          Showing Image of
          <span className="font-bold capitalize">{router.query.category}</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-between overflow-hidden rounded pt-4 text-center">
        {showDesigns &&  showDesigns.map((design) => {
          return (
            <DesignCard key={design.id} designData={design} catMetal="gold" />
          );
        })}
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
