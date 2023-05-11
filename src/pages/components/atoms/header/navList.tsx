import React from "react";
import { Link } from "react-router-dom";

type Props = {
  text: string;
  // src: string;
};
const NavList = (props: Props) => {
  return (
    <li className="list-none">
      <a href="" className="text-[12px] text-black">{props.text}</a>
    </li>
  );
};

export default NavList;
