import React, { useEffect } from 'react'
import './App.scss'
import ListChats from './components/ListChats'
import MainChat from './components/MainChat'
import { RandomUser } from './interfaces/RandomUser.interface'

function App() {
  const [selectedChat, setSelectedChat] = React.useState<RandomUser | null>(null)

  useEffect(() => {
    console.log('selectedChat', selectedChat)
  }, [selectedChat])

  return (
    <div className="App bg-gray-900 h-screen text-white">
      <ListChats  
        setSelectedChat={setSelectedChat}
      />
      <MainChat 
        selectedChat={selectedChat}
      />
    </div>
  )
}

export default App
