import React from 'react'
import ContentImage from '../atoms/share/contentImage'
import { StaticImageData } from 'next/image'
import Title from '../atoms/share/title'
import Readmore from '../atoms/share/readmore'


type Props = {
    src: StaticImageData
}
const RankingContent = (props: Props) => {
  return (
    <div className="mb-[50px]">
        <ContentImage src={props.src} w_num={350} h_num={242} />
        <div className="fill text-left">
            <Title size={350} title="タイトルテキストテキストテキストテキストテキストテキスト" />
        </div>
        <div className="text-center">
            <Readmore href="aaa" />
        </div>
    </div>
  )
}

export default RankingContent