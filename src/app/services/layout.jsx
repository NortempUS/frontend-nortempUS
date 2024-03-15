import SideNav from "../ui/sidenav/sidenav";
import TopBar from "../ui/topbar/topbar";

export default function Layout({ children }) {
  return (
    <div className="flex w-full flex-col md:flex-row">
      <SideNav />
      <div className="md:mr-2">
        <TopBar />
        <div className="mx-4 md:m-0">{children}</div>
      </div>
    </div>
  );
}
