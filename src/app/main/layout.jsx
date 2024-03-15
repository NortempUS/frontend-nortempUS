import SideNav from "../ui/sidenav/sidenav";
import TopBar from "../ui/topbar/topbar";

export default function Layout({ children }) {
  return (
    <div className="flex w-full flex-col md:flex-row">
      <SideNav />
      <div className="md:mr-2 w-full">
        <TopBar />
        <div className="px-4 md:px-0 w-full">{children}</div>
      </div>
    </div>
  );
}
