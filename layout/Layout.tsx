import React from "react";
import TheFooter from "../components/Navigation/TheFooter";
import TheHeader from "../components/Navigation/TheHeader";

const Layout=({children}:any) => {
  return (
    <div className="">
      <TheHeader />
      <main className="self-center mx-auto lg:mx-auto container max-w-[1280px]">{children}</main>
      <TheFooter />
    </div>
  );
};

export default Layout;
