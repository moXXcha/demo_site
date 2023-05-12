import React from 'react'
import ArchiveDate from '../atoms/archive/archiveDate'
import ArchiveText from '../atoms/archive/archiveText'

const ArchiveContent = () => {
  return (
    <div className="border-t">
        <div className="my-[20px] flex">
            <div className="mx-[35px]">
                <ArchiveDate date="XXXX年XX月(XX)"/>
            </div>
            <div className="mx-[35px]">
                <ArchiveText text="XXXXXXXXX" />
            </div>
        </div>
    </div>
  )
}

export default ArchiveContent