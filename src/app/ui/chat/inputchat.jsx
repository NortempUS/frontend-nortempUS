"use client"
import { useState } from "react"

export default function InputChat({ chat_id }) {
  const user_id = localStorage.getItem("user_id")
  const [message, setMessage] = useState("")
  const handleSubmit = async e => {
    e.preventDefault()
    const response = await fetch(
      `http://localhost:8000/chat/chat/${chat_id}/create/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          message: message,
          chat: chat_id,
          user: user_id,
        }),
      }
    )
    if (response.ok) {
      setMessage("")
      window.location.reload()
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='flex items-center justify-content gap-3 p-3 bg-white rounded-md'
    >
      <input
        id='message'
        placeholder='Escriba su mensaje'
        value={message}
        className='rounded-full w-full border-2 px-2 py-1'
        onChange={e => setMessage(e.target.value)}
      ></input>
      <input
        type='submit'
        value='Enviar'
        className='px-2 py-2 bg-green-500 rounded-md text-white hover:bg-green-600 cursor-pointer'
      />
    </form>
  )
}
