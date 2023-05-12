import React from "react";

type Props = {
  title: string;
  size: number
};
const Title = (props: Props) => {
  return <p className={`text-[${props.size}px]`}>{props.title}</p>;
};

export default Title;
