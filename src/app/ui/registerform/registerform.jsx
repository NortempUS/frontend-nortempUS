import Image from "next/image";

export default function RegisterForm() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full p-8 lg:w-1/2 lg:p-32 md:p-52 overflow-y-auto">
      <div className="w-full">
        <h1 className="text-2xl font-semibold mb-4">Registrarse</h1>
        <form action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
              placeholder="Nombre"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="last_name" className="block text-gray-600">
              Apellidos
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
              placeholder="Apellidos"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone_number" className="block text-gray-600">
              Teléfono
            </label>
            <input
              type="tel"
              pattern="^[6-7][0-9]{8}"
              id="phone__number"
              name="phone_number"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
              placeholder="Telefono"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              Usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
              placeholder="Usuario"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="genre" className="block text-gray-600">
              Género
            </label>
            <input
              type="text"
              id="genre"
              name="genre"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
              placeholder="Género"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Contraseña
            </label>
            <input
              type="password"
              id="password1"
              name="password1"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
              placeholder="Contraseña"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password2" className="block text-gray-600">
              Confirmar contraseña
            </label>
            <input
              type="password"
              id="password2"
              name="password2"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
              placeholder="Confirmar contraseña"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}
