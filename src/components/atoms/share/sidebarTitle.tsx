import React from "react";

type Props = {
  title: string;
};
const SidebarTitle = (props: Props) => {
  return <h2 className="text-[17px]">{props.title}</h2>;
};

export default SidebarTitle;
