'use client'
import { useRef, useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Output = ({hidden, sequence}) => {
    const textAreaRef = useRef(null);
    const containerRef = useRef(null)
    const [val, setVal] = useState("");
    const handleChange = (e) => {
      setVal(e.target.value);
    }
    
    useEffect(() => {
      const newHeight = textAreaRef.current.style.height
      containerRef.current.style.height = newHeight
      containerRef.current.scrollTop = containerRef.current.height
     
    }, [val])
  


    return (
      <div className={`${hidden? 'hidden': ''}`}>
        <h1 className='ml-2 text-white'>Assistente de Carreiras</h1>
        <div ref={containerRef} className={` text-neutral-200 p-3 w-[30rem] min-h-16 border-none  flex flex-col space-y-2 bg-input-field-color rounded-lg`}>
          <TypeAnimation 
            sequence={sequence}
            className=' break-words'
            speed={80}
            cursor={false}
            value={val}
            ref={textAreaRef}
            onChange={handleChange}
          />
          
        </div>
       
       </div>
    );
 
}

export default Output