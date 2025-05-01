import Image from "next/image";
import HomePage from "./pageComponents/pages/homePage";
export default function Home() {
  return (
    <div className="p-2 min-h-[100vh] overflow-y-auto overflow-x-hidden">
      <HomePage />
    </div>
  );
}
