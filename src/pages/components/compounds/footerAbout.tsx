import React from 'react'
import Title from '../atoms/share/title'
import FooterAboutText from '../atoms/footerAbout/footerAboutText'
import FooterAboutLink from '../atoms/footerAbout/footerAboutLink'

const FooterAbout = () => {
  return (
    <div className="w-[345px]">
        <div className="mb-[45px]">
            <Title title="About" size={16} />
        </div>
        <div className="mb-[45px]">
            <FooterAboutText />
        </div>
        <ul>
            <FooterAboutLink href="aa" text="プロフィールの詳細" />
            <FooterAboutLink href="aa" text="お仕事の依頼" />
            <FooterAboutLink href="aa" text="お問い合わせ" />
        </ul>
    </div>
  )
}

export default FooterAbout