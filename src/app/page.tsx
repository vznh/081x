"use client";
import { Screen } from "@/components/Screen";
import { Background } from "@/components/Background";
import { Intro } from "@/components/Intro";
import Image from "next/image";

export default function Home() {
  { /* get a texture in the back that's moving? */ }
  return (
    <main className="inset-0 overflow-hidden w-screen h-screen relative animate  bg-[linear-gradient(90deg,_#a55f30,_#3f2412,_#a55f30)]  bg-opacity-100">
      <Image
        src={"/assets/grinderR.png"}
        alt="Espresso grinder reflection in glass behind."
        width={403}
        height={126}
        className="absolute top-[0vh] left-[3vw]"
      />
      <Image
        src={"/assets/steamerR.png"}
        alt="Espresso steamer reflection in glass behind."
        width={403}
        height={126}
        className="absolute top-0 right-24"
      />

      <Image
        src={"/assets/grinder.png"}
        alt="Espresso machine asset."
        width={322}
        height={100}
        className="absolute top-0 left-[40%] z-20"
      />

      <Image
        src={"/assets/steamer.png"}
        alt="Espresso machine steamer asset."
        width={240}
        height={1626}
        className="absolute top-0 right-16 z-20"
      />

      <div
        className="absolute top-24 left-8 z-50">
        <Screen />
      </div>

      <div className="absolute bottom-32 left-[8.5rem] z-30">
        <Image
          src="/assets/knob.png"
          alt="Knob"
          width={204}
          height={204}
          priority
          />
      </div>

      <Image
        src={"/assets/base.png"}
        alt="Coffee machine recreation."
        width={1635}
        height={868.5}
        className="justify-center relative items-center translate-y-8 translate-x-0 opacity-95"
        priority
      />

      <div className="pointer-events-none absolute inset-0 z-30 opacity-[2.5%] scale-x-[-1]">
        <Background />
      </div>

      <div className="pointer-events-none absolute inset-0 z-50">
        <Intro />
      </div>
    </main>
  );
}
