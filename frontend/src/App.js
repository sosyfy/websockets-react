import { useEffect, useState } from "react"
import io from "socket.io-client"
const socket = io.connect("http://localhost:3001") 

function App() {
  const [message , setMessage] = useState("")
  const [message2 , setMessage2] = useState("")
  const sendMessage = ()=>{ 
    socket.emit("send_message", {message: message}  )
  }

  useEffect(()=>{
     socket.on("recieve_message", (data)=>{
        // alert(data.message)
        setMessage2(data.message)
     }) 
  },[socket])

  return (
    <div className="App">
      <p>{message2}</p>
      <input type="text" onChange={e=>setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send message</button>
    </div>
  );
}

export default App;
