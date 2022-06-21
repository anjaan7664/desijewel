
import React from "react";
import Category from "../../../../components/helpers/Category";
import FullDesign from "../../../../components/helpers/FullDesign";
import { wrapper } from "../../../../store";
import { fetchSingleDesignsData } from "../../../../store/design-slice";
import { useAppSelector } from "../../../../store/hooks";
import { SingleDesign } from "../../../../types/designData";

const Design: React.FC<{
  design: SingleDesign;
}> = (props) => {
  const MainImg = useAppSelector((state) => state.design.design);
  return (
    <React.Fragment>
      <Category catMetal="gold" />
      <div>
        {MainImg && (
          <FullDesign
            metal="gold"
            MainImg={MainImg}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query }) => {
      await store.dispatch(fetchSingleDesignsData(query.design));
      return {
        props: {},
      };
    }
);
export default Design;
