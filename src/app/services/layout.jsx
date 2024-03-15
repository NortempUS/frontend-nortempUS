import SideNav from "../ui/sidenav/sidenav"
import TopBar from "../ui/topbar/topbar"

export default function Layout({ children }) {
  return (
    <div className='flex h-screen flex-col md:flex-row'>
      <div className='w-full flex-none md:w-64'>
        <SideNav />
      </div>
      <div className='w-full mr-2'>
        <TopBar />
        <div className='m-2 lg:m-0'>{children}</div>
      </div>
    </div>
  )
}
