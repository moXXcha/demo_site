import React from "react";

type Props = {
  text: string;
};
const BlogText = (props: Props) => {
  return <p className="text-[15px]">{props.text}</p>;
};

export default BlogText;
