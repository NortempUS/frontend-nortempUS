"use client"
import { useState } from "react"

export default function CreateServiceForm() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = async event => {
    event.preventDefault()

    const response = await fetch("http://localhost:8000/create-service", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      credentials: "same-origin",
    })

    if (response.ok) {
      window.location.href = "/main/services"
    } else {
      console.error("Error al registrarse")
    }
  }

  return (
    <div className='flex justify-center items-center flex-col h-[52rem] bg-white rounded-md'>
      <h1 className='text-2xl font-semibold mb-4'>Crear Servicio</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='title' className='block text-gray-600'>
            Título
          </label>
          <input
            type='text'
            id='title'
            name='title'
            value={title}
            className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
            autoComplete='off'
            placeholder='Título'
            onChange={event => setTitle(event.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='description' className='block text-gray-600'>
            Descripción
          </label>
          <input
            type='text'
            id='description'
            name='description'
            value={description}
            className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
            autoComplete='off'
            placeholder='Descripción'
            onChange={event => setDescription(event.target.value)}
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full'
        >
          Crear Servicio
        </button>
      </form>
    </div>
  )
}
