import { createContext, useContext } from "react";
import io, { Socket } from 'socket.io-client'



const socket = io('http://localhost:3000')




const SocketContext = createContext({ socket })

function SocketProvider(props:any){
  return (
    <SocketContext.Provider value={{socket}}>
      {props.children}
    </SocketContext.Provider>
  )
}


export const useSocket = () => useContext(SocketContext)



export default SocketProvider;