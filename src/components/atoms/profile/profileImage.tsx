import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
};
const ProfileImage = (props: Props) => {
  return (
    <Image
      src={props.src}
      width="120"
      height="120"
      alt="profileImg"
      className="rounded-full"
    />
  );
};

export default ProfileImage;
