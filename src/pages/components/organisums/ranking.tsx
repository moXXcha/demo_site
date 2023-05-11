import React from "react";
import SidebarTitle from "../atoms/share/sidebarTitle";
import RankingContent from "../moluculs/rankingContent";
import Image from "../../../../public/img/ranking1.jpg";

const Ranking = () => {
  return (
    <div className="w-[351px] text-center">
      <div className="mb-[30px]">
        <SidebarTitle title="Ranking" />
      </div>
      <RankingContent src={Image} />
      <RankingContent src={Image} />
      <RankingContent src={Image} />
    </div>
  );
};

export default Ranking;