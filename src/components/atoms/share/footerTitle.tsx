import React from 'react'


type Props = {
    title: string
}
const FooterTitle = (props: Props) => {
  return (
    <h2 className="text-[16px]">{props.title}</h2>
  )
}

export default FooterTitle