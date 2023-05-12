import React from "react";

type Props = {
  date: string;
};
const ArchiveDate = (props: Props) => {
  return <p className="text-[13px]">{props.date}</p>;
};

export default ArchiveDate;
