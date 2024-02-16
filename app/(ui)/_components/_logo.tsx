import Image from "next/image";
import cpyLogo from "/logo.png";

export default function JagguarLogo() {
  
  return (
    <div>
      <Image
        alt="Jaaguar Logo"
        src={`${process.env.PUBLIC_URL}logo.png`}
        quality={100}
        sizes="100vw"
        width={80}
        height={120}
      ></Image>
    </div>
  );
}
