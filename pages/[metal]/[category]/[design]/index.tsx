import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import Category from "@/components/helpers/Category";
import FullDesign from "@/components/helpers/FullDesign";
import { fetchSingleDesignsData } from "@/store/design-slice";
import { useAppSelector } from "@/store/hooks";
import { wrapper } from "@/store/index";

const Design = () => {
  const router = useRouter();
  const metal = router.query.metal as string;
  const MainImg = useAppSelector((state) => state.design.design);
  return (
    <React.Fragment>
      <Head>
        <title>{MainImg.alt.en} </title>
        <meta name="description" content=" " />
        <meta name="keywords" content=" " />
      </Head>
      <Category catMetal={metal} />
      <div>{MainImg && <FullDesign metal={metal} MainImg={MainImg} />}</div>
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
