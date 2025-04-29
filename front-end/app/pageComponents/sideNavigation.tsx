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
    <div className="hidden lg:block min-w-12 flex flex-col gap-40 min-h-[100vh]  p-2 bg-[var(--dark-blue)] fixed w-10">
      <ul className="flex flex-col gap-8 mt-10 text-white curor-pointer">
        <li className="text-xl font-semibold">GR</li>
        <li>
          <Home size={24} />
        </li>
        <li>
          <Mails size={24} />
        </li>
        <li>
          <CarFront size={24} />
        </li>
        <li>
          <UserRound size={24} />
        </li>
        <li>
          <CalendarDays size={24} />
        </li>
        <li>
          <Settings size={24} />
        </li>
      </ul>
      <ul className="text-white cursor-pointer">
        <li>
          <LogOut size={24} />
        </li>
      </ul>
    </div>
  );
}
