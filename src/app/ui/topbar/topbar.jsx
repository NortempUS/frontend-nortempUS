import Image from "next/image"

export default function TopBar() {
  return (
    <div className='fixed hidden top-4 mb-2 mr-2 rounded-md px-3 gap-3 items-center justify-end h-20 w-full bg-gray-50 md:flex z-10'>
      <h1 className='text-lg'>José Antonio</h1>
      <Image alt='profile' src='/default_profile.png' width={40} height={40} />
    </div>
  )
}
