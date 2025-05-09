import {
  Home,
  CarFront,
  UserRound,
  Mails,
  CalendarDays,
  Settings,
  LogOut,
} from "lucide-react";

export default function SideNavigation() {
  return (
    <div className="hidden lg:block min-w-14 flex flex-col gap-40 justify-center align-center min-h-[100vh]  p-2 bg-[var(--dark-orange)] fixed w-10">
      <ul className="flex flex-col gap-8 mt-10 text-white cursor-pointer p-2">
        <li className="text-xl font-semibold">GR</li>
        <li className="hover:bg-white hover:text-black rounded-sm">
          <Home size={22} />
        </li>
        <li className="hover:bg-white hover:text-black rounded-sm">
          <Mails size={22} />
        </li>
        <li className="hover:bg-white hover:text-black rounded-sm">
          <CarFront size={22} />
        </li>
        <li className="hover:bg-white hover:text-black rounded-sm">
          <UserRound size={22} />
        </li>
        <li className="hover:bg-white hover:text-black rounded-sm">
          <CalendarDays size={22} />
        </li>
        <li className="hover:bg-white hover:text-black rounded-sm">
          <Settings size={22} />
        </li>
      </ul>
      <ul className="text-white cursor-pointer mt-12 p-2 hover:bg-white hover:text-black rounded-md">
        <li>
          <LogOut size={22} />
        </li>
      </ul>
    </div>
  );
}
