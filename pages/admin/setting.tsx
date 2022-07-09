import Image from "next/image";
import React from "react";

function setting() {
  return (
    <div className="container-2">
      <form method="post">
        <h1 className="text-3xl">Account Activation</h1>
        <h3>Enter Email/Username</h3>
        <input
          v-model="username"
          className="block w-full px-3 py-2 placeholder-gray-600 bg-white border-2 border-gray-300 rounded-lg shadow-md text-md focus:border-gray-600 focus:bg-white focus:placeholder-gray-500 focus:outline-none"
          type="text"
          name="username"
        />
        <button className="block w-full px-6 py-3 mt-3 text-lg font-semibold text-white bg-gray-800 rounded-lg shadow-xl hover:bg-black hover:text-white">
          Activate
        </button>

        <h2 id="acc_act"></h2>
      </form>
      <br />
      <form method="post">
        <h1 className="text-3xl">Make Admin</h1>
        <h3>Enter Email/Username</h3>
        <input
          v-model="username"
          className="block w-full px-3 py-2 placeholder-gray-600 bg-white border-2 border-gray-300 rounded-lg shadow-md text-md focus:border-gray-600 focus:bg-white focus:placeholder-gray-500 focus:outline-none"
          type="text"
          name="username"
        />

        <button className="block w-full px-6 py-3 mt-3 text-lg font-semibold text-white bg-gray-800 rounded-lg shadow-xl hover:bg-black hover:text-white">
          Make Admin
        </button>
        <h2 id="make_adm"></h2>
      </form>
      <br />
      <form method="post">
        <h1 className="text-3xl">Set Password</h1>
        <input
          v-model="username"
          className="block w-full px-3 py-2 placeholder-gray-600 bg-white border-2 border-gray-300 rounded-lg shadow-md text-md focus:border-gray-600 focus:bg-white focus:placeholder-gray-500 focus:outline-none"
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          v-model="password"
          className="block w-full px-3 py-2 placeholder-gray-600 bg-white border-2 border-gray-300 rounded-lg shadow-md text-md focus:border-gray-600 focus:bg-white focus:placeholder-gray-500 focus:outline-none"
          type="text"
          name="password"
          placeholder="Password"
        />

        <button className="block w-full px-6 py-3 mt-3 text-lg font-semibold text-white bg-gray-800 rounded-lg shadow-xl hover:bg-black hover:text-white">
          Set Password
        </button>
        <h2 id="set_pass"></h2>
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default setting;
