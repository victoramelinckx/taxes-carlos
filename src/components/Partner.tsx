"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { LuArrowDownRight } from "react-icons/lu";
import { MdOutlineDone } from "react-icons/md";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Badge } from "./Badge";

export default function Partner() {
  const { ref } = useSectionInView("About", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="about"
      className="max-w-5xl mx-auto flex flex-col mb-20"
    >
      <div className="w-full pb-12 border-b border-black dark:border-white">
        <h1 className="text-6xl font-bold">
          Partner with us to unleash business potential
        </h1>
      </div>
      <div className="flex flex-row w-full">
        <div className="flex flex-col first w-[90%]">
          <p className="max-w-xl py-12">
            At Consultant, we recognize the individuality of each business,
            rejecting generic fixes. Hence, we adopt a custom method to offer
            strategies that match your objectives, difficulties, and sectoral
            fluctuations.
          </p>
          <div className="flex flex-row items-center space-x-12 ">
            <div className="flex flex-row items-center space-x-2">
              <MdOutlineDone className="w-6 h-6" />
              <p className="font-medium text-lg">Strategic Expertise</p>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <MdOutlineDone className="w-6 h-6" />
              <p className="font-medium text-lg">Strategic Expertise</p>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <MdOutlineDone className="w-6 h-6" />
              <p className="font-medium text-lg">Strategic Expertise</p>
            </div>
          </div>
        </div>
        <div className="relative h-[200px] w-[10%] bg-slate-800 flex items-center justify-center hover:cursor-pointer group">
          <div className=" absolute left-0 top-0 w-0 h-full transition-all duration-500 ease-in group-hover:w-full shadow-black/[0.03] backdrop-blur-[0.5rem] bg-gray-950 bg-opacity-75" />
          <LuArrowDownRight className="w-10 h-10 text-white z-10" />
        </div>
      </div>
    </section>
  );
}
