import React from "react";
import ContentImage from "../atoms/share/contentImage";
import { StaticImageData } from "next/image";
import Title from "../atoms/share/title";
import Readmore from "../atoms/share/readmore";

type Props = {
  src: StaticImageData;
};
const UpperContent = (props: Props) => {
  return (
    <div>
      <ContentImage src={props.src} w_num={370} h_num={208} />
      <div className="mt-[20px]">
        <Title title="タイトルテキストテキストテキストテキストテキストテキストテキスト" size={18}/>
      </div>
      <div className="text-center">
        <Readmore href="hoge"/>
      </div>
    </div>
  );
};

export default UpperContent;
