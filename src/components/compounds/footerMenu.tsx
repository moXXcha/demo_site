import React from 'react'
import Title from '../atoms/share/title'
import FooterMenuList from '../atoms/footerMenu/footerMenuList'

const FooterMenu = () => {
  return (
    <div className="w-[335px]">
        <div className="mb-[40px]">
            <Title title="Menu" size={16} />
        </div>
        <ul className="border-b">
            <FooterMenuList text="ABOUT" />
            <FooterMenuList text="COLUMN" />
            <FooterMenuList text="CATEGORY" />
            <FooterMenuList text="SEREIS" />

        </ul>
    </div>
  )
}

export default FooterMenu