// components/Intro
"use client"
import Image from "next/image";
import { motion } from "motion/react";
import React from "react";

const Intro = () => {
  const [visible, setVisible] = React.useState<boolean>(true);

  if (!visible) return null;

  return <motion.div
    className="w-full h-full bg-[_#3f2412] flex justify-center items-center"
    initial={{ opacity: 100 }}
    animate={{ opacity: 0 }}
    transition={{ delay: 3, duration: 1}}
    onAnimationComplete={() => setVisible(false)}
  >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{
        times: [0, 0.5, 1],
        duration: 3, // 2s delay, 0.5s fade in, 0.5s fade out
        ease: "linear"
      }}
    >
      <Image src={"/meta/logo.png"} alt="Logo." width={250} height={250} priority />
    </motion.div>
  </motion.div>
}

export { Intro };
