import { createClient } from "@/utils/supabase/server";
import JokeFetcher from "./components/JokeFetcher";

export default async function Home() {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <main className="min-h-screen flex items-center justify-center text-center text-white ">
      <JokeFetcher user={data.user} />
    </main>
  );
}
