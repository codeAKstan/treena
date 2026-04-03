"use client";

import React from "react";
import { motion } from "framer-motion";
import { Oswald } from "next/font/google";
import { georgiaItalic } from "@/utils/georgia-italic";

const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"] });

interface PurposeProps {
  title?: string;
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
}

export default function Purpose({
  title = "The Purpose of Ticklish Cloud",
  paragraph1 = "It delivers a mix of humor and rhythm that makes it perfect for bedtime, group reading, or solo exploration by early readers. The story introduces a cloud with a ticklish secret. As the laughter builds, children follow along with simple, engaging lines that are easy to read aloud. Bright artwork amplifies the humor, giving the story a bounce that feels alive.",
  paragraph2 = "Why Parents and Teachers Choose Ticklish Cloud?",
  paragraph3 = "The story is fun, but it also works as a learning tool. Short text supports early reading skills. Illustrations guide comprehension. Humor keeps attention locked in. It’s a storybook that works as both entertainment and early literacy support.",
}: PurposeProps) {
  return (
    <motion.section
      className="w-full py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2
              className={`text-4xl lg:text-5xl ${georgiaItalic.className} mb-8`}
            >
              {title}
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-12"></div>
          </motion.div>

          <motion.div
            className={`space-y-8 text-lg lg:text-xl text-gray-700 leading-relaxed ${oswald.className}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-justify">{paragraph1}</p>
            <p className="text-justify">{paragraph2}</p>
            <p className="text-justify">{paragraph3}</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
