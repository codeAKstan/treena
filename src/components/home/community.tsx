"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Users, Heart, MessageCircle, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Oswald } from "next/font/google";
import { motion } from "framer-motion";
import { georgiaItalic } from "@/utils/georgia-italic";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const Community = () => {
  return (
    <motion.div
      className="w-full relative py-20 lg:py-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Image
        src="/images/community.jpg"
        alt="Community background"
        fill
        className="object-cover -z-10"
        priority
      />
      <div className="absolute inset-0 bg-black/40 -z-5"></div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-5xl lg:text-6xl ${georgiaItalic.className} mb-6 text-white`}
            >
              Wealth as Generosity 
            </h2>
            <p
              className={`text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed ${oswald.className}`}
            >
              Healing begins where stories meet hearts — and vulnerability
              becomes strength.
              <br />
              Treena began by capturing moments through the lens of her camera. Later, her work as a transformation energy coach gave her a deeper understanding of how thoughts and stories shape the way people see themselves.

With strong academic training and years of experience, she has helped many find clarity and confidence. Now she brings that same vision to children’s books, blending sharp detail with warmth, humor, and heart.
            </p>
          </div>

          
          
          <motion.div
            className="rounded-3xl p-8 lg:p-12 text-center shadow-xl backdrop-blur-sm text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: -3 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <BookOpen className="w-16 h-16 text-primary mx-auto mb-6" />
            </motion.div>
            
            <p
              className={`text-lg lg:text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed ${oswald.className}`}
            >
             Treena's debut book, Ticklish Cloud, is a gateway to laughter,
creativity, and connection. Families and educators alike can
count on her work to spark joy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className={`px-8 py-6 text-lg ${oswald.className} border-2 text-black`}
                >
                  <Link href="">Learn More</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Community;
