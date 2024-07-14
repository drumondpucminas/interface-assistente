'use client'
import React from "react";
import { useState, useEffect, useRef } from "react";

import Input from "./components/Input";
import Interaction from "./components/Interaction";
export default function Home() {
  const [isHidden, setIsHidden] = useState(false)
  const [interactions, setInteractions] = useState([])

  

  async function handleMessage(data) {
    try {
      let contextWindow = JSON.parse(localStorage.getItem("context-window"))

      const chat_history = [
        { content: data, type: "human" } 
    ];
      
      if (!contextWindow) {
        localStorage.setItem("context-window", JSON.stringify(chat_history))
        contextWindow = JSON.parse(localStorage.getItem("context-window"))
      }
      
      
      const response = await fetch("http://127.0.0.1:8000/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userInput: data, history: contextWindow }),
      });
      const answer = await response.json()
      console.log(answer)

      
      const newInteraction = <Interaction isOutputHidden={isHidden} userMessage={data} answer={answer} />
      setInteractions(prevInteractions => [...prevInteractions, newInteraction]);

      contextWindow.push({content: answer, type: "ai"})
      localStorage.setItem("context-window", JSON.stringify(contextWindow))
      
    } catch (error) {
      
    }
    

  }
  

  return (
    <div className="min-h-screen p-3 w-full flex flex-col items-center">
      <div id="chat" className=" flex flex-col  p-5  w-full min-h-[33rem] overflow-y-auto max-h-80  ">
      {interactions.map((element, index) => (
          <div className="" key={index}>{element}</div>
        ))}

      </div>

      <div className=" p-4 w-full h-fit flex justify-center items-center ">
        <Input sendData={handleMessage} />
      </div>


    </div>
  );
}
