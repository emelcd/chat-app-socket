import React from "react";
import { useSocket } from "../context/socket.context";
import { RandomUser } from "../interfaces/RandomUser.interface";

function MainChat(
  props: {
    selectedChat: RandomUser | null;
  }
) {
  const {socket } = useSocket();
  const [message, setMessage] = React.useState("");
  const ref = React.useRef<HTMLInputElement>(null);
  
  ref.current?.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      socket.emit("send-message", {
        message: message,
        chatId: props.selectedChat?.id,
      });
      setMessage("");
    }
  }, { once: true });

  return (
    <div className="h-full relative">
      <header className="border-b-2 p-4 flex flex-row gap-5 rounded">
        <picture>
          <img
            className="rounded-full w-12 h-12"
            src={props.selectedChat?.picture.large}
            alt="avatar"
          />
        </picture>
        <section className="flex flex-col">
          <h1 className="text-xl font-bold">
            {props.selectedChat?.name.first} {props.selectedChat?.name.last}
          </h1>
          <p className="text-sm ">
            <span className="text-teal-500 p-2">Connected</span>
          </p>
        </section>
      </header>
      <main className="">
        <div
          className="overflow-scroll h-5/6 p-4 bg-gray-900  rounded"
          style={{
            height: "calc(90vh - 64px)",
            width: "100%",
          }}
        >
          <article></article>
        </div>
        <div className=" absolute bottom-0 w-full p-2">
          <input
            className="  bg-gray-800 h-10 mb-4 rounded w-full p-2 h-16"
            name="chat-msg"
            id="chat-msg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            ref={ref}
          />
        </div>
      </main>
    </div>
  );
}

export default MainChat;
