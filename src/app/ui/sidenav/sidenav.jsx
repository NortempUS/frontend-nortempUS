import Link from "next/link"
import NavLinks from "./navlinks"
import Image from "next/image"

export default function SideNav() {
  return (
    <div className='fixed flex h-full flex-col px-3 py-4 md:px-2'>
      <div className='mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-20'>
        <Link className='w-full text-white md:w-40' href='/'>
          Task4Task
        </Link>
        <Image
          alt='profile'
          src='/default_profile.png'
          className='md:hidden'
          width={40}
          height={40}
        />
      </div>
      <div className='flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
        <NavLinks />
        <div className='hidden h-auto w-full grow rounded-md bg-gray-50 md:block'></div>
        <form>
          <button className='flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'>
            <div className='hidden md:block'>Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  )
}
