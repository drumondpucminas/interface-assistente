'use client'
import { useEffect, useRef, useState, useContext } from 'react'
import { BiMailSend } from "react-icons/bi";

const Input = () => {
  const textAreaRef = useRef(null);
  const [val, setVal] = useState(null);

  

  const handleChange = (e) => {
    setVal(e.target.value);
    
  }
  
  useEffect(() => {
    textAreaRef.current.style.height = "fit-content";
    if(textAreaRef.current.scrollHeight > 80) {
      textAreaRef.current.style.height =  "80px";
      var style = document.createElement('style');
      var css = `
      ::-webkit-scrollbar {
        width: 10px;
        border-radius: 15px;
      }

      ::-webkit-scrollbar-track {
        background: #3a3d4f;
        border-radius: 15px;
        

      }

      ::-webkit-scrollbar-thumb {
        width: 4px;
        background-color: #2e3147;
        border-radius: 15px;

      }
      ::-webkit-scrollbar-thumb:hover {
        cursor: default;
      }

      
      `;

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
      document.head.appendChild(style);
      
    } else {
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";

    }
  }, [val])

  return (
      <div className='text-neutral-200 bg-input-field-color p-2 w-[30rem] rounded-2xl flex items-end justify-between '>
        <textarea className='w-[28rem] p-1 bg-transparent resize-none active:outline-none focus:outline-none rounded' placeholder='Como posso ajudar?' value={val} onChange={handleChange}rows="1" ref={textAreaRef} ></textarea>
        <div>
           <BiMailSend opacity={0.5} size={35}/>

        </div>
      </div>
    
  );
}

export default Input