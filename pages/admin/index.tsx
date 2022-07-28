import React from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Admin = ()  =>{
  const { data: session, status } = useSession()

  function logoutHandler() {
    signOut();
  }
  return (
    <React.Fragment>
      {session && (
        <div className="mx-5">
          <h1>Hello {session.user.name}</h1>
          <div className="flex min-h-[80vh] flex-col">
            <Link href="/admin/upload">
              <a className="block w-full px-6 py-3 mt-3 text-lg font-semibold text-center text-white bg-gray-800 rounded-lg shadow-xl hover:bg-gray-600 hover:text-white">
                Upload File
              </a>
            </Link>
            <Link
              v-if="$auth.user.role.includes('super')"
              href="/admin/setting"
            >
              <a className="block w-full px-6 py-3 mt-3 text-lg font-semibold text-center text-white bg-blue-800 rounded-lg shadow-xl hover:bg-blue-600 hover:text-white">
                Admin Setting
              </a>
            </Link>

            <Link href="/admin/change-password">
              <a className="block w-full px-6 py-3 mt-3 text-lg font-semibold text-center text-white bg-pink-800 rounded-lg shadow-xl hover:bg-pink-600 hover:text-white">
                Password change
              </a>
            </Link>
            <Link v-if="$auth.user.role.includes('super')" href="/admin/upld">
              <a className="block w-full px-6 py-3 mt-3 text-lg font-semibold text-center text-white bg-purple-800 rounded-lg shadow-xl hover:bg-purple-600 hover:text-white">
                Admin Uploaded
              </a>
            </Link>
            <Link
              v-if="$auth.user.role.includes('super')"
              href="/admin/content-creator"
            >
              <a className="block w-full px-6 py-3 mt-3 text-lg font-semibold text-center text-white bg-purple-800 rounded-lg shadow-xl hover:bg-purple-600 hover:text-white">
                User Posts
              </a>
            </Link>

            <button onClick={logoutHandler}>
              <a className="block w-full px-6 py-3 mt-3 text-lg font-semibold text-white bg-green-800 rounded-lg shadow-xl hover:bg-green-600 hover:text-white">
                Log out
              </a>
            </button>
          </div>
          
        </div>
      )}
    </React.Fragment>
  );
}

export default Admin;
