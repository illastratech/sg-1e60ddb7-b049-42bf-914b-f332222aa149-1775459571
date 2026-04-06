import { MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/** Place PNG files in `public/featured/` using these names (or change paths below). */
const vehicles = [
  {
    name: "Toyota Raize 2022",
    location: "Colombo",
    image: "/featured/toyota-raize-2022.png",
  },
  {
    name: "Honda Vezel 2022",
    location: "Negombo",
    image: "/featured/honda-vezel-2022.png",
  },
  {
    name: "Toyota Voxy 2021",
    location: "Gampaha",
    image: "/featured/toyota-voxy-2021.png",
  },
  {
    name: "Toyota Harrier 2021",
    location: "Battaramulla",
    image: "/featured/toyota-harrier-2021.png",
  },
] as const;

export function FeaturedVehicles() {
  return (
    <section className="w-full bg-secondary/30 py-16 md:py-20">
      <div className="container">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between md:mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Featured Imports
          </h2>
          <Link
            href="/inventory"
            className="hidden items-center gap-2 font-medium text-primary transition-colors hover:text-primary/85 md:inline-flex"
          >
            View All Imported Vehicles
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="feature-card group cursor-pointer overflow-hidden p-0">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3 sm:p-6">
                <h3 className="mb-1 font-display text-sm font-bold sm:mb-2 sm:text-xl">{vehicle.name}</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{vehicle.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link 
          href="/inventory" 
          className="flex md:hidden items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium mt-8"
        >
          View All Imported Vehicles
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}