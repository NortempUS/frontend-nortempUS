import Image from "next/image"
import Link from "next/link"

export default function LoginForm() {
  return (
    <div className='lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2 border-2 border-black'>
      <h1 className='text-2xl font-semibold mb-4'>Iniciar Sesión</h1>
      <form action='#' method='POST'>
        <div className='mb-4'>
          <label htmlFor='username' className='block text-gray-600'>
            Usuario
          </label>
          <input
            type='text'
            id='username'
            name='username'
            className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
            autoComplete='off'
            placeholder='Usuario'
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
            className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
            autoComplete='off'
            placeholder='Contraseña'
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full'
        >
          Iniciar Sesión
        </button>
      </form>
      <div className='mt-6 text-blue-500 text-center'>
        <Link href='#' className='hover:underline'>
          Registrarse
        </Link>
      </div>
    </div>
  )
}
