"use client";

import React from "react";
import Image from "next/image";
import { Oswald } from "next/font/google";
import { georgiaItalic } from "@/utils/georgia-italic";
import { motion } from "framer-motion";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const Trademarks = () => {
  return (
    <section className="w-full py-20 lg:py-32 bg-gray-50/50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className={`block text-primary uppercase tracking-[0.3em] text-sm font-bold mb-4 ${oswald.className}`}>
              Brand Identity
            </span>
            <h2
              className={`text-4xl lg:text-6xl ${georgiaItalic.className} mb-6 text-black`}
            >
              Internationally Registered & Trademarked
            </h2>
            <div className="w-16 h-1 bg-yellow-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group px-4"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-600/20 to-primary/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden aspect-square flex items-center justify-center">
                <Image
                  src="/images/IMG-20260331-WA0003.jpg"
                  alt="Bella Infinita Trademark"
                  width={500}
                  height={500}
                  className="rounded-xl object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-6">
                <h3 className={`text-2xl ${oswald.className} uppercase tracking-widest text-gray-900`}>
                  Bella Infinita®
                </h3>
                <p className={`text-sm text-gray-500 mt-1 uppercase ${oswald.className} tracking-tighter`}>
                  Global Registration
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group px-4"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-yellow-600/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden aspect-square flex items-center justify-center">
                <Image
                  src="/images/IMG-20260331-WA0004.jpg"
                  alt="Wisdom Infinita Trademark"
                  width={500}
                  height={500}
                  className="rounded-xl object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-6">
                <h3 className={`text-2xl ${oswald.className} uppercase tracking-widest text-gray-900`}>
                  Wisdom Infinita®
                </h3>
                <p className={`text-sm text-gray-500 mt-1 uppercase ${oswald.className} tracking-tighter`}>
                  Global Registration
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trademarks;
