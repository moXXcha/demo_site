import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
  w_num: number;
  h_num: number;
};
const ContentImage = (props: Props) => {
  return (
    <Image
      src={props.src}
      width={props.w_num}
      height={props.h_num}
      alt="upperImage"
    />
  );
};

export default ContentImage;
