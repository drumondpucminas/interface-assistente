'use client'
import { useState, useEffect } from "react";

import Input from "./components/Input";
import Interaction from "./components/Interaction";
export default function Home() {
  const [isHidden, setIsHidden] = useState(true)
  const [inputData, setInputData] = useState('')

  function handleMessage(data) {
    setInputData(data)
  }
  

  return (
    <div className="min-h-screen p-3 w-full flex flex-col items-center">
      <div className=" flex flex-col p-5  w-full min-h-[33rem] overflow-y-auto max-h-80 bg-blue-600 ">
            <Interaction userMessage={inputData} answer={"This is a sample AI answer This is a sample AI answer This is a sample AI answer"} /> 
        

      </div>

      <div className=" p-4 w-full h-fit flex justify-center items-center ">
        <Input sendData={handleMessage} />
      </div>


    </div>
  );
}
