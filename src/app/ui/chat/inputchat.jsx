export default function InputChat({}) {
  return (
    <form className="flex items-center justify-content gap-3 p-3 bg-white rounded-md">
      <input
        id="message"
        placeholder="Escriba su mensaje"
        className="rounded-full w-full border-2 px-2 py-1"
      ></input>
      <input
        type="submit"
        value="Enviar"
        className="px-2 py-2 bg-green-500 rounded-md text-white hover:bg-green-600 cursor-pointer"
      ></input>
    </form>
  );
}
