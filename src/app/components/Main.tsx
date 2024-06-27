"use client";
import React from "react";
import Image from "next/image";
import { main } from "../Img";
import { air } from "../Img";
import { motion } from "framer-motion";


const Main = () => {
  const varients = {
    hidden: { x: 0, y: 70, opacity: 0.25 },
    visible: { x: 0, y: -10, opacity: 1, transition: { delay: 0.05 } },
  };
  return (
    <div className="w-full sm:h-[400px] h-[200px] flex items-center">
      <div className="h-full md:max[1024px] max-w-[600px] m-auto flex relative justify-center items-center">
        <div className="object-cover">
          <Image src={main} alt="airpods" height={100} width={1400} />
        </div>
        <div className="absolute sm:mt-[280px] mt-[250px] ">
          <motion.div initial="hidden" animate="visible" variants={varients}>
            <Image src={air} alt="airpods" height={100} width={700} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;
