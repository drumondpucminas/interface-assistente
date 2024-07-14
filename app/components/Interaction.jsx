'use client'
import React, { useState } from 'react'
import Output from "./Output";
import Prompt from "./Prompt";

const Interaction = ({userMessage, answer, isOutputHidden}) => {
  
  return (
    <div className=" flex flex-col p-5  w-full h-auto  ">

        <div className=" p-2  w-full min-h-10 flex justify-end ">
          <Prompt promptText={userMessage}/>
        </div>
        <div className=" w-full min-h-20 p-2">
          <Output hidden={isOutputHidden} sequence={[`${answer}`]} />
        </div>  

    </div>
  )
}

export default Interaction