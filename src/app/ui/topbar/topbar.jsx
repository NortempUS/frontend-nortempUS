"use client";
import Image from "next/image";

export default function TopBar() {
  const user = localStorage.getItem("user");
  return (
    <div className="hidden bg-gray-200 sticky top-0 left-0 z-10 pt-4 pb-2 md:block">
      <div className="mr-2 rounded-md px-3 gap-3 items-center justify-end h-20 w-full bg-gray-50 md:flex">
        <h1 className="text-lg">{user ? user : null}</h1>
        <Image
          alt="profile"
          src="/default_profile.png"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
}
