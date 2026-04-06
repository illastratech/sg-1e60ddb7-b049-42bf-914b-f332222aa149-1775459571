"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const nav = [
  { href: "/", label: "Home" },
  { href: "/inventory", label: "Imported Vehicles" },
  { href: "/import-process", label: "Import Process" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
];

const PHONE_HREF = "tel:+94776783241";
const PHONE_DISPLAY = "+94 77 678 3241";

/** Brand mark in `public/` — `.svg` or `.png`. */
const LOGO_SRC = "/logo.svg";

function LogoMark() {
  return (
    <Image
      src={LOGO_SRC}
      alt=""
      width={140}
      height={44}
      priority
      className="h-10 w-auto shrink-0 object-contain object-left md:h-11"
      aria-hidden
    />
  );
}

export function Header() {
  return (
    <header className="navbar-glass fixed top-0 left-0 right-0 z-50">
      <nav className="container relative flex w-full items-center justify-between py-3 md:py-4">
        <Link href="/" className="flex items-center gap-3">
          <LogoMark />
          <div className="min-w-0">
            <p className="font-display text-base font-bold tracking-wide text-foreground md:text-lg">
              TRIXION MOTORS
            </p>
            <p className="text-[10px] text-muted-foreground sm:text-xs">
              Driven by Trust. Powered by Quality.
            </p>
          </div>
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 lg:flex lg:items-center lg:gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                item.href === "/"
                  ? "text-[hsl(221_100%_59%)]"
                  : "text-[hsl(219_45%_81%)] hover:text-[#5EA2FF]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 rounded-full border border-[rgba(95,149,255,0.28)] bg-[rgba(47,107,255,0.08)] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(12,28,52,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[rgba(47,107,255,0.16)] hover:border-[rgba(95,149,255,0.5)] sm:inline-flex"
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden />
            {PHONE_DISPLAY}
          </a>

          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition hover:bg-[rgba(47,107,255,0.16)] lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(100%,320px)] border-[rgba(95,149,255,0.18)] bg-[rgba(10,29,54,0.95)]"
            >
              <SheetHeader className="text-left">
                <SheetTitle className="font-display text-lg">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-1">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition hover:bg-[rgba(47,107,255,0.16)]"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={PHONE_HREF}
                  className="mt-4 flex items-center justify-center gap-2 rounded-full border border-[rgba(95,149,255,0.28)] bg-[rgba(47,107,255,0.08)] px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[rgba(47,107,255,0.16)] hover:border-[rgba(95,149,255,0.5)]"
                >
                  <Phone className="h-4 w-4" />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
