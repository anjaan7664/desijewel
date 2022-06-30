import React from "react";
import { useSession, signOut } from "next-auth/react";

function index() {

  const { data: session } = useSession();

  function logoutHandler() {
    signOut();
  }
  console.log(session?.user);
  return (
    <div>
      {" "}
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
}

export default index;
