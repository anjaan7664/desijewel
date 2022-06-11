import React from "react";
import TheFooter from "../components/Navigation/TheFooter";
import TheHeader from "../components/Navigation/TheHeader";

const Layout=({children}:any) => {
  return (
    <div className="max-size self-center max-w-screen-xl m-auto mx-2 lg:mx-auto">
      <TheHeader />
      <main>{children}</main>
      <TheFooter />
    </div>
  );
};

export default Layout;
