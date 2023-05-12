import React from "react";
import SidebarTitle from "../atoms/share/sidebarTitle";
import RankingContent from "../moluculs/rankingContent";
import Image1 from "../../../../public/img/ranking1.jpg";
import Image2 from "../../../../public/img/ranking2.jpg";
import Image3 from "../../../../public/img/ranking3.jpg";

const Ranking = () => {
  return (
    <div className="w-[351px] text-center">
      <div className="mb-[30px]">
        <SidebarTitle title="Ranking" />
      </div>
      <RankingContent src={Image1} />
      <RankingContent src={Image2} />
      <RankingContent src={Image3} />
    </div>
  );
};

export default Ranking;