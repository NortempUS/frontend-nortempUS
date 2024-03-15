import Card from "../../ui/card/card";
import Link from "next/link";
export default function Page() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-end items-center">
        <Link
          href="/"
          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-md content lg:w-[300px] text-center"
        >
          Crear Servicio
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
