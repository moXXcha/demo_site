import React from "react";

type Props = {
  category: string;
};
const BlogCategory = (props: Props) => {
  return <p className="text-[13px]">{props.category}</p>;
};

export default BlogCategory;
