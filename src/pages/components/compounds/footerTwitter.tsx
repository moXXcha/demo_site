import React from 'react'
import Title from '../atoms/share/title'
import FooterTwitterContent from '../atoms/footerTwitter/footerTwitterContent'

const FooterTwitter = () => {
  return (
    <div>
        <div className="mb-[35px]">
            <Title title="Twitter" size={16} />
        </div>
        <FooterTwitterContent />
    </div>
  )
}

export default FooterTwitter