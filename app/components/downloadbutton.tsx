import React from 'react'
import { IoMdDownload } from "react-icons/io";

interface MyComponentProps {
  downloadbutton: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ downloadbutton }) => {
  return (
    <div>
    {/* Download Schedule */}
    <button><a 
    className="flex place-content-center items-center text-white px-4 py-2 bg-footerpink rounded-full gap-1"
    href="/schedule.pdf" download>
      Download Schedule{" "}<IoMdDownload className='place-items-center'/>
    </a>
    </button>
    </div>
  );
};

export default MyComponent;



// Paste this code
{/* 
import MyComponent from "../components/downloadbutton"

<div className="flex place-content-center rounded-full">
<MyComponent downloadbutton='download' />
</div>
 */}
