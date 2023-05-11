import React from "react";
import Link from "next/link";

type Props = {
  href: string;
  text: string;
};
const FooterAboutLink = (props: Props) => {
  return (
    <li>
      <Link href={props.href} className="block">
        {props.text}
      </Link>
    </li>
  );
};

export default FooterAboutLink;
