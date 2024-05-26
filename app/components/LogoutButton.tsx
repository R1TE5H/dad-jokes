"use client";
import React from "react";
import { logout } from "../logout/actions";

const LogoutButton = () => {
  return (
    <button
      className="bg-red-500 px-7 hover:bg-red-600 py-2.5 rounded"
      onClick={() => logout()}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
