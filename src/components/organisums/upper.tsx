import React from "react";
import UpperContent from "../moluculs/upperContent";
import Image1 from "../../../public/img/pickup1.jpg";
import Image2 from "../../../public/img/pickup2.jpg";
import Image3 from "../../../public/img/pickup3.jpg";

const Upper = () => {
  return (
    <div className="flex justify-between w-[1170px] ">
      <UpperContent src={Image1} />
      <UpperContent src={Image2} />
      <UpperContent src={Image3} />
    </div>
  );
};

export default Upper;
