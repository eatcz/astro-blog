import React from "react";
import styles from "./BackDrop.module.css";
const BackDrop = () => {
  return (
    <div
      id="backdrop"
      class="backdrop hide-menu fixed top-0 left-0 right-0 bottom-0 bg-black/75 z-10 translate-x-full  transition-transform"
    >
      <div class="asider w-[60vw]  bg-white h-full dark:bg-gray-800"></div>
    </div>
  );
};

export default BackDrop;
