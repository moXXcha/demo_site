import React from "react";

type Props = {
  date: string;
};
const BlogDate = (props: Props) => {
  return <p className="text-[13px]">{props.date}</p>;
};

export default BlogDate;
