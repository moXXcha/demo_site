import React from 'react'
import SidebarTitle from '../atoms/share/sidebarTitle'
import ArchiveContent from '../moluculs/archiveContent'

const Archive = () => {
  return (
    <div className="border-b w-[350px]">
        <div className="mb-[30px] text-center">
            <SidebarTitle title="Archive" />
        </div>
        <ArchiveContent />
        <ArchiveContent />
        <ArchiveContent />
        <ArchiveContent />
        <ArchiveContent />
        <ArchiveContent />
        <ArchiveContent />
        <ArchiveContent />
        <ArchiveContent />
        <ArchiveContent />
    </div>
  )
}

export default Archive