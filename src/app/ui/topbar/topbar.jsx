import Image from "next/image";

export default function TopBar() {
  return (
    <div className="hidden my-4 mr-2 rounded-md px-3 gap-3 items-center justify-end h-20 w-full bg-gray-50 md:flex">
      <h1 className="text-lg">José Antonio</h1>
      <Image alt="profile" src="/default_profile.png" width={40} height={40} />
    </div>
  );
}
