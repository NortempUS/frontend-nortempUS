import Link from "next/link";
import NavLinks from "./navlinks";
import Image from "next/image";

export default function SideNav() {
  return (
    <div className="sticky z-10 top-0 left-0 md:h-screen px-4 py-4 md:px-2 bg-gray-200">
      <div className="w-full md:w-64 md:h-full flex flex-col">
        <div className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-20">
          <Link className="w-full text-white md:w-40" href="/">
            Task4Task
          </Link>
          <Image
            alt="profile"
            src="/default_profile.png"
            className="md:hidden"
            width={40}
            height={40}
          />
        </div>
        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <NavLinks />
          <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
          <form>
            <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
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
                class="lucide lucide-log-out"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" x2="9" y1="12" y2="12" />
              </svg>
              <div className="hidden md:block">Sign Out</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
