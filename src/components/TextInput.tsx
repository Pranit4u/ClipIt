import { Input, InputDomRef, Ui5CustomEvent } from '@ui5/webcomponents-react'
import { useState } from 'react'
import { TiPinOutline } from "react-icons/ti";

interface TextInputInterface {
  setClips: React.Dispatch<React.SetStateAction<string[]>>;
}

const TextInput: React.FC<TextInputInterface> = ({setClips}) => {
  const [clipText, setClipText] = useState<string>("");

  const handleInputChange = (event: Ui5CustomEvent<InputDomRef, never>) => {
    setClipText(event.target.value);
  };

  const addItemToClips = () => {
    if (clipText) {
      setClips(prevClips => {
        localStorage.setItem('copied_clips', JSON.stringify([...prevClips, clipText]));
        return [...prevClips, clipText];
      });
      setClipText("");
    }
  }

  return (
    <div className='row'>
      <Input
        value={clipText}
        onInput={handleInputChange}
        placeholder='Type text to pin'
        className='text-input'
      />
      <TiPinOutline size={'20px'} className='icon' onClick={addItemToClips}/>
    </div>
    
  )
}

export default TextInput