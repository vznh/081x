"use client";
import React from "react";
import { Screen } from "@/components/Screen";
import { Background } from "@/components/Background";
import { Intro } from "@/components/Intro";
import { Knob } from "@/components/Knob";
import Image from "next/image";

export default function Home() {
  const [amt, setAmt] = React.useState<number>(0.2); // [0.2 -> 0.8], indicating the amt of espresso grinds
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="inset-0 overflow-hidden w-screen h-screen relative animate bg-gradient-to-r from-[#3f2412] via-[#A55F30] to-[#3f2412] bg-opacity-100">
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
        height={1226}
        className="absolute top-0 right-16 z-20"
      />

      <div className="absolute top-24 left-8 z-50">
        <Screen />
      </div>

      <div className="absolute bottom-20 left-[5rem] z-30">
        <Knob
          onChange={(angle) => {
            const normalizedValue = (angle - -135) / (135 - -135); // Convert to 0-1 range (-135° to 135°)
            setAmt(0.2 + normalizedValue * 0.6); // Map to 0.2-0.8 range
          }}
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

      <span className="text-white opacity-100 text-lg font-PPNeuebit z-50 top-0 right-0"></span>

      <div className="pointer-events-none absolute inset-0 z-50">
        <Intro />
      </div>
    </main>
  );
}
