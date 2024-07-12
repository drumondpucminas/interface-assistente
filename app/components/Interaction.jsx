'use client'
import React, { useState } from 'react'
import Output from "./Output";
import Prompt from "./Prompt";

const Interaction = ({userMessage, answer}) => {
  const [message, setMessage] = useState(null)
  function handleInput(data) {
        setMessage(data)
  }
  return (
    <div className=" flex flex-col p-5  w-full h-auto overflow-y-auto max-h-80 bg-red-600 ">

        <div className=" p-2  w-full min-h-10 flex justify-end ">
          <Prompt promptText={userMessage}/>
        </div>
        <div className=" w-full min-h-20 p-2">
          <Output hidden={false} sequence={[`${answer}`]} />
        </div>  

    </div>
  )
}

export default Interaction