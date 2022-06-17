import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Category from "../../../../components/helpers/Category";
import FullDesign from "../../../../components/helpers/FullDesign";
import { fetchSingleDesignsData } from "../../../../store/design-actions";
import { useAppSelector, useAppDispatch } from "../../../../store/hooks";

const Index: React.FC = () => {
  const dispatch = useAppDispatch();
  const MainImg = useAppSelector((state) => state.design.design);
  const router = useRouter();
  const imageQuery = router.query.design;

  useEffect(() => {
    dispatch(fetchSingleDesignsData(imageQuery));
  }, [dispatch, imageQuery]);

  return (
    <React.Fragment>
      <Category catMetal="silver" />
    <div>
      
      {MainImg && (
        <FullDesign metal="silver" MainImg={MainImg} ImageQuery={imageQuery as string} />
        )}
    </div>
        </React.Fragment>
  );
};

export default Index;
