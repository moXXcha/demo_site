import React from "react";
import Link from "next/link";

type Props = {
  href: string;
};
const Readmore = (props: Props) => {
  return (
    <Link href={props.href} className="border-b text-[10px]">
      read more
    </Link>
  );
};

export default Readmore;
