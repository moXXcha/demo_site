import React from 'react'
import HeaderTitle from '../atoms/header/headerTitle'
import NavLists from '../moluculs/navLists'

const Header = () => {
  return (
    <header className="h-[130px] w-full">
        <div className="h-[90px] flex">
            <HeaderTitle />
        </div>
        <NavLists />
    </header>
  )
}

export default Header