"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative h-screen">
      <Image
        src="/landing-splash.jpg"
        alt="MomoRental Platform Hero Section"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full absolute top-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center"
        >
          <div className="max-w-4xl mx-auto px-16 sm:px-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              Start your journey to finding the perfect place to call home
            </h1>
          </div>
          <div className="flex justify-center">
            <Input
              value={""}
              type="text"
              placeholder="Search for apartments, locations, or amenities"
              className="w-full max-w-lg rounded-none rounded-l-lg !border-0 bg-white"
              onChange={() => {}}
            />
            <Button className="rounded-none rounded-r-lg border-none text-white bg-secondary-500 hover:bg-secondary-600">
              Search
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
