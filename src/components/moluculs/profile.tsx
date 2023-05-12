import React from "react";
import ProfileImage from "../atoms/profile/profileImage";
import ProfileName from "../atoms/profile/profileName";
import ProfileText from "../atoms/profile/profileText";
import Image from "../../../public/img/author.jpg";

const Profile = () => {
  return (
    <div className="text-center w-[350px] flex flex-col mb-[80px]">
      <div className="mx-auto mb-[30px]">
        <ProfileImage src={Image} />
      </div>
      <div className="mb-[30px]">
        <ProfileName />
      </div>
      <ProfileText />
    </div>
  );
};

export default Profile;
