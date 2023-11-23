import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { useState } from "react";
import { Chat, Message } from "../models/Chat";

function ChatPage() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [isChatView, setIsChatView] = useState(false);

  function createChat() {
    let chat: Chat = {
      chatId: Math.floor(Math.random() * 12000),
      title: "Untitled Chat",
      messages: [],
    };

    setChats([...chats, chat]);
    setMessages(chat.messages);
    setIsChatView(false);
  }

  function sendMessage() {
    let message: Message = {
      sender: "user",
      content: currentMessage,
    };

    if (chats.length == 0) {
      createChat();
    }

    setMessages([...messages, message]);
    setIsChatView(true);
    setCurrentMessage("");
  }

  return (
    <div className="drawer min-h-[100svh] lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn drawer-button btn-ghost lg:hidden mr-auto mt-3 ml-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>

        {!isChatView && (
          <div className="my-auto animate-fade_fast">
            <img className="mx-auto mb-8 w-28" src={Logo} alt="logo" />
            <label className="text-2xl max-w-md text-white font-semibold">
              How can I help you today?
            </label>
          </div>
        )}

        <div className="w-full max-w-2xl my-10 px-5 absolute bottom-16">
          {messages.map((message, index) => (
            <div key={index} className="chat chat-end animate-fade_fast">
              <div className="chat-bubble text-white">{message.content}</div>
            </div>
          ))}
        </div>

        <div className="flex max-w-2xl w-full mt-auto lg:mb-8 mb-5">
          <select className="select select-bordered ml-5 text-white">
            <option>Text</option>
            <option>Image</option>
          </select>

          <input
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            placeholder="Ask me anything..."
            className="input input-bordered ml-2 mr-2 w-full"
          />

          <button
            onClick={sendMessage}
            className="btn mr-5 bg-dark-orange text-white p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu p-4 w-72 min-h-full bg-base-200 text-base-content">
          <li className="w-0">
            <Link className="text-white" to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Home
            </Link>
          </li>

          <li>
            <a className="text-white text-3xl font-medium mb-4 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-dark-orange"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
              Chats
            </a>
          </li>

          <li>
            <button
              onClick={createChat}
              className="border border-white border-opacity-30 mb-5 hover:text-dark-orange"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              New chat
            </button>
          </li>

          <li>
            <ul className="p-0 m-0 text-base">
              {chats.map((chat, index) => (
                <li key={index} className="animate-fade_fast">
                  <a>{chat.title}</a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ChatPage;
