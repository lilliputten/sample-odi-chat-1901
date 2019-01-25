import React from 'react';
import { Message } from '../services/history';

export const ChatMessage = ({ username, text }: Message) => (
  <div>
    <b>{username}: </b>
    <span>{text}</span>
  </div>
)

export const ChatControlls = () => (
  <div className="message-box">
    <input placeholder="User" id="user-input" />
    <input placeholder="Message" id="message-input" />
    <button> Send </button>
  </div>
)

interface ChatProps {
  messages: Message[];
}

export const Chat = ({ messages }: ChatProps) => {
  const msgList = messages.map((msg, i) => (<ChatMessage key={i} {...msg}/>));
  return (
    <div className="chat">
      <div className="container">
        {msgList}
       </div>
      <ChatControlls />
    </div>
  );
}

