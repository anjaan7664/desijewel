import { useRouter } from "next/router";
import React, { useEffect } from "react";
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
    <div>
      {MainImg && (
        <FullDesign metal="gold" MainImg={MainImg} ImageQuery={imageQuery as string} />
      )}
    </div>
  );
};

export default Index;
