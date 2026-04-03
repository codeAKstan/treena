"use client";

import React from "react";
import Image from "next/image";
import { Oswald } from "next/font/google";
import { motion } from "framer-motion";
import Community from "../home/community";
import MediaGallery from "./media-gallery";
import { MediaHighlight } from "@/db/schema/media-highlights";
import { georgiaItalic } from "@/utils/georgia-italic";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

interface AboutProps {
  whoIAmImage?: string;
  whoIAmTitle?: string;
  whoIAmParagraph1?: string;
  whoIAmParagraph2?: string;
  whoIAmParagraph3?: string;
  whoIAmParagraph4?: string;
  journeyImage?: string;
  journeyTitle?: string;
  journeyParagraph1?: string;
  journeyParagraph2?: string;
  purposeTitle?: string;
  purposeParagraph1?: string;
  purposeParagraph2?: string;
  purposeParagraph3?: string;
  missionTitle?: string;
  missionParagraph1?: string;
  missionParagraph2?: string;
  visionTitle?: string;
  visionParagraph1?: string;
  visionParagraph2?: string;
  mediaHighlights?: MediaHighlight[];
}

const About = ({
  whoIAmImage = "/images/treena.jpg",
  whoIAmTitle = "Who I Am",
  whoIAmParagraph1 = "Treena E. Reynolds is a professional coach and author who blends important lessons with real-life advice,",
  whoIAmParagraph2 = "aiming to help people grow. Her work speaks to everyday challenges and small wins.",
  whoIAmParagraph3 = "Treena began by capturing moments through the lens of her camera. Later, her work as a transformation energy coach gave her a deeper understanding of how thoughts and stories shape the way people see themselves.",
  whoIAmParagraph4 = "With strong academic training and years of experience, she has helped many find clarity and confidence. Now she brings that same vision to children’s books, blending sharp detail with warmth, humor, and heart.",
  journeyImage = "/images/treena.jpg",
  journeyTitle = "My Journey",
  journeyParagraph1 = "Treena’s journey into children’s literature started with photography. She learned to capture moments and reveal what others might overlook. That ability now shapes her writing. Rather than using heavy narration, she creates scenes that children can enter with ease.",
  journeyParagraph2 = "Treena sees children’s books as more than entertainment. They nurture imagination, creativity, and a love of reading. Her stories rely on clear language and vivid imagery so children can follow along while still feeling surprised. Inspiration doesn’t require complex words. ",
 missionTitle = "Our Mission",
  missionParagraph1 = "To empower individuals worldwide to embrace their mental health journey with courage, compassion, and community. We believe that every person deserves to live authentically, heal from their past, and find strength in their daily victories.",
  missionParagraph2 = "Through storytelling, education, and meaningful connections, we create safe spaces where vulnerability becomes strength and isolation transforms into belonging.",
  visionTitle = "Our Vision",
  visionParagraph1 = "A world where mental health conversations flow as naturally as breathing, where every individual feels seen, heard, and supported in their journey toward healing and self-discovery.",
  visionParagraph2 = "We envision communities built on empathy, where personal stories become catalysts for collective transformation, and where the simple act of showing up becomes the greatest victory of all.",
  mediaHighlights = [],
}: AboutProps) => {
  return (
    <div className="w-full relative overflow-clip">
      {/* Who I Am Section */}
      <motion.section
        className="w-full relative overflow-hidden min-h-[90vh] flex items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Background Doodles */}
        <Image
          src="/doodles/doodle-2.svg"
          alt="doodle"
          className="absolute -top-10 md:-top-20 -left-10 md:-left-20 z-[-1]"
          width={200}
          height={200}
        />
        <Image
          src="/doodles/doodle-4.svg"
          alt="doodle"
          className="absolute -bottom-10 md:-bottom-20 -right-10 md:-right-20 z-[-1] rotate-180"
          width={200}
          height={200}
        />

        <div className="container mx-auto px-6 lg:px-8 max-lg:py-10">
          <div className="max-w-5xl 2xl:max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 max-lg:gap-10 2xl:gap-20 items-center">
              {/* Left Column - Image */}
              <motion.div
                className="relative max-w-96 2xl:max-w-4xl mx-auto"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  <Image
                    src={whoIAmImage}
                    alt="Treena Reynolds - Who I Am"
                    width={400}
                    height={450}
                    className="rounded-3xl shadow-2xl object-cover w-full aspect-[4/5]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                </div>
              </motion.div>

              {/* Right Column - Who I Am Content */}
              <motion.div
                className="space-y-8 max-w-96 2xl:max-w-4xl mx-auto"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div>
                  <h1
                    className={`text-5xl lg:text-6xl ${georgiaItalic.className} mb-6`}
                  >
                    {whoIAmTitle}
                  </h1>
                  <div className="w-24 h-1 bg-primary rounded-full mb-8"></div>
                </div>

                <div
                  className={`space-y-6 text-lg 2xl:text-2xl text-justify leading-relaxed ${oswald.className}`}
                >
                  <p>{whoIAmParagraph1}</p>
                  <p>{whoIAmParagraph2}</p>
                  <p>{whoIAmParagraph3}</p>
                  <p>{whoIAmParagraph4}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Hero Section - Personal Journey */}
      <motion.section
        className="w-full relative overflow-hidden min-h-[90vh] grid place-content-center"
        id="journey"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Background Doodles */}
        <Image
          src="/doodles/doodle-1.svg"
          alt="doodle"
          className="absolute -top-10 md:-top-20 -left-10 md:-left-20 z-[-1]"
          width={200}
          height={200}
        />
        <Image
          src="/doodles/doodle-3.svg"
          alt="doodle"
          className="absolute -bottom-10 md:-bottom-20 -right-10 md:-right-20 z-[-1] rotate-180"
          width={200}
          height={200}
        />

        <div className="container mx-auto px-6 lg:px-8 max-lg:py-10">
          <div className="max-w-5xl 2xl:max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-5 max-lg:gap-10 2xl:gap-20 items-center">
              
              {/* Left Column - Journey Narrative */}
              <motion.div
                className="space-y-8 max-w-96 2xl:max-w-4xl mx-auto"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div>
                  <h1
                    className={`text-5xl lg:text-6xl ${georgiaItalic.className} mb-6`}
                  >
                    {journeyTitle}
                  </h1>
                  <div className="w-24 h-1 bg-primary rounded-full mb-8"></div>
                </div>

                <div
                  className={`space-y-6 text-lg 2xl:text-2xl text-justify leading-relaxed ${oswald.className}`}
                >
                  <p>{journeyParagraph1}</p>
                  <p>{journeyParagraph2}</p>
                </div>
              </motion.div>
              {/* Right Column - Image */}
              <motion.div
                className="relative max-w-96 2xl:max-w-4xl mx-auto"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  <Image
                    src={journeyImage}
                    alt="Treena Reynolds - Personal Journey"
                    width={400}
                    height={450}
                    className="rounded-3xl shadow-2xl object-cover w-full aspect-[4/5]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Purpose Section */}
      <motion.section
        className="w-full py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white hidden"
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
                {/* {purposeTitle} */}
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
              {/* <p className="text-justify">{purposeParagraph1}</p>
              <p className="text-justify">{purposeParagraph2}</p>
              <p className="text-justify">{purposeParagraph3}</p> */}
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Community />
    </div>
  );
};

export default About;
