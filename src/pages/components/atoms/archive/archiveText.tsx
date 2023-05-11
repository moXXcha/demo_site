import React from "react";

type Props = {
  text: string;
};
const ArchiveText = (props: Props) => {
  return <p className="text-[13px]">{props.text}</p>;
};

export default ArchiveText;
