"use client";
import React, { useState, useEffect } from "react";
import { login, signup } from "./actions";

const Login = () => {
  const [signingUp, setSigningUp] = useState<boolean>(false);
  const [signedUp, setSignedUp] = useState<boolean>(false);

  return (
    <main className="min-h-screen flex flex-col space-y-10 items-center justify-center text-center text-white">
      <form className="flex flex-col space-y-5">
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          className="p-3 rounded text-lg text-black"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="p-3 rounded text-lg text-black"
        />
        <button
          type="submit"
          formAction={signingUp ? signup : login}
          className="px-10 py-5 bg-teal-500 hover:bg-teal-600 rounded text-xl "
        >
          {signingUp ? "Sign Up" : "Log In"}
        </button>
      </form>
      <div>
        {signingUp ? (
          <p>
            Already have an account?{" "}
            <button
              onClick={() => setSigningUp(false)}
              className="text-teal-500 font-semibold"
            >
              Log In
            </button>
          </p>
        ) : (
          <p>
            Create an account now.{" "}
            <button
              onClick={() => setSigningUp(true)}
              className="text-teal-500 font-semibold"
            >
              Sign Up
            </button>
          </p>
        )}
      </div>
    </main>
  );
};

export default Login;
