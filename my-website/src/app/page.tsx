import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-screen h-screen">
      <Image
        src="/room_1920x1080_Improved_labels.png"
        alt="Room with pipes"
        fill
        priority
        style={{ objectFit: "contain" }}
      />
    </main>
  );
}
