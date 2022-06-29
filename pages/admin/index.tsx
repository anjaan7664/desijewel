import React from "react";
import { useSession, signOut } from "next-auth/react";

function index() {

  function logoutHandler() {
    signOut();
  }

  return (
    <div>
      {" "}
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
}

export default index;
