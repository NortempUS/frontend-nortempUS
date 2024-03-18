"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async event => {
    event.preventDefault()

    const response = await fetch("aaaaaaaaaaaaa.pythonanywhere.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      credentials: "same-origin",
    })

    if (response.ok) {
      const responseLogin = await response.json()
      if (typeof window !== "undefined") {
        localStorage.setItem("token", responseLogin.token)
        localStorage.setItem("user", responseLogin.user.username)
        localStorage.setItem("user_id", responseLogin.user.id)
      }
      window.location.href = "/main/services"
    } else {
      console.error("Error al iniciar sesión")
    }
  }
  return (
    <div className='lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2'>
      <div className='flex flex-col gap-3 items-center justify-center h-full w-full'>
        <Image
          src='/black_logo.png'
          alt='Black Logo'
          width={200}
          height={300}
          className='lg:hidden'
        ></Image>
        <p className='lg:hidden mb-20 text-gray-600'>
          Hoy por ti, mañana por mi
        </p>
      </div>
      <h1 className='text-2xl font-semibold mb-4'>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='username' className='block text-gray-600'>
            Usuario
          </label>
          <input
            type='text'
            id='username'
            name='username'
            value={username}
            className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
            autoComplete='off'
            placeholder='Usuario'
            onChange={event => setUsername(event.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='password' className='block text-gray-600'>
            Contraseña
          </label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
            autoComplete='off'
            placeholder='Contraseña'
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full flex justify-center items-center gap-3'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            class='lucide lucide-plus'
          >
            <path d='M5 12h14' />
            <path d='M12 5v14' />
          </svg>
          Iniciar Sesión
        </button>
      </form>
      <div className='mt-6 text-blue-500 text-center'>
        <Link href='/register' className='hover:underline'>
          Registrarse
        </Link>
      </div>
    </div>
  )
}
