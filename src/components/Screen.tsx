// components/Screen
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

const Screen = () => {
  return <div className="rounded-sm bg-black w-[338px] h-[287px] p-3">
    <div className="flex flex-col">
      <span className="font-PPNeuebit text-white break-words text-3xl">
        We&apos;re having a home cafe, and you&apos;re invited.
      </span>
      <span className="font-PPNeuebit text-white text-opacity-40 text-3xl break-words">
        _____&apos;s home at 1:00pm. No need to bring anything.
      </span>
    </div>

    { /* divisor */}
    <div className="flex flex-row">

    </div>
    <Link
      className="font-PPNeuebit opacity-60 text-white flex flex-row gap-x-2"
      href=""
      target="_blank"
    >
      <Pencil2Icon className="w-6 h-6" />
      Preorder your own drink
    </Link>

    { /* divisor */}

  </div>
};

export { Screen };
