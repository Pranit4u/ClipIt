import React from 'react'
import { ClipListItem } from './Utils'

interface ClipboardListInterface {
  clips: Array<string>
}

const ClipboardList: React.FC<ClipboardListInterface>  = ({clips}) => {
  return (
    <div className='cliplist' id='scrollbar2'>
        {clips.map((item, ind) => (
            <ClipListItem key={ind} title={item} />
        ))}
    </div>
  )
}

export default ClipboardList