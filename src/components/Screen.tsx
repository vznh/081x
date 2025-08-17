// components/Screen
"use client"
import { Pencil2Icon, IdCardIcon } from "@radix-ui/react-icons";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

const Screen = () => {
  return <div className="relative rounded-xs  overflow-hidden w-[400px] h-[300px] px-6 py-8 border-2 border-opacity-20 border-black">
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
      transition={{ delay: 4, duration: 1 }}
      className="relative z-10"
    >
      <div className="flex flex-col">
        <span className="font-PPNeuebit text-white break-words text-3xl">
          We&apos;re having a home cafe, and you&apos;re invited.
        </span>
        <span className="font-PPNeuebit text-white text-opacity-40 text-3xl break-words">
          W___e&apos;s home at 1:00pm.
        </span>
      </div>

      <div className="w-[400px] h-px bg-white opacity-10 my-4 -mx-6" />

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

      <span className="font-PPNeuebit opacity-20 text-2xl text-white">
        To be infused on August 20th, 2025
      </span>
    </motion.div>
  </div>
};

export { Screen };
