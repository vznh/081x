"use client";
import { Screen } from "@/components/Screen";
import { Background } from "@/components/Background";
import { Intro } from "@/components/Intro";
import Image from "next/image";

export default function Home() {
  { /* get a texture in the back that's moving? */ }
  return (
    <main className="inset-0 overflow-hidden w-screen h-screen relative bg-[#1F2A21] bg-opacity-100">

      <Image
        src={"/reflection1.png"}
        alt="Espresso machine reflection in glass behind."
        width={403}
        height={126}
        className="absolute top-[0vh] left-[3vw]"
      />
      <Image
        src={"/reflection2.png"}
        alt="Espresso machine reflection in glass behind."
        width={403}
        height={126}
        className="absolute top-0 right-24"
      />

      <Image
        src={"/asset1.png"}
        alt="Espresso machine asset."
        width={322}
        height={100}
        className="absolute top-0 left-[40%] z-20"
      />
      <Image
        src={"/pixel1.png"}
        alt="Espresso machine asset."
        width={322}
        height={100}
        className="absolute top-0 left-[40%] z-20"
      />
      <Image
        src={"/pixel4.png"}
        alt="Espresso machine steamer asset."
        width={240}
        height={2026}
        className="absolute top-0 right-16 z-20"
      />

      <div
        className="absolute top-24 left-24 z-20">
        <Screen />
      </div>

      <div className="absolute bottom-32 left-[11.5rem] z-30">
        <Image
          src="/knob1.png"
          alt="Knob"
          width={154}
          height={154}
          priority
          />
      </div>

      <Image
        src={"/inner.png"}
        alt="Coffee machine recreation."
        width={1363}
        height={724.5}
        className="justify-center relative items-center translate-y-8 translate-x-8 opacity-95"
        priority
      />

      <div className="pointer-events-none absolute inset-0 z-30 opacity-[2.5%] scale-x-[-1]">
        <Background />
      </div>

      <div className="absolute inset-0 z-50">
        <Intro />
      </div>

      { /* <Screen /> */ }

    </main>
  );
}
