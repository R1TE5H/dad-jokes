import React from "react";
import {
  RiSupabaseFill,
  RiTailwindCssFill,
  RiNextjsFill,
} from "react-icons/ri";

const Libraries = () => {
  return (
    <div className="fixed flex space-x-2 bottom-5 items-center right-5 bg-gray-900 px-5 py-3 rounded-full">
      <a href="https://supabase.com" target="_blank">
        {" "}
        <RiSupabaseFill
          className="fill-teal-500 hover:fill-teal-600"
          size={30}
        />
      </a>
      <a href="https://tailwindcss.com" target="_blank">
        <RiTailwindCssFill
          className="fill-teal-500 hover:fill-teal-600"
          size={40}
        />
      </a>
      <a href="https://nextjs.org" target="_blank">
        <RiNextjsFill className="fill-teal-500 hover:fill-teal-600" size={40} />
      </a>
    </div>
  );
};

export default Libraries;
