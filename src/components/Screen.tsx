// components/Screen
"use client"
import { Pencil2Icon, IdCardIcon } from "@radix-ui/react-icons";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

const Screen = () => {
  return <div className="relative rounded-xs  overflow-hidden w-[400px] h-[310px] px-6 py-8 border-2 border-opacity-20 border-black">
    <Image
      src={"/gradient.png"}
      alt="Gradient for screenbg."
      fill
      priority
      sizes="338px"
      className="object-cover"
    />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ delay: 5, duration: 2 }}
      className="relative z-10"
    >
      <div className="flex flex-col">
        <span className="font-PPNeuebit text-white break-words text-3xl">
          BYOM at W***e&apos;s house.
        </span>
        <span className="font-PPNeuebit text-white text-opacity-40 text-3xl break-words justify-stretch">
          W***e&apos;s home at 1:00pm. Bring your own mug! Nintendo Switch optional.
        </span>
      </div>

      <div className="w-[400px] h-px bg-white opacity-10 my-4 -mx-6" />

      <span className="font-PPNeuebit text-white opacity-20 mb-20">ACTIONS</span>
      <div className="flex flex-row justify-between items-center">
        <button>
          <Link
            className="font-PPNeuebit text-white hover:text-[#FFAE00] opacity-60 flex flex-row gap-x-2 text-lg border rounded-sm px-2 border-white border-opacity-10 items-center"
            href=""
            target="_blank"
          >
            <Pencil2Icon className="w-4 h-4" />
            <span className="cursor-pointer">Preorder your own beverage</span>
          </Link>

        </button>
        <Link
          className="font-PPNeuebit opacity-60  text-white hover:text-[#FFAE00] flex flex-row gap-x-2 text-lg border rounded-sm px-2 border-white border-opacity-10 items-center"
          href=""
          target="_blank"
        >
          <IdCardIcon className="w-4 h-4" />
          <span className="cursor-pointer">RSVP for your spot</span>
        </Link>
      </div>

      <div className="w-[400px] h-px bg-white opacity-10 my-4 -mx-6" />

      <span className="font-PPNeuebit text-white opacity-20 py-2 ">HEADCOUNT 1</span>
    </motion.div>
  </div>
};

export { Screen };
