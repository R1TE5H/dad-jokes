"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function saveJoke(joke: any) {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  const user = data.user;

  if (!user) {
    throw Error("Must be an authenticated user to perform this action");
  }

  try {
    const { data, error } = await supabase
      .from("jokes")
      .insert([{ user_id: user.id, jokes_text: joke }]);
    if (error) throw error;
    revalidatePath("/saved-jokes");
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteJoke(jokeId: number) {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  const user = data.user;

  if (!user) {
    throw Error("Must be an authenticated user to perform this action");
  }
  try {
    const { data, error } = await supabase
      .from("jokes")
      .delete()
      .match({ id: jokeId, user_id: user.id });
    if (error) throw error;
    revalidatePath("/saved-jokes");
    return data;
  } catch (error) {
    throw error;
  }
}
