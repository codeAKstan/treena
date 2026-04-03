import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  X,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  LucideIcon,
} from "lucide-react";
import { Oswald } from "next/font/google";
import { getContactInfo, getSocials } from "@/actions/contact-info";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const iconMap: Record<string, LucideIcon> = {
  facebook: Facebook,
  instagram: Instagram,
  x: X,
  youtube: Youtube,
};

const Footer = async () => {
  const contactInfo = await getContactInfo();
  const socials = await getSocials();



  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            
           
            <div className="flex space-x-3">
              {/* Facebook */}
              <Button
                size="icon"
                asChild
                className="h-10 w-10 border-gray-700 hover:border-primary hover:bg-primary/10"
              >
                <Link
                  href={socials.find((s) => s.key.toLowerCase() === "facebook")?.url || "https://www.facebook.com/Treenareynoldsofficial"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
              </Button>

              {/* Instagram */}
              <Button
                size="icon"
                asChild
                className="h-10 w-10 border-gray-700 hover:border-primary hover:bg-primary/10"
              >
                <Link
                  href={socials.find((s) => s.key.toLowerCase() === "instagram")?.url || "https://www.instagram.com/treenareynoldsofficial/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              </Button>

              {/* X (Twitter) */}
              <Button
                size="icon"
                asChild
                className="h-10 w-10 border-gray-700 hover:border-primary hover:bg-primary/10"
              >
                <Link
                  href={socials.find((s) => s.key.toLowerCase() === "x")?.url || "https://x.com/Reyn3285Treena"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <X className="w-5 h-5" />
                </Link>
              </Button>

              {/* LinkedIn */}
              <Button
                size="icon"
                asChild
                className="h-10 w-10 border-gray-700 hover:border-primary hover:bg-primary/10"
              >
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    socials.find((s) => s.key.toLowerCase() === "linkedin")?.url ||
                    "https://www.linkedin.com/in/treena-reynolds-514983284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  }
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>

          

          
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className={`text-gray-400 ${oswald.className}`}>
                © {new Date().getFullYear()} Treena E. Reynolds. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link
                href=""
                className={`text-gray-400 hover:text-primary transition-colors ${oswald.className}`}
              >
                Terms of Service
              </Link>
              <Link
                href=""
                className={`text-gray-400 hover:text-primary transition-colors ${oswald.className}`}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
