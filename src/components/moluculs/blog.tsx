import React from "react";
import Title from "../atoms/share/title";
import BlogDate from "../atoms/blog/blogDate";
import BlogCategory from "../atoms/blog/blogCategory";
import ContentImage from "../atoms/share/contentImage";
import BlogText from "../atoms/blog/blogText";
import Readmore from "../atoms/share/readmore";
import { StaticImageData } from "next/image";


type Props = {
    src: StaticImageData
}
const Blog = (props: Props) => {
  return (
    <div className="mb-[105px]">
      <Title
        title="タイトルテキストテキストテキストテキストテキスト"
        size={24}
      />
      <div className="flex">
        <BlogDate date="2020/01/01" />
        <div className="ml-[10px]">
            <BlogCategory category="カテゴリ1" />
        </div>
      </div>
      <ContentImage src={props.src} w_num={760} h_num={427} />
      <div className="w-[684px] mx-auto mt-[15px]">
        <BlogText text="
        本文テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト" 
        />
      </div>
      <div className="flex justify-center mt-[30px]">
        <Readmore href="sss" />
      </div>
    </div>
  );
};

export default Blog;
