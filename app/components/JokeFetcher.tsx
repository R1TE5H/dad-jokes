"use client";
import { User } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { saveJoke } from "../data/joke/actions";
import toast, { Toaster } from "react-hot-toast";

interface Props {
  user: User | null;
}

const JokeFetcher = ({ user }: Props) => {
  const [joke, setJoke] = useState<string>("Loading Joke");

  useEffect(() => {
    fetchingJoke();
  }, []);

  const fetchingJoke = async () => {
    const res = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await res.json();
    setJoke(data.joke);
  };

  const saveJokeText: string = user ? "Save Joke" : "Login to Save Jokes";

  return (
    <>
      {" "}
      <Toaster />
      <div className="text-white items-center px-20 lg:px-32 space-y-10">
        <p className="text-lg md:text-xl lg:text-4xl p-5">{joke}</p>
        <div className="flex gap-10 justify-center">
          {" "}
          <button
            className="px-10 py-5 bg-teal-500 hover:bg-teal-600 rounded text-xl"
            onClick={fetchingJoke}
          >
            Regenerate
          </button>
          <button
            disabled={!user}
            onClick={async () => {
              if (!user) return;
              await saveJoke(joke);
              toast.success("Joke Saved!");
            }}
            className="px-10 py-5 bg-teal-500 hover:bg-teal-600 rounded text-xl"
          >
            {saveJokeText}
          </button>
        </div>
      </div>
    </>
  );
};

export default JokeFetcher;
