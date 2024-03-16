"use client"
import InputChat from "@/app/ui/chat/inputchat"
import React, { useState, useEffect } from "react"
import Message from "@/app/ui/chat/message"

export default function Chat({ params }) {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [user2, setUser2] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token")
        const response = await fetch(
          `http://127.0.0.1:8000/chat/chat/${params.id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
          }
        )
        const data = await response.json()
        setMessages(data)
      } catch (error) {
        console.error("Error:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const user1 = localStorage.getItem("user_id")
    const user_2 = messages.filter(message => message.user != user1).at(0)?.user
    const fetchUser = async user_2 => {
      const response = await fetch(`http://localhost:8000/user/${user_2}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })

      const data_user = await response.json()

      setUser2(data_user)
    }
    fetchUser(user_2)
  }, [messages])

  return (
    <div className='relative bg-white rounded-md w-full'>
      <div className='sticky bg-white top-[11rem] md:top-28 left-0 rounded-md'>
        <div className='flex items-center justify-start gap-3'>
          <img
            src={user2?.avatar ?? "/default_profile.png"}
            alt='image'
            className='rounded-full h-[100px] w-[100px] object-cover p-5'
          />
          <h1 className='text-xl'>{user2?.username}</h1>
        </div>
        <InputChat chat_id={params.id} />
        <hr className='mx-4'></hr>
      </div>
      {isLoading ? (
        <div className='p-5'>Cargando...</div>
      ) : (
        messages.map((data, index) => <Message key={index} message={data} />)
      )}
    </div>
  )
}
