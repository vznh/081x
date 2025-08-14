import { Screen } from "@/components/Screen";
import Image from "next/image";

export default function Home() {
  { /* get a texture in the back that's moving? */}
  return (
    <main className="inset-0 overflow-hidden w-screen h-screen relative bg-[#A68977] bg-opacity-100">

      <Image
        src={"/reflection1.png"}
        alt="Espresso machine reflection in glass behind."
        width={403}
        height={126}
        priority
        className="absolute top-[0vh] left-[3vw]"
      />
      <Image
        src={"/reflection2.png"}
        alt="Espresso machine reflection in glass behind."
        width={403}
        height={126}
        priority
        className="absolute top-0 right-24"
      />

      <Image
        src={"/asset1.png"}
        alt="Espresso machine asset."
        width={322}
        height={100}
        priority
        className="absolute top-0 left-[40%] z-20"
      />
      <Image
        src={"/asset1.png"}
        alt="Espresso machine asset."
        width={322}
        height={100}
        priority
        className="absolute top-0 left-[40%] z-20"
      />
      <Image
        src={"/asset2.png"}
        alt="Espresso machine steamer asset."
        width={130}
        height={1341}
        priority
        className="absolute top-0 right-24 z-20"
      />

      <Image
        src={"/inner.png"}
        alt="Coffee machine recreation."
        width={1363}
        height={724.5}
        className="justify-center relative items-center translate-y-8 translate-x-8"
        priority
      />

      { /* <Screen /> */ }

    </main>
  );
}
