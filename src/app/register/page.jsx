import Image from "next/image";
import RegisterForm from "../ui/registerform/registerform";
export default function Page() {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <div className="flex flex-col gap-20 items-center justify-center h-full w-full">
          <Image
            src="/black_logo.png"
            alt="Black Logo"
            width={500}
            height={300}
          ></Image>
          <p className="text-2xl text-gray-600">"Hoy por ti, mañana por mi"</p>
        </div>
      </div>
      <RegisterForm />
    </div>
  );
}
