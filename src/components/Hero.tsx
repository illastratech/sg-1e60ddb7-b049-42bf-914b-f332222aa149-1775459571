import Link from "next/link";
import {
  ArrowRight,
  Car,
  Calendar,
  Check,
  MessageCircle,
  ThumbsUp,
} from "lucide-react";

/** Local asset: place `hero.png` in the `public` folder. */
const HERO_IMAGE = "/hero.png";

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
    <section className="relative flex min-h-screen flex-col pt-[4.5rem] md:pt-20">
      <div className="absolute inset-0 z-0 bg-[hsl(210_45%_16%)]">
        {/* Photo layer — subtle lift so the scene reads closer to the reference mockup */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[1.08] contrast-[1.03] saturate-[1.06]"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(
            105deg,
            hsl(210 48% 13% / 0.88) 0%,
            hsl(210 46% 16% / 0.78) 30%,
            hsl(210 44% 18% / 0.65) 42%,
            hsl(210 42% 20% / 0.32) 56%,
            hsl(210 40% 24% / 0.1) 70%,
            transparent 86%
          )`,
          }}
          aria-hidden
        />
      </div>

      <div className="relative z-10 container flex w-full flex-1 flex-col pb-8 pt-6">
        <div className="flex w-full max-w-none flex-1 flex-col justify-center text-center md:text-left">
          <div className="mx-auto w-full max-w-3xl space-y-6 md:mx-0 md:max-w-4xl md:space-y-8">
            <div className="inline-flex items-center justify-center gap-2 self-center rounded-full border border-primary/30 bg-primary/15 px-4 py-2 md:self-start">
              <Car className="h-4 w-4 shrink-0 text-primary" aria-hidden />
              <span className="text-xs font-semibold tracking-wide text-primary sm:text-sm">
                TRUSTED JAPANESE VEHICLE IMPORTS
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                Drive Your Dream Car
                <br />
                from <span className="text-primary">Japan.</span>
              </h1>
              <p className="text-lg font-medium text-muted-foreground sm:text-xl">
                Premium Japanese Vehicles
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Delivered to Your Doorstep
              </p>
            </div>

            <ul className="space-y-3 text-left">
              {[
                "125+ Vehicles Imported Past Year",
                "Experience Since 2018",
                "Over 99% Customer Satisfaction",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/25">
                    <Check
                      className="h-3.5 w-3.5 text-primary"
                      strokeWidth={3}
                    />
                  </span>
                  <span className="text-base font-medium leading-snug">
                    {line}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex w-full flex-col gap-3 sm:max-w-xl sm:flex-row sm:flex-wrap md:max-w-none">
              <Link
                href="/inventory"
                className="btn-primary w-full min-h-[48px] sm:w-auto sm:min-w-[200px]"
              >
                Explore Inventory
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

            <p className="text-sm italic text-muted-foreground">
              No hidden charges. No surprises.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-7xl grid-cols-1 gap-4 pb-10 pt-2 sm:mt-12 md:grid-cols-3 md:gap-5 lg:gap-6">
          {TRUST_STATS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex h-full min-h-[5.5rem] items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] p-4 shadow-sm ring-1 ring-white/5 backdrop-blur-md sm:min-h-0 sm:p-5"
            >
              <div className="flex w-full max-w-sm items-start justify-center gap-4 sm:max-w-none">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/15">
                  <Icon className="h-7 w-7 text-primary" aria-hidden />
                </div>
                <div className="min-w-0 text-left">
                  <p className="font-display text-2xl font-bold text-foreground md:text-3xl">
                    {value}
                  </p>
                  <p className="text-sm text-muted-foreground">{label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
