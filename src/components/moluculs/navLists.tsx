import React from 'react'
import NavList from '../atoms/header/navList'

const NavLists = () => {
  return (
    <div className="w-full bg-white h-[40px] flex">
      <ul className="flex ml-[104px] justify-between w-[450px] items-center">
        <NavList text="New" />
        <NavList text="COLUMN" />
        <NavList text="SEREIS" />
        <NavList text="Q&A" />
        <NavList text="CONTACT" />
      </ul>
    </div>
  )
}

export default NavLists