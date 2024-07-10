'use client'
import { useState, useEffect } from "react";
import Output from "./components/Output";
import Prompt from "./components/Prompt";
import Input from "./components/Input";
export default function Home() {
  const [isHidden, setIsHidden] = useState(true)
  

  return (
    <div className="min-h-screen p-3 w-full flex flex-col items-center">
      <div className=" flex flex-col p-5  w-full min-h-[33rem] overflow-y-auto max-h-80  ">

        <div className=" p-4  w-full min-h-[10rem] flex justify-end ">
          <Prompt />
        </div>
        <div className=" w-full min-h-20 p-4">
          <Output hidden={isHidden} sequence={[""]} />
        </div>  

      </div>

      <div className=" p-4 w-full h-fit flex justify-center items-center ">
        <Input />
      </div>


    </div>
  );
}
