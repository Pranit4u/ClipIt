import React from 'react'
import { LuCopy } from "react-icons/lu";
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

interface TitleInterface {
    title: string;
}

const showSuccessToast = () => toast.success('Copied to clipboard', {
  duration: 1000,
  position: 'top-left'
});

const showErrorToast = () => toast.success('Something broke! Try Again.', {
  duration: 1000,
  position: 'top-left'
});

const copyToClipboard = (title: string) => {
  navigator.clipboard.writeText(title)
      .then(() => {
        showSuccessToast();
      })
      .catch(() => {
        showErrorToast();
      });
}

export const Title: React.FC<TitleInterface> = ({title}) => (
    <div className='title'>
        {title}
    </div>
  )

export const ClipListItem: React.FC<TitleInterface> = ({title}) => (
  <div className='row cliplist-item' onClick={() => copyToClipboard(title)}>
    <div>
      {title}
    </div>
    <LuCopy style={{flexShrink: 0}}/>
    <Toaster />
  </div>
)