import React from "react";
import FooterAbout from "../compounds/footerAbout";
import FooterMenu from "../compounds/footerMenu";
import FooterTwitter from "../compounds/footerTwitter";
import FooterCopyright from "../atoms/footerCopyright/footerCopyright";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between w-[1170px] mx-auto mt-[40px] mb-[70px]">
        <FooterAbout />
        <FooterMenu />
        <FooterTwitter />
      </div>
      <div className="text-center">
      <FooterCopyright />
      </div>
    </div>
  );
};

export default Footer;
