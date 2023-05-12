import React from 'react'


type Props = {
    text: string
}
const FooterMenuList = (props: Props) => {
  return (
    <div className="border-t">
      <li className="text-[13px] ml-[30px] my-[20px]">{props.text}</li>
    </div>
  )
}

export default FooterMenuList