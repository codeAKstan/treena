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
            width={200}
            height={100}
            className={isNGOPage ? "w-auto h-30" : "w-auto h-20"}
            onClick={() => router.push("/")}
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
            width={200}
            height={100}
            className={isNGOPage ? "w-auto h-30" : "w-auto h-20"}
            onClick={() => router.push("/")}
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
