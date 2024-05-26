import { createClient } from "@/utils/supabase/server";
import React from "react";
import DeleteJoke from "../components/DeleteJoke";

const SavedJokes = async () => {
  const supabase = createClient();
  const { data: userData } = await supabase.auth.getUser();
  let jokes = [];

  if (userData.user) {
    const { data: jokesData, error } = await supabase.from("jokes").select("*");
    if (error) console.error("Error fetching the jokes:", error);
    jokes = jokesData!;
  }

  let header =
    jokes.length === 0 ? "Save some jokes to see them here" : "Saved Jokes";

  if (!userData.user) header = "Log in to save your favourite jokes.";

  return (
    <main className="min-h-screen flex-col space-y-10 justify-center p-20 text-white ">
      <p className="text-4xl text-center ">{header}</p>
      <div className="text-xl space-y-5">
        {" "}
        {jokes.map((joke, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-900 p-5 rounded-xl"
          >
            <p>{joke.jokes_text}</p>
            <DeleteJoke joke={joke.id} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default SavedJokes;
