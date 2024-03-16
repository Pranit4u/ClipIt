import React, { useEffect, useState } from 'react'
import { Title } from './Utils'
import TextInput from './TextInput'
import ClipList from './ClipList'

const Clipboard: React.FC = () => {
  const [clips, setClips] = useState<string[]>([])
  
  useEffect(() => {
    const storedClips = localStorage.getItem('copied_clips');
    console.log(storedClips)
    if (storedClips) {
      setClips(prevClips => JSON.parse(storedClips));
    }
  }, []);

  return (
    <div className='clipboard'>
      <Title title={'Clips'} />
      <ClipList clips={clips}/>
      <TextInput setClips={setClips}/>
    </div>
  )
}

export default Clipboard