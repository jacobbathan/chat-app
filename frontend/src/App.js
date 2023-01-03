import React, {useState, useEffect} from "react"
import Header from "./components/header/Header";
import ChatHistory from "./components/chat-history/ChatHistory";
import './App.css';
import { connect, sendMsg } from "./api";

function App() {
  const [chatHistory, setChatHistory] = useState([])

  useEffect(() => {
    connect(msg => {
      setChatHistory(prevState => {
        console.log("msg in setchathistory", msg)
        const hist = [...prevState]
        hist.push(msg)
        return hist;
      })
    })

  }, [])

  const send = () => {
    console.log("Hello")
    sendMsg("hell0")
  }

  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory}/>
      <button type="button" onClick={send}>Hit</button>
    </div>
  );
}

export default App;
