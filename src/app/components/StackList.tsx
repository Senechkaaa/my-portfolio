import React from "react";
import { imgs } from "../constants/imgs";
import Image from "next/image";

const StackList = () => {
  return (
    <ul className="flex items-center">
      {imgs.map((img) => (
        <li className="mr-10" key={img.id}>
          {" "}
          <Image alt={img.alt} src={img.path} width={45} height={45} />{" "}
        </li>
      ))}
    </ul>
  );
};

export default StackList;
