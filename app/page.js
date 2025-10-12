import Image from "next/image";
import Maincontent from "./_components/Maincontent";
import Aboutme from "./_components/Aboutme";
import Contactme from "./_components/Contactme";
export default function Home() {
  return (
    <div className="text-white">
      <Maincontent />
      <Aboutme />
      <Contactme />
    </div>
  );
}
