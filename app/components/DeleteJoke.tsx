"use client";
import React from "react";
import { IoClose } from "react-icons/io5";
import { deleteJoke } from "../data/joke/actions";

interface Props {
  joke: any;
}

const DeleteJoke = ({ joke }: Props) => {
  return (
    <div>
      <button onClick={() => deleteJoke(joke)}>
        <IoClose size={30} className="fill-gray-700 hover:fill-red-500" />
      </button>
    </div>
  );
};

export default DeleteJoke;
