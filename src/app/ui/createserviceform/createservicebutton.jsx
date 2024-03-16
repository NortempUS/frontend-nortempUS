import Link from "next/link";

export default function CreateServiceButton() {
  return (
    <div className="flex justify-end items-center">
      <Link
        href="/main/services/create-service"
        className="flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-md content lg:w-[300px] text-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-plus"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
        Crear Servicio
      </Link>
    </div>
  );
}
