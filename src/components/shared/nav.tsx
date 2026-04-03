"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ChevronDown, ShoppingBag } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Image from "next/image";
import { Oswald } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import Cart from "../cart";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});


export function Navbar() {
  const isMobile = useBreakpoint("max-lg");
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const isNGOPage = pathname.includes("/ngo");

  return (
    <>
      {isMobile && (
        <div className="flex justify-between items-center z-[999]">
          <Image
            src="/logos/LogoF.png"
            alt="logo"
            width={150}
            height={50}
            className={isNGOPage ? "w-auto h-30" : "w-auto h-20"}
            onClick={() => router.push(isNGOPage ? "/ngo" : "/")}
          />
          <div className="flex items-center gap-2">
            <Cart Icon={ShoppingBag} variant="ghost" />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <MobileNavContent onClose={() => setIsOpen(false)} />
            </Sheet>
          </div>
        </div>
      )}
      {!isMobile && (
        <div className="flex justify-between items-center max-w-7xl mx-auto z-[999]">
          <Image
            src="/logos/LogoF.png"
            alt="logo"
            width={150}
            height={50}
            className={isNGOPage ? "w-auto h-30" : "w-auto h-20"}
            onClick={() => router.push(isNGOPage ? "/ngo" : "/")}
          />
          <NavigationMenu viewport={false} className="relative z-[999]">
            <NavigationMenuList>
              {/* About Me */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={
                    navigationMenuTriggerStyle() +
                    ` bg-transparent font-semibold ${oswald.className} text-[#800000]`
                  }
                >
                  <Link href="/about">About Me</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              {/* Shop */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={
                    navigationMenuTriggerStyle() +
                    ` bg-transparent font-semibold ${oswald.className} text-[#800000]`
                  }
                >
                  <Link href="/shop/books">Shop</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              {/* Community Home */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={
                    navigationMenuTriggerStyle() +
                    ` bg-primary font-semibold ${oswald.className} text-white hover:bg-primary/80 hover:text-white/80`
                  }
                >
                  {/* <Link href="/community/home">Login</Link> */}
                </NavigationMenuLink>
              </NavigationMenuItem>
              {/* Cart */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={
                    navigationMenuTriggerStyle() +
                    ` bg-transparent ${oswald.className} text-[#800000]`
                  }
                >
                  <Cart Icon={ShoppingBag} variant="ghost" />
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </>
  );
}

function MobileNavContent({ onClose }: { onClose: () => void }) {
  const [servicesOpen, setServicesOpen] = React.useState(false);

  return (
    <SheetContent
      side="left"
      className="w-[300px] sm:w-[400px] flex flex-col z-[9999]"
    >
      <SheetHeader className="border-b pb-4">
        <SheetTitle className={`text-2xl ${oswald.className}`}>Menu</SheetTitle>
      </SheetHeader>
      <nav className="flex flex-col gap-1 mt-4 overflow-y-auto flex-1">
        {/* <Link
          href="/community/home"
          className={`text-lg font-semibold px-4 bg-primary py-3 rounded-lg hover:bg-accent hover:text-accent-foreground active:bg-accent/80 transition-all ${oswald.className} text-[#800000]`}
          onClick={onClose}
        >
          Login
        </Link> */}
        {/* Home */}
        <Link
          href="/"
          className={`text-lg font-semibold px-4 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground active:bg-accent/80 transition-all ${oswald.className} text-[#800000]`}
          onClick={onClose}
        >
          Home
        </Link>

        <div className="h-px bg-border my-2" />

        {/* About Me */}
        <Link
          href="/about"
          className={`text-lg font-semibold px-4 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground active:bg-accent/80 transition-all ${oswald.className} text-[#800000]`}
          onClick={onClose}
        >
          About Me
        </Link>

        <div className="h-px bg-border my-2" />

        {/* Shop */}
        <Link
          href="/shop"
          className={`text-lg font-semibold px-4 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground active:bg-accent/80 transition-all ${oswald.className} text-[#800000]`}
          onClick={onClose}
        >
          Shop
        </Link>

        <div className="h-px bg-border my-2" />

        {/* Services */}
        <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
          <CollapsibleTrigger
            className={`w-full flex items-center justify-between text-lg font-semibold px-4 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground active:bg-accent/80 transition-all ${oswald.className} text-[#800000]`}
          >
            Services
            <ChevronDown
              className={`h-5 w-5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""
                }`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-1 mb-2 space-y-1 bg-muted/30 rounded-lg py-2">
            <Link
              href="/services/coaching"
              className="block pl-8 pr-4 py-2.5 text-base text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md mx-2 transition-all"
              onClick={onClose}
            >
              Coaching
            </Link>
            <Link
              href="/services/ghostwriting"
              className="block pl-8 pr-4 py-2.5 text-base text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md mx-2 transition-all"
              onClick={onClose}
            >
              Ghostwriting
            </Link>
            <Link
              href="/services/consulting"
              className="block pl-8 pr-4 py-2.5 text-base text-muted-foreground hover:bg-accent/50 hover:text-foreground rounded-md mx-2 transition-all"
              onClick={onClose}
            >
              Consulting
            </Link>
          </CollapsibleContent>
        </Collapsible>

        <div className="h-px bg-border my-2" />

        {/* NGO */}
        <Link
          href="/ngo"
          className={`text-lg font-semibold px-4 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground active:bg-accent/80 transition-all ${oswald.className} text-[#800000]`}
          onClick={onClose}
        >
          NGO
        </Link>

        <div className="h-px bg-border my-2" />

        {/* Community */}
        <Link
          href="/community"
          className={`text-lg font-semibold px-4 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground active:bg-accent/80 transition-all ${oswald.className} text-[#800000]`}
          onClick={onClose}
        >
          Community
        </Link>

        <div className="h-px bg-border my-2" />

        {/* Projects */}
        <Link
          href="/portfolio"
          className={`text-lg font-semibold px-4 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground active:bg-accent/80 transition-all ${oswald.className} text-[#800000]`}
          onClick={onClose}
        >
          Projects
        </Link>

        <div className="h-px bg-border my-2" />

        {/* Blog */}
        {/* <Link
          href="/blog"
          className={`text-lg font-semibold px-4 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground active:bg-accent/80 transition-all ${oswald.className} text-[#800000]`}
          onClick={onClose}
        >
          Blog
        </Link> */}

        <div className="h-px bg-border my-2" />

        {/* FAQ */}
        <Link
          href="/faq"
          className={`text-lg font-semibold px-4 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground active:bg-accent/80 transition-all ${oswald.className} text-[#800000]`}
          onClick={onClose}
        >
          FAQ
        </Link>

        <div className="h-px bg-border my-2" />

        {/* Contact Me */}
        <Link
          href="/contact"
          className={`text-lg font-semibold px-4 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground active:bg-accent/80 transition-all ${oswald.className} text-[#800000]`}
          onClick={onClose}
        >
          Contact Me
        </Link>

        <div className="h-px bg-border my-2" />

        {/* Privacy Policy */}
        <Link
          href="/privacy"
          className={`text-lg font-semibold px-4 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground active:bg-accent/80 transition-all ${oswald.className} text-[#800000]`}
          onClick={onClose}
        >
          Privacy Policy
        </Link>

        <div className="h-px bg-border my-2" />

        {/* Testimonials */}
        <Link
          href="/testimonials"
          className={`text-lg font-semibold px-4 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground active:bg-accent/80 transition-all ${oswald.className} text-[#800000]`}
          onClick={onClose}
        >
          Testimonials
        </Link>

        <div className="h-px bg-border my-2" />
      </nav>
    </SheetContent>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
