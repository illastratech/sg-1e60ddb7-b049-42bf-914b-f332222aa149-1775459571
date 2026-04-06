import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Car,
  Calendar,
  Check,
  MessageCircle,
  ThumbsUp,
} from "lucide-react";

/** Use a bright, high-res cinematic asset (ship + cars + sunset + wet ground) at `public/hero.png`. */
const HERO_IMAGE = "/hero.png";

const HERO_DEPTH_GLOW = `radial-gradient(
  circle at 70% 50%,
  rgba(47, 107, 255, 0.12),
  transparent 60%
)`;

/** Subtle forward glow so cars stay bright (not shadowed). */
const HERO_HEADLIGHT_GLOW = `radial-gradient(
  ellipse 85% 45% at 72% 78%,
  rgba(93, 162, 255, 0.12) 0%,
  rgba(47, 107, 255, 0.05) 35%,
  transparent 60%
)`;

const WHATSAPP_URL = "https://wa.me/94776783241";

const TRUST_STATS = [
  {
    icon: Car,
    value: "125+",
    label: "Vehicles Imported Past Year",
  },
  {
    icon: Calendar,
    value: "Since 2018",
    label: "Experience in vehicle sourcing",
  },
  {
    icon: ThumbsUp,
    value: "Over 99%",
    label: "Customer Satisfaction",
  },
] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden pt-[4.5rem] md:pt-20">
      {/* Fallback + full-bleed photo: ~65% visual weight on the right; bright, cinematic grade. */}
      <div className="absolute inset-0 z-0 bg-[#0a1628]" aria-hidden />
      <div className="absolute inset-0 z-0 mix-blend-normal">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center] brightness-[1.1] contrast-[1.1] saturate-[1.15] sm:object-[68%_center] md:object-[72%_52%] lg:object-[75%_50%]"
          style={{ mixBlendMode: "normal" }}
          aria-hidden
        />
      </div>
      {/* Left ~35% readability band — smooth fade; right side stays bright and clear. */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          backgroundImage: `linear-gradient(
            to right,
            rgba(4, 15, 32, 0.76) 0%,
            rgba(6, 20, 39, 0.56) 30%,
            rgba(8, 24, 48, 0.28) 58%,
            rgba(8, 24, 48, 0.07) 78%,
            rgba(8, 24, 48, 0.00) 100%
          )`,
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden
      />
      {/* Blue-only cinematic depth; no warm/orange tint. */}
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          backgroundImage: HERO_DEPTH_GLOW,
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden
      />
      {/* Subtle forward glow on the showcase side — keeps cars/lights feeling crisp. */}
      <div
        className="pointer-events-none absolute inset-0 z-[3]"
        style={{
          backgroundImage: HERO_HEADLIGHT_GLOW,
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden
      />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col">
        {/* Main hero copy — left-aligned like the mockup. */}
        <div className="container flex flex-1 flex-col justify-center pb-3 pt-10 md:pb-4 md:pt-14 lg:pb-5 lg:pt-16">
          <div className="mx-auto w-full max-w-2xl space-y-6 text-center md:mx-0 md:text-left lg:max-w-3xl lg:space-y-8">
            <div className="inline-flex items-center justify-center gap-2 self-center rounded-full border border-[rgba(95,149,255,0.25)] bg-[rgba(47,107,255,0.12)] px-4 py-2 shadow-[0_10px_30px_rgba(47,107,255,0.15)] md:self-start">
              <Car className="h-4 w-4 shrink-0 text-primary" aria-hidden />
              <span className="text-[11px] font-semibold uppercase tracking-wide text-primary sm:text-xs">
                TRUSTED JAPANESE VEHICLE IMPORTS
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="font-display text-4xl font-medium leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                Drive Your Dream Car
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                from <span className="text-primary">Japan.</span>
              </h1>
              <p className="text-lg font-medium leading-snug text-foreground/90 sm:text-xl">
                Premium Japanese Vehicles
                <br />
                Delivered to Your Doorstep
              </p>
            </div>

            <ul className="mx-auto max-w-md space-y-3 text-left md:mx-0 md:max-w-none">
              {[
                "125+ Vehicles Imported Past Year",
                "Experience Since 2018",
                "Over 99% Customer Satisfaction",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[rgba(95,149,255,0.25)] bg-[rgba(47,107,255,0.12)] shadow-[0_0_20px_rgba(47,107,255,0.2)]">
                    <Check
                      className="h-3.5 w-3.5 text-primary"
                      strokeWidth={3}
                    />
                  </span>
                  <span className="text-base font-medium leading-snug text-foreground">
                    {line}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/inventory"
                className="inline-flex w-full min-h-[48px] items-center justify-center gap-2 rounded-full border border-[rgba(95,149,255,0.42)] bg-[rgba(47,107,255,0.10)] px-7 py-3.5 font-semibold text-[hsl(218_100%_98%)] transition-all duration-300 shadow-[0_10px_30px_rgba(47,107,255,0.18),0_0_16px_rgba(47,107,255,0.14)] hover:-translate-y-0.5 hover:bg-[rgba(47,107,255,0.16)] hover:shadow-[0_14px_40px_rgba(47,107,255,0.28),0_0_24px_rgba(47,107,255,0.2)] sm:w-auto sm:min-w-[200px]"
              >
                Explore Imported Vehicles
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full min-h-[48px] sm:w-auto sm:min-w-[220px]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Chat on WhatsApp Now
              </a>
            </div>

            <p className="text-sm italic text-foreground/75">
              No hidden charges. No surprises.
            </p>
          </div>
        </div>

        {/* Single glass stats strip — meets the bottom of the hero scene. */}
        <div className="container pb-8 pt-0 md:pb-10">
          <div className="rounded-2xl border border-[rgba(95,149,255,0.15)] bg-[rgba(10,29,54,0.75)] shadow-[0_10px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.04)] ring-1 ring-[rgba(95,149,255,0.16)] backdrop-blur-xl">
            <div className="grid grid-cols-1 gap-8 p-6 sm:p-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-[rgba(95,149,255,0.14)]">
              {TRUST_STATS.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex w-full flex-row items-center justify-center gap-4 lg:gap-5"
                >
                  <div className="icon-node h-14 w-14 shrink-0 rounded-full">
                    <Icon className="h-7 w-7" aria-hidden />
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="font-display text-2xl font-bold text-foreground md:text-3xl">
                      {value}
                    </p>
                    <p className="text-sm leading-snug text-foreground/70">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
