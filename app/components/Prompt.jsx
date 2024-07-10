'use client'
import { useRef, useState, useEffect } from 'react';

const Prompt = () => {
  const textAreaRef = useRef(null);
  const containerRef = useRef(null)
  const [val, setVal] = useState("");
  

  function handleChange() {
    setVal(textAreaRef.current.value)
  }
  
  
  


    return (
        <div ref={containerRef} className={`  text-neutral-200 p-2 min-h-20 w-[30rem] rounded flex flex-col space-y-2`}>
            <p className='inline-block break-words p-3 bg-input-field-color active:outline-none resize-none focus:outline-none rounded-2xl'onChange={handleChange} rows={1} ref={textAreaRef}>Este é um placeholder qualquer que simula uma mensagem escrita pelo usuário</p>
        </div>
      
    );
  
}

export default Prompt