import Link from "next/link";
import React from "react";
import LogoutOrLogin from "./components/LogoutOrLogin";

const NavBar = () => {
  return (
    <div className="min-w-full justify-between items-center bg-gray-900 flex text-white p-7 text-xl">
      <div className="space-x-10">
        <Link href="/" className="hover:text-teal-200">
          Home
        </Link>
        <Link href="/saved-jokes" className="hover:text-teal-200">
          Saved Jokes
        </Link>
      </div>
      <div>
        <LogoutOrLogin />
      </div>
    </div>
  );
};

export default NavBar;
