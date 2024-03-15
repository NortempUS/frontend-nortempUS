import Link from "next/link";
import Image from "next/image";

export default function LoginForm() {
  return (
    <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <div className="flex flex-col gap-3 items-center justify-center h-full w-full">
        <Image
          src="/black_logo.png"
          alt="Black Logo"
          width={200}
          height={300}
          className="lg:hidden"
        ></Image>
        <p className="lg:hidden mb-20 text-gray-600">
          "Hoy por ti, mañana por mi"
        </p>
      </div>
      <h1 className="text-2xl font-semibold mb-4">Iniciar Sesión</h1>
      <div action="#" method="POST">
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
          <label htmlFor="password" className="block text-gray-600">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
            placeholder="Contraseña"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
        >
          Iniciar Sesión
        </button>
      </div>
      <div className="mt-6 text-blue-500 text-center">
        <Link href="/register" className="hover:underline">
          Registrarse
        </Link>
      </div>
    </div>
  );
}
