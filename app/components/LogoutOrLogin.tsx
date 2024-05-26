import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import React from "react";
import LogoutButton from "./LogoutButton";

const LogoutOrLogin = async () => {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  console.log(data);

  if (data.user) return <LogoutButton />;
  else {
    return (
      <Link
        className="bg-teal-500 px-7 hover:bg-teal-600 py-3 rounded"
        href="/login"
      >
        Login
      </Link>
    );
  }
};

export default LogoutOrLogin;
