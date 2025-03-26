import React, { useEffect, useRef, useState} from 'react'
import { io } from "socket.io-client"
import { baseUrl } from './constants';
const socket = io(baseUrl);


const chat = () => {
    const messageRef = useRef("")
    const [messages, setMessages] = useState([])
    useEffect(() => {
     socket.on("SEND_MESSAGE", (message)=>{
        setMessages((messages) => [...messages, message])
     })
    }, [])
    
    const sendMessage = () => {
        socket.emit("SEND_MESSAGE", messageRef.current.value);
    }
    
  return (
    <div>
          <div
    style={{
        display: "flex",
        flexDirection: "column",

        gap:"1rem",
        maxWidth: "40rem"
    }}
    >
        <input ref={messageRef} />
        <button onClick={sendMessage} >send message</button>

    </div>
    <div style={{width: "100%", maxWidth: "40rem"}}>
        {messages.map((message, i) => (
            <div key={"message" + i}>
                {message}
            </div>
            
        ))}

    </div>
    </div>
  )
}

export default chat