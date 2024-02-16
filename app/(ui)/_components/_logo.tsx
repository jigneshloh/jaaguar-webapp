import Image from "next/image";

export default function JagguarLogo() {
  return (
    <div >
      <Image
        src="/favicon.ico"
        width={80}
        height={120}
        alt="Jaaguar Logo"
      ></Image>

    </div>
  );
}
