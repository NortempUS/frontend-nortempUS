"use client"
import { useState } from "react"

export default function RegisterForm() {
  const [name, setName] = useState("")
  const [last_name, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("")
  const [age, setAge] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async event => {
    event.preventDefault()

    const response = await fetch(
      "http://aaaaaaaaaaaaa.pythonanywhere.com//register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: name,
          last_name: last_name,
          phone: phone,
          username: username,
          email: email,
          gender: gender,
          age: age,
          password: password,
        }),
        credentials: "same-origin",
      }
    )

    if (response.ok) {
      window.location.href = "/"
    } else {
      console.error("Error al registrarse")
    }
  }

  return (
    <div className='flex flex-col md:flex-row flex-wrap justify-center items-center w-full h-full p-8 lg:w-1/2 lg:p-32 md:p-52 overflow-y-auto'>
      <div className='w-full'>
        <h1 className='text-2xl font-semibold mb-4'>Registrarse</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-gray-600'>
              Nombre
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
              autoComplete='off'
              placeholder='Nombre'
              onChange={event => setName(event.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='last_name' className='block text-gray-600'>
              Apellidos
            </label>
            <input
              type='text'
              id='last_name'
              name='last_name'
              value={last_name}
              className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
              autoComplete='off'
              placeholder='Apellidos'
              onChange={event => setLastName(event.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='phone' className='block text-gray-600'>
              Teléfono
            </label>
            <input
              type='tel'
              pattern='^[6-7][0-9]{8}'
              id='phone'
              name='phone'
              value={phone}
              className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
              autoComplete='off'
              placeholder='Telefono'
              onChange={event => setPhone(event.target.value)}
              required
            />
          </div>
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
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-600'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
              autoComplete='off'
              placeholder='Email'
              onChange={event => setEmail(event.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='gender' className='block text-gray-600'>
              Género
            </label>
            <input
              type='text'
              id='gender'
              name='gender'
              value={gender}
              className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
              autoComplete='off'
              placeholder='Género'
              onChange={event => setGender(event.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='age' className='block text-gray-600'>
              Edad
            </label>
            <input
              type='number'
              min={16}
              id='age'
              name='age'
              value={age}
              className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
              autoComplete='off'
              placeholder='Edad'
              onChange={event => setAge(event.target.value)}
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
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password2' className='block text-gray-600'>
              Confirmar contraseña
            </label>
            <input
              type='password'
              id='password2'
              name='password2'
              className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
              autoComplete='off'
              placeholder='Confirmar contraseña'
            />
          </div>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full'
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  )
}
