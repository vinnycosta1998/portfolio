import { Avatar } from "@/components/Avatar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="mt-12">
        <Avatar/>
      </div>
    </div>
  );
}
