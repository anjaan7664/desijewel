import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Category from "../../../../components/helpers/Category";
import FullDesign from "../../../../components/helpers/FullDesign";
import { fetchSingleDesignsData } from "../../../../store/design-slice";
import { getSingleDesign } from "../../../../store/design-slice";
import { useAppSelector, useAppDispatch } from "../../../../store/hooks";
import { SingleDesign } from "../../../../types/designData";

const Design: React.FC<{
  design:SingleDesign
}> = (props) => {
  const dispatch = useAppDispatch();
  const MainImg = useAppSelector((state) => state.design.design);
  const router = useRouter();
  
  // useEffect(() => {
    //   dispatch(fetchSingleDesignsData(imageQuery));
    // }, [dispatch, imageQuery]);
    useEffect(() => {
      dispatch(getSingleDesign(props.design));
    },[dispatch, props.design]);
    const imageQuery = router.query.design;

  return (
    <React.Fragment>
      <Category catMetal="gold" />
      <div>
        {MainImg && (
          <FullDesign
            metal="gold"
            MainImg={MainImg}
            ImageQuery={imageQuery as string}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default Design;
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/DisplayDesign`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      params: { image: query.design },
    }
  );

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      design: data,
    },
  };
};
