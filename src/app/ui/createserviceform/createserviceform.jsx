export default function CreateServiceForm() {
  return (
    <div className="flex justify-center items-center flex-col h-[52rem] bg-white rounded-md">
      <h1 className="text-2xl font-semibold mb-4">Crear Servicio</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-600">
            Título
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
            placeholder="Título"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-600">
            Categoría
          </label>
          <input
            type="text"
            id="category"
            name="category"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
            placeholder="Categoría"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-600">
            Descripción
          </label>
          <input
            type="text"
            id="description"
            name="description"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
            placeholder="Descripción"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
        >
          Crear Servicio
        </button>
      </form>
    </div>
  );
}
